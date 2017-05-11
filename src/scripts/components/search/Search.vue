<template >
    <div class="m-search">
        <Header />
        <section>
         <div class="yo-search yo-search-a" :show="isShow">
          <label class="action">
            <span class="yo-ico"></span>
            <input type="text" @keyup.enter="search" v-model="keywords" class="input input-shrink" placeholder="输入搜索关键字...">
          </label>
          <span class="cancel" @click="cancel">取消</span>
        </div>

             <div class="select">
                <div class="active">本地服务</div>
                <div>全国送</div>
            </div>
            <div class="tips">
                <span>根据您的关键词<span>天</span>为您推荐以下商品</span>
            </div>
            <div class="search-list">
              <router-link :key="index" class="search-cell" :to="`/detail/${item.product_id}`" tag="div" v-for="(item,index) in list ">
                    <a href="#" class="full-link"></a>
                    <img :src="item.product_image"  alt="" style="width:1.725rem;height:1.15rem">
                    <div class="products-info">
                        <div class="product-title">{{item.name}}</div>
                        <div class="product-price">
                            <div class="price">
                              <span class="num">{{item.price/100}}</span>
                              元/
                              {{item.storage_status}}位
                            </div>
                            <div class="origin-price">
                              ￥{{item.original_price/100}}
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </section>
        <Nav />
    </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
  import Header from '../Header'
  Vue.component('Header',Header)
  import Nav from '../Nav'
  Vue.component('Nav',Nav)
  import Vue from 'vue'
  import {Indicator} from 'mint-ui';
  import utilAxios from '../../utils/axios'
  export default{
    data(){
      return{
        keywords:'',
        list:[],
        isShow:false
        // popupVisible:false
      }
    },
    methods:{
        search:function(){
          let that = this
          let type = that.$route.params.type
          Indicator.open({
            text:'加载中...',
            spinnerType:'fading-circle'
          });

          utilAxios.get({

            // /api/product/info/product_detail.json?product_id=1037410'
            url:`/api/3/enjoy_product/search.json?city_id=140&keyword=${this.keywords}&page=0`,
            method:'get',
            callback:function(res){
              // console.log(res)
              that.list = res.data.products
              Indicator.close()
            }
          })

      },
      cancel:function(){
        this.keywords =""
        let that = this
      }
    }
  }
</script>
