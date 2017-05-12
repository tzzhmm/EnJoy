<template>
  <div class="m-list">
    <Header />

    <section v-if="list">
      <div class="list" infinite-scroll-disabled="loadMoreBusy" infinite-scroll-distance="200" infinite-scroll-immediate-check="false">
          <div class="index-list">
              <h3>每周精选餐饮</h3>
              <div class="date" v-html="data0.group_section.desc"></div>
              <ul class="sku-list">
                  <li class="sku-item" v-for="(item,index) in data0.tabs">
                      <a href="https://enjoy.ricebook.com/product/1003137/"> <img lazy="loaded" :src="item.url" >
                          <div class="title single-line-ellipsis" v-html="item.title"></div>
                          <div class="desc single-line-ellipsis" v-html="item.desc"></div>
                      </a>
                  </li>

              </ul>
          </div>
          <div class="index-list">
              <h3>每周精选餐饮</h3>
              <div class="date" v-html="data1.group_section.desc"></div>
              <ul class="sku-list">
                  <li class="sku-item" v-for="(item,index) in data1.tabs">
                      <a href="https://enjoy.ricebook.com/product/1003137/"> <img lazy="loaded" :src="item.url" >
                          <div class="title single-line-ellipsis" v-html="item.title"></div>
                          <div class="desc single-line-ellipsis" v-html="item.desc"></div>
                      </a>
                  </li>

              </ul>
          </div>
          <div class="index-list">
              <h3>每周精选餐饮</h3>
              <div class="date" v-html="data2.group_section.desc"></div>
              <ul class="sku-list">
                  <li class="sku-item" v-for="(item,index) in data2.tabs">
                      <a href="https://enjoy.ricebook.com/product/1003137/"> <img lazy="loaded" :src="item.url" >
                          <div class="title single-line-ellipsis" v-html="item.title"></div>
                          <div class="desc single-line-ellipsis" v-html="item.desc"></div>
                      </a>
                  </li>

              </ul>
          </div>


      </div>
    </section>

    <Nav />
  </div>
</template>

<script>

import utilAxios from '../../utils/axios'
import Header from '../Header.vue'
import Nav from '../Nav.vue'
export default {
  data(){
    return {
      list: null,
      data0: [],
      data1: [],
      data2: []
    }
  },
  mounted: function() {
    let that = this

    utilAxios.get({
      url:'https://api.ricebook.com/hub/home/v1/web/week_choice.json?city_id=140&page=0',
      method: 'get',
      callback: function(res){
        console.log(res);
        // console.log(res.data[0].group_section.desc)
        // console.log(res.data[0].tabs[0].url)

        that.list = res
        that.data0= res.data[0]
        that.data1= res.data[1]
        that.data2= res.data[2]
        console.log(that.data0.tabs);
      }
    })
  }
}
</script>
