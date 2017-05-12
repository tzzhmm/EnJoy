<template id="">
<div id="detail" v-if="light">
    <h3 class="card-title">亮点</h3>
    <div class="detail-item" v-for="(item,index) in light" :key="index">
        <img :src="item.img_url" alt="" style="width:3.35rem; height：2.23rem">
        <p class="sub-title">{{item.title}}</p>
        <p class="content">
            {{item.content}}
        </p>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
  import utilAxios from '../../utils/axios'
  export default{
      data(){
        return {
          light:[]
        }
      },

      mounted:function (){
        let that = this
        utilAxios.get({
          url:`/api/product/info/product_detail.json?product_id=${this.$route.params.type}`,
          method:'get',
          callback:function(res){
        
            that.light = res.data.modules[2].data.lights;
          }
        })
      }
  }
</script>
