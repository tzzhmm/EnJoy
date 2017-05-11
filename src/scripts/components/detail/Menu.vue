<template id="">
  <div id="menu">
    <h3 class="card-title">MENU</h3>
    <div class="menu-list" v-for="(item1,index) in menu" :key="index">
      <div class="menu-item clearfix">
        <p class="sub-title">-{{item1.sub_title}}-</p>
        <p v-for="(item2,index) in item1.text"> {{item2}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
  import utilAxios from '../../utils/axios'
  export default{
      data(){
        return {
          menu:[]
        }
      },


      mounted:function (){
        let that = this

        utilAxios.get({
          url:`/api/product/info/product_detail.json?product_id=${this.$route.params.id}`,

          method:'get',
          callback:function(res){
            // console.log(res.data.modules[1].data.contents)
            that.menu= res.data.modules[1].data.contents
          }
        })
      }
  }
</script>
