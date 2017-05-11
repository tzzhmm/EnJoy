<template id="">
  <div class="two-col">
      <h3 class="card-title">
          猜你喜欢
      </h3>
      <ul class="like-list">
          <router-link tag="li" v-for="(item,index) in like" :key="index" id="item.product_id" :to="`/detail/${item.product_id}`">
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
          </router-link>
      </ul>
  </div>
</template>

<script>
import Vue from 'vue'
  import utilAxios from '../../utils/axios'
  export default{
      data(){
        return {
          like:[]
        }
      },
      mounted:function (){
        let that = this
        utilAxios.get({
          url:`/api/product/info/product_detail.json?product_id=${this.$route.params.id}`,
          method:'get',
          callback:function(res){
            console.log(res.data.modules[4].data.recommend)
            that.like = res.data.modules[4].data.recommend
          }
        })
      }
  }
</script>
