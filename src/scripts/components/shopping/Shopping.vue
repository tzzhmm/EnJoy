<template>
  <div class="m-shopping">
      <div class="cart">
          <div class="cart_goods">
              <!-- https://api.ricebook.com/3/enjoy_product/cart_recommend_product.json?city_id=1 -->
              <ul>
                  <li>
                      <!-- <span class="check el-icon-circle-check"></span> -->
                      <i class="hook yo-ico"></i>
                      <div class="goods">
                          <div class="goods_pic">
                              <img src="https://image.ricebook.com/business/20271231023582" alt="">
                          </div>
                          <div class="goods_name">
                              <p class="title">奇奥菈 Muesli Plus 多果营养燕麦片</p>
                              <p class="price">单价: 88元</p>
                              <div class="yo-number num">
                                  <span class="minus" >-</span>
                                  <input type="text" class="input" value="0" v-module="">
                                  <span class="plus">+</span>
                              </div>
                              <i class="detele yo-ico"></i>
                          </div>
                      </div>
                  </li>
              </ul>
              <div class="mark"></div>
          </div>
      </div>
  </div>
</template>

<script>
    import Vue from 'vue'

    import ElementUI from 'element-ui'
    import locale from 'element-ui/lib/locale/lang/en'

    Vue.use(ElementUI, { locale })
    export default {
        data() {
          return {
            num1: 1
          };
        },
        methods: {
          handleChange(value) {
            console.log(value);
          }
        }
    }
</script>
