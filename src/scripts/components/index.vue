<template>
    <div class="m-index">
        <Header />
        <section>
            <router-view></router-view>
        </section>
        <Nav />
    </div>
</template>

<script>
    import Vue from 'vue'
    import Header from './Header'
    import Nav from './Nav'
    Vue.component('Header',Header)
    Vue.component('Nav',Nav)
    export default{

    }
/*
    import axios from 'axios'
    export default{    //  就相当于 new Vue   是 ES6 的语法
        mounted:function(){
            let that=this;
            // console.log(0)
            // console.log(axios)
            // mock 数据 json-server,使用假数据，在 static 中建mock文件夹，内建mock.js  weiper.json
            // 在mock.js内写
            data(){
                return{
                    dataSource:[]    // 默认是个空数组
                }
            },
            axios.({
                method:'get',
                url:''
            })
            .then(function(res){
                // console.log(res)
                this. dataSource=that.dataSource.concat(res.data.subjects)
            })
        }    这是完毕后 在 需要的地方引入 :src="item.images.图片的路径"
        然后抽离axios 在utils下面
    }*/

/*  // 抽离完后再写
    export default {
        data(){
            return {
                dataSource:[]
            }
        },
        mounted:function(){
            let that = this
            utilAxios.get({
                url:'http://loacalhost:9000/swiper',
                method:'get',
                callback:function(res){
                    this. dataSource = that.dataSource.concat(res.data.subjects)
                }
            })
        }
    }  */
</script>
