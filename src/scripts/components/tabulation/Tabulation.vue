<template>

    <div class="tabulation">
        <div class="m-tabulation">
            <div class="tabulation_inp">
                <!-- <span class="search">
                    <b class="yo-ico"></b>
                    <input type="text" name="" value="" placeholder="请输入商品名、商家、商圈、分类" />
                </span> -->
                <div class="yo-search yo-search-a">
                        <label class="action">
                        <span class="yo-ico"></span>
                        <input type="text" class="input input-shrink" placeholder="输入搜索关键字..." />
                        </label>
                    <span class="cancel">取消</span>
                </div>
            </div>
        </div>
        <div class="tabulation_t">
            <el-tabs v-model="activeName" type="card"  @tab-click="handleClick">
                 <el-tab-pane label="热门" name="first" >
                     <div class="tabulation_section_zt">
                         <div class="section_zt_title">热门专题</div>
                         <div class="section_zt_list">
                             <img class="img_l" src="/static/images/tabulation/1.jpg" alt="">
                             <img class="img_r" src="/static/images/tabulation/2.jpg" alt="">
                         </div>
                     </div>
                     <div class="tabulation_section_fl">
                         <div class="section_fl_title">热门分类</div>
                         <div class="section_fl_list">
                             <ul>
                                 <li>
                                     <img src="/static/images/tabulation/list1.jpg" alt="">
                                     <span>日用家电</span>
                                 </li>
                                 <li>
                                     <img src="/static/images/tabulation/list2.jpg" alt="">
                                     <span>数码文具</span>
                                 </li>
                                 <li>
                                     <img src="/static/images/tabulation/list3.jpg" alt="">
                                     <span>美容洗护</span>
                                 </li>
                             </ul>
                             <ul class="mt">
                                 <li>
                                     <img src="/static/images/tabulation/list6.jpg" alt="">
                                     <span>果酿</span>
                                 </li>
                                 <li>
                                     <img src="/static/images/tabulation/list5.jpg" alt="">
                                     <span>曲奇饼干</span>
                                 </li>
                                 <li>
                                     <img src="/static/images/tabulation/list4.jpg" alt="">
                                     <span>花和香薰</span>
                                 </li>
                             </ul>

                         </div>
                     </div>
                 </el-tab-pane>
                 <el-tab-pane label="精选餐厅" name="second">
                     <div class='s-banner'>
                         <img src="http://img02.hua.com/app/api/flower/12171.png" alt="">
                     </div>
                     <div class='s-list'>
                         <h3>{{title}}</h3>
                        <ul>
                             <router-link tag="li" :key="index" :to="`/list/${item.id}`" v-for="(item,index) in searchList">
                                 <img :src="item.img" alt=""/>
                                 <p v-text="item.tle"></p>
                             </router-link>
                        </ul>
                     </div>
                 </el-tab-pane>
                 <el-tab-pane label="本地生活" name="third">本地生活</el-tab-pane>
                 <el-tab-pane label="良品好物" name="fourth">良品好物</el-tab-pane>
                 <el-tab-pane label="优选美酒" name="fifth">优选美酒</el-tab-pane>
                 <el-tab-pane label="好味食品" name="sixth">好味食品</el-tab-pane>
                 <el-tab-pane label="咖啡和茶" name="seventh">咖啡和茶</el-tab-pane>
            </el-tabs>
        </div>

    </div>

</template>

<script>

    import Vue from 'vue'
    // import {Indicator} from 'mint-ui';

    import {Tabs,TabPane} from 'element-ui'
    Vue.component(Tabs.name, Tabs)
    Vue.component(TabPane.name, TabPane)

    // import utilAxios from '../../utils/axios'
    import Search from '../search/Search'
    Vue.component('Search',Search)

    export default {
        data() {
          return {
            activeName: '1',
            searchList: [],
            title:'',
          }
        },
       methods:{
            handleClick:function(tab, event) {
                // console.log(tab.index);
               let i=tab.index
               //console.log(i)
               let that = this
                //  console.log(utilAxios)
                // utilAxios.get({
                //     url: 'mock/search',
                //     method: 'get',
                //     callback: function (res) {
                //         //that.searchList = res.data[0]
                //         that.title = res.data[i].title
                //         that.searchList = res.data[i].Img
                //         //  console.log(that.searchList)
                //     }
                // })
            }
        }
    }
</script>
