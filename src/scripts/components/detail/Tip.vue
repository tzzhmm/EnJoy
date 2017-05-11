<template id="">
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
</template>

<script>
import Vue from 'vue'
  import utilAxios from '../../utils/axios'
  export default{
      data(){
        return {
          tip:[]
        }
      },
      mounted:function (){
        let that = this
        utilAxios.get({
          url:`/api/product/info/product_detail.json?product_id=${this.$route.params.id}`,
          method:'get',
          callback:function(res){
            console.log(res.data.modules[3].data.contents)
            that.tip = res.data.modules[3].data.contents;
          }
        })
      }
  }
</script>
