<template>
    <div class="m-index">
        <header class="yo-header yo-header-a">
            <h2 class="title"><img src="/static/images/Header/logo.jpg" alt=""><span>北京</span></h2>
            <span class="regret"></span>
            <span class="affirm yo-ico">&#xf067;</span>
        </header>
        <section>
            <!-- <router-view></router-view> -->
            <div>
                <div class="section_title">
                    <div class="section_title_content">
                        <p class="title">今日推荐</p>
                        <p class="sub_title">每天告诉你大家爱吃的和最近值得吃的</p>
                        <div class="queue"><span>1</span>/8</div>
                    </div>
                    <div class="section_pic">
                        <!-- <ul>
                            <li>
                                <img src="http://placehold.it/335x189" alt="">
                                <p class="tips">今日主题</p>
                                <p class="title">慵懒周末从这一份Brunch开始！</p>
                                <p class="sub_title">想赖床又想吃好东西？来顿Brunch吧！</p>
                            </li>
                        </ul> -->
                        <mt-swipe :auto="2000" :continuous="false">
                          <mt-swipe-item>
                              <img src="http://placehold.it/335x189" alt="">
                              <p class="tips">今日主题</p>
                              <p class="title">慵懒周末从这一份Brunch开始！</p>
                              <p class="sub_title">想赖床又想吃好东西？来顿Brunch吧！</p>
                          </mt-swipe-item>
                        
                        </mt-swipe>
                    </div>
                </div>
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
    import { Swipe, SwipeItem } from 'mint-ui'

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    export default{

    }
</script>
