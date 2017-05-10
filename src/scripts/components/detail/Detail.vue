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
          <div id="express-menu">
              <h3 class="card-title">商品详情</h3>
              <div class="title">{{detail.restaurant_name}}</div>
              <ul class="menu-table">
                <li>
                  <span class="yo-ico">&#xe640;</span>
                  <span class="value">{{detail.restaurant_address}}</span>
                </li>
                <li>
                  <span class="yo-ico">&#xe61d;</span>
                  <!-- <span class="value">{{detail.restaurant_phone_numbers[0]}}</span> -->
                </li>
              </ul>
          </div>
          <div class="panel-gap"></div>
        </div>
        <div>
          <div id="menu">
            <h3 class="card-title">MENU</h3>
            <div class="menu-list" v-for="(item,index) in menu" :key="index">
              <div class="menu-item clearfix">
                <p class="sub-title">-{{item.sub_title}}-</p>
                <p> {{item.text[0]}} </p>
                <p> {{item.text[1]}} </p>
                <p> {{item.text[2]}} </p>
                <p> {{item.text[3]}} </p>
                <p> {{item.text[4]}} </p>
                <p> {{item.text[5]}} </p>
              </div>

            </div>
          </div>
        <div class="panel-gap"></div>
      </div>
        <div product-type="1">
            <div id="detail">
                <h3 class="card-title">亮点</h3>
                <div class="detail-item" v-for="(item,index) in light" :key="index">
                    <img :src="item.img_url" alt="" style="width:3.35rem; height：2.23rem">
                    <p class="sub-title">{{item.title}}</p>
                    <p class="content">
                        {{item.content}}
                    </p>
                </div>

            </div>
            <div class="panel-gap"></div>
        </div>
        <div>
            <div id="tips">
                <h3 class="card-title">使用提示</h3>
                <ul class="tips-list">
                    <li v-for="(item,index) in tip" :key="index">
                        {{item.text}}
                    </li>

                </ul>
                <p class="fold">
                    更多补充说明
                    <span class="triangle-label">
                        <span class="triangle down "style="border-width: .1rem .05rem .05rem; border-style: solid; border-color: black transparent transparent; border-image: initial;"></span>
                    </span>
                </p>
                <div class="tips-wrapper">
                    <a href="" class="tips-call">
                        <span class="yo-ico lis">&#xe636;</span>
                        联系客服
                    </a>
                </div>
                <div class="modal-mask modal-transition" style="dislay:none;"></div>
            </div>
            <div class="panel-gap"></div>
        </div>
        <div class="like">
            <div class="two-col">
                <h3 class="card-title">
                    猜你喜欢
                </h3>
                <ul class="like-list">
                    <li v-for="(item,index) in like" :key="index" id="item.product_id">
                        <a href="/product/1032519" class="full-link"></a>
                        <img :src="item.product_image_url" style="width:1.6rem; height:1.065rem;" alt="">
                        <div class="desc">
                            <p class="sub-title">{{item.product_name}}</p>
                            <p class="price">
                                <span>{{item.price/100}}
                                  元/
                                  位
                                </span>
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
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
  export default {
    data(){
      return{
        dataSource:[],
        dataF:null,
        detail:'',
        menu:[],
        light:[],
        tip:[],
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

            // console.log(that.$route.params.type)
          console.log(res.data.modules)
        //   console.log(res.data.modules[4].data.recommend)
          that.dataSource = that.dataSource.concat(res.data.basic.product_images);
          that.dataF =res.data.basic;
          that.detail=res.data.modules[0].data.restaurants[0];
          that.menu= res.data.modules[1].data.contents;
          that.light = res.data.modules[2].data.lights;
          that.tip = res.data.modules[3].data.contents;
          that.like = res.data.modules[4].data.recommend
        }
      })
    }
  }
</script>
