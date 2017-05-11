<template>
  <div class="m-detail" v-if="dataF">
    <Header />
    <section>
      <!-- <mt-popup
        v-model="popupVisible" closeOnClickModal="true"
        position="top"> -->
        <!-- <div class="yo-search yo-search-a" style="display:none;">
          <label class="action">
              <span class="yo-ico"></span>
              <input type="text" @keyup.enter="search" v-model="keywords" class="input input-shrink" placeholder="输入搜索关键字...">
          </label>
        <span class="btn" @click="cancel">搜索</span> -->
      <!-- </div> -->
      <!-- </mt-popup> -->

        <div class="banner">
              <mt-swipe :auto="2000">
                <mt-swipe-item v-for="(item,index) in dataSource" :key="index">
                    <img :src="item.img_url" alt="">
                </mt-swipe-item>
              </mt-swipe>
        </div>
        <div>
          <div class="info">
              <div class="info-title">
                  <p class="title">
                    {{dataF?dataF.name:null}}
                  </p>
                  <p class="desc">{{dataF?dataF.description:null}}</p>
                  <p class="price">
                    <span class="r-price">{{dataF.price/100}}</span>
                    <span class="unit">元</span>
                    <span class="entity">
                      /
                      份
                    </span>
                    <span class="o-price">
                      ¥
                      {{dataF.origin_price/100}}
                    </span>
                    <span class="status">
                      <span class="gap"></span>
                      <span>随时退</span>
                    </span>
                  </p>
                  <div class="fav">
                      <div class="heart">
                        <span class="yo-ico heart-ico">&#xe61b;</span>
                      </div>
                      <p></p>
                  </div>
              </div>
          </div>
          <div class="panel-gap"></div>
        </div>
        <div>
          <div id="express-menu" v-if="detail">
              <h3 class="card-title">商品详情</h3>
              <div class="title">{{detail.restaurant_name}}</div>
              <ul class="menu-table">
                <li>
                  <span class="yo-ico">&#xe640;</span>
                  <span class="value">{{detail.restaurant_address}}</span>
                </li>
                <li>
                  <span class="yo-ico">&#xe61d;</span>

                  <span class="value">{{detail.restaurant_phone_numbers[0]?detail.restaurant_phone_numbers[0]:null}}</span>
                  <!-- <span class="value">{{detail.restaurant_phone_numbers[0]}}</span> -->

                </li>
              </ul>
          </div>
          <div class="panel-gap"></div>
        </div>
        <div>
          <Menu  />

          <div class="panel-gap"></div>
      </div>
        <div product-type="1">
            <Light />

            <div class="panel-gap"></div>
        </div>
        <div>
          <Tip  />

            <div class="panel-gap"></div>
        </div>
        <div class="like">
          <Like  />
        </div>
    </section>

    <nav>
        <div class="sub-area">
            <div class="title">
                <p style="width:2.4rem;">
                  已选择：脆皮泡芙（份）
                </p>
                <a href="" style="display:none;">
                  关闭
                  <span class="toggle-down"></span>
                </a>
                <a href="">
                  切换商品<span class="toggle-up"></span>
                </a>
            </div>
            <div class="info fade-vertical-transition" style="display:none;"></div>
        </div>
        <div class="sub-btn">
            <a class="confirm fade-transition" style="display:none;">确定</a>
            <div class="cart fade-transition">
              <span class="yo-ico">&#xe608;</span>
              <i class="tip"></i>
            </div>
            <a class="add-cart fade-transition on">加入购物车</a>
            <a class="fade-transition pay on">即刻购买</a>
        </div>
    </nav>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Header from '../Header'
  Vue.component('Header',Header)
  import {Swipe, SwipeItem}from 'mint-ui'
  import {Popup} from 'mint-ui'
  Vue.component(Popup.name,Popup)
  import 'mint-ui/lib/style.css'
  Vue.component(Swipe.name,Swipe)
  Vue.component(SwipeItem.name,SwipeItem)
  import utilAxios from '../../utils/axios'
  import Menu from './Menu.vue'
  Vue.component('Menu',Menu)
  import Light from './Light.vue'
  Vue.component('Light',Light)
  import Like from './Like.vue'
  Vue.component('Like',Like)
  import Tip from './Tip.vue'
  Vue.component('Tip',Tip)
  export default {
    data(){
      return{
        dataSource:[],
        dataF:null,
        detail:'',
        // tip:[],
        like:[],
        popupVisible:''
      }
    },
    mounted:function(){
      let that = this
    //   console.log(1)
    let type = that.$route.params.type
      utilAxios.get({

        url:`/api/product/info/product_detail.json?product_id=${that.$route.params.type}`,
        // url:"https://api.ricebook.com/product/info/product_detail.json?product_id=1003137",
        method:'get',
        callback:function(res){

          that.dataSource = that.dataSource.concat(res.data.basic.product_images);
          that.dataF =res.data.basic;
          that.detail=res.data.modules[0].data.restaurants[0];
          // that.menu= res.data.modules[1].data.contents;
          // that.light = res.data.modules[2].data.lights;
          // that.tip = res.data.modules[3].data.contents;
          // that.like = res.data.modules[4].data.recommend
        }
      })
    }
  }
</script>
