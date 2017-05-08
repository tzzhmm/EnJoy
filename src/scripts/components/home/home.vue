<template>
    <div>
        <div class="section_title">
            <div class="section_title_content">
                <p class="title">今日推荐</p>
                <p class="sub_title">每天告诉你大家爱吃的和最近值得吃的</p>
                <div class="queue"><span>1</span>/8</div>
            </div>
            <div class="section_pic">
                <mt-swipe :auto="0" :continuous="false">
                  <mt-swipe-item v-for="(item,index) in dataSwiper" :key="index">
                      <img :src="item.url" alt="">
                      <p class="tips">{{item.tag}}</p>
                      <p class="title">{{item.title}}</p>
                      <p class="sub_title">{{item.desc}}</p>
                  </mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
        <div class="section_restaurant">
            <div class="restaurant">
                <div class="restaurant_pic">
                    <ul>
                        <li>
                            <div class="restaurant_details">
                                <img src="https://image.ricebook.com/business/20373785523424?imageView2/2/w/325" alt="">
                                <div class="mark"></div>
                                <p class="title">日本料理</p>
                                <p class="sub_title">10个精品店</p>
                            </div>
                        </li>
                        <li>
                            <div class="restaurant_details">
                                <img src="https://image.ricebook.com/business/20373791223425?imageView2/2/w/325" alt="">
                                <div class="mark"></div>
                                <p class="title">精选西餐</p>
                                <p class="sub_title">10个精品店</p>
                            </div>
                        </li>
                        <li>
                            <div class="restaurant_details">
                                <img src="https://image.ricebook.com/business/20373794123454?imageView2/2/w/325" alt="">
                                <div class="mark"></div>
                                <p class="title">今日特卖</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section_alcohol">
            <div class="alcohol">
                <div class="alcohol_detail">
                    <h3>优选美酒</h3>
                    <div class="activity">本周上架10款精品，10款新品</div>
                    <div class="more">查看更多</div>
                    <ul>
                        <li v-for="(item,index) in dataAlcohol" :key="index">
                            <img lazy="loaded" :src="item.url"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section_foot">
            <div class="foot">
                <div class="foot_detail">
                    <h3>好味食品</h3>
                    <div class="activity">本周上架10款精品，10款新品</div>
                    <div class="more">查看更多</div>
                    <ul>
                        <li v-for="(item,index) in dataFoot" :key="index">
                            <img lazy="loaded" :src="item.url"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="section_thing">
            <div class="thing">
                <div class="thing_detail">
                    <h3>良品好物</h3>
                    <div class="activity">本周上架10款精品，10款新品</div>
                    <div class="more">查看更多</div>
                    <ul>
                        <li v-for="(item,index) in dataThing" :key="index">
                            <img lazy="loaded" :src="item.url"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui'
    import "mint-ui/lib/style.css"
    import utilAxios from '../../utils/axios.js'

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    export default{
        data(){
            return {
                dataSwiper:[],
                // dataRestaurant:[]
                dataAlcohol:[],
                dataFoot:[],
                dataThing:[]
            }
        },
        mounted:function(){
            let that = this
            utilAxios.get({
                url:'/api/hub/home/v1/web/explore.json?city_id=140',
                method:'get',
                callback:function(res){
                    console.log(res.data[2].data.tabs)
                    that.dataSwiper = that.dataSwiper.concat(res.data[0].data.tabs),
                    // that.dataRestaurant = that.dataRestaurant.concat(res.data[1].data.tabs)
                    that.dataAlcohol = that.dataAlcohol.concat(res.data[2].data.tabs),
                    that.dataFoot = that.dataFoot.concat(res.data[3].data.tabs),
                    that.dataThing = that.dataThing.concat(res.data[4].data.tabs)
                }
            })
        }
    }
</script>
