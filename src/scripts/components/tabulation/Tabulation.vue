<template>
    <div class="tabulation">
        <div class="m-tabulation">
            <div class="tabulation_inp">
                <span class="search">
                    <b class="yo-ico"></b>
                    <input type="text" name="" value="" placeholder="请输入商品名、商家、商圈、分类" />
                </span>
                <!-- <div class="yo-search yo-search-a">
                        <label class="action">
                        <span class="yo-ico"></span>
                        <input type="text" class="input input-shrink" placeholder="输入搜索关键字..." />
                        </label>
                    <span class="cancel" @click="cancel">取消</span>
                </div> -->
            </div>
        </div>
        <div class="tabulation_t">
            <div class="tabulation_nav">
                <div class="navtitle">
                    <h1>热门</h1>
                </div>
                <div class="navbar">
                    <ul>
                        <li>精选餐厅</li>
                        <li>本地生活</li>
                        <li>良品好物</li>
                        <li>优选美酒</li>
                        <li>好味食品</li>
                        <li>咖啡和茶</li>
                    </ul>
                </div>
            </div>

            <div class="tabulation_section">
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

                <div class="">

                </div>
                <!-- <mt-tab-container v-model="active">
                    <mt-tab-container-item id="tab-container1">
                        <mt-cell title="tab-container 1"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container2">
                        <mt-cell title="tab-container 2"></mt-cell>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="tab-container3">
                        <mt-cell title="tab-container 3"></mt-cell>
                    </mt-tab-container-item>
                </mt-tab-container> -->

            </div>  <!--section-->
        </div>

    </div>

</template>

<script>

    import Vue from 'vue'
    import {Indicator} from 'mint-ui';

    import { TabContainer, TabContainerItem } from 'mint-ui';
    Vue.component(TabContainer.name, TabContainer);
    Vue.component(TabContainerItem.name, TabContainerItem);
    // import utilAxios from '../../utils/axios'
    // import Search from '../search/Search'
    // Vue.component('Search',Search)

    export default {
    }
</script>
