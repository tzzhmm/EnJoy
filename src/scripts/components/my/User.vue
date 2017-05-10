<template lang="html">

    <div class="m-user">
      <div class="my_id">
        <div class="emil">
          <img src="/static/images/User/01_03.gif"/>
        </div>
        <div class="my_box">
          <div class="my_logo">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494346824683&di=f0dd9ce75199322afd081deefd066c36&imgtype=0&src=http%3A%2F%2Fwww.qqpk.cn%2FArticle%2FUploadFiles%2F201207%2F20120725101307951.jpg"/>
          </div>
          <h4>USER</h4>
        </div>
      </div>
      <div class="cpt">
        <div class="cpt_t">
          <div class="cpt_1">
            <p><span>0</span> 份</p>
            <p>商品消费码</p>
            <img src="/static/images/User/02_03.jpg" />
          </div>
          <div class="cpt_0">
            <span></span>
          </div>
          <div class="cpt_2">
            <p><span>0</span> 点</p>
            <p>PASS专享通</p>
            <img src="/static/images/User/02_03.jpg" />
          </div>
        </div>
      </div>
      <div class="my_order">
        <div class="order_box">
          <div class="order_1">
            <span class="s1">我的订单</span>
            <span class="s2">查看全部订单
              <img src="/static/images/User/02_03.jpg"/>
            </span>
          </div>
          <div class="erder_2">
            <ul>
              <router-link tag="li" :to="''">
                <div>
                  <img src="/static/images/User/01_16.gif" />
                </div>
                <p>未使用</p>
              </router-link>
              <router-link tag="li" :to="''">
                <div>
                  <img src="/static/images/User/01_10.gif" />
                </div>
                <p>待发货</p>
              </router-link>
              <router-link tag="li" :to="''">
                <div>
                  <img src="/static/images/User/01_19.gif" />
                </div>
                <p>待收货</p>
              </router-link>
              <router-link tag="li" :to="''">
                <div>
                  <img src="/static/images/User/01_07.gif" />
                </div>
                <p>待反馈</p>
              </router-link>
              <router-link tag="li" :to="''">
                <div>
                  <img src="/static/images/User/01_13.gif" />
                </div>
                <p>退款</p>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
      <div class=""></div>
      <!-- <div class="nav">

        <Nav />
      </div> -->

    </div>




</template>

<script>
// import Vue from 'vue'
// import Nav from '../Nav'
// Vue.component('Nav',Nav)
export default {
}
</script>
