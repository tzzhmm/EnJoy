<template >
    <div class="m-search">
        <header class="yo-header yo-header-a">
            <h2 class="title"><img src="/static/images/Header/logo.jpg" alt=""><span>北京</span></h2>
            <span class="regret"></span>
            <span class="affirm yo-ico">&#xf067;</span>
        </header>
        <section>
          <div class="yo-search yo-search-a">
          <label class="action">
            <span class="yo-ico"></span>
            <input type="text" @keyup.enter="search" v-model="keywords" class="input input-shrink" placeholder="输入搜索关键字...">
          </label>
          <span class="cancel" @click="cancel">取消</span>
        </div>
            <!-- <div class="select">
                <div class="active">本地服务</div>
                <div>全国送</div>
            </div>
            <div class="tips">
                <span>根据您的关键词<span>天</span>为您推荐以下商品</span>
            </div> -->
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
        <nav>
            <ul>
                <li class="yo-i"><span class="yo-ico">&#xe656;</span><p>精选</p></li>
                <li><span class="yo-ico">&#xe621;</span><p>分类</p></li>
                <li><span class="yo-ico">&#xe67a;</span><p>杂志</p></li>
                <li><span class="yo-ico">&#xe6f8;</span><p>购物车</p></li>
                <li><span class="yo-ico">&#xe602;</span><p>我的</p></li>
            </ul>
        </nav>
    </div>
</template>
<script>
  import Vue from 'vue'
  import {Indicator} from 'mint-ui';
  import utilAxios from '../../utils/axios'
  export default{
    data(){
      return{
        keywords:'',
        list:[]
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
              console.log(res)
              that.list = res.data.products
              Indicator.close()
            }
          })
      },
      cancel:function(){
        this.keywords =""
      }
    }
  }
</script>
