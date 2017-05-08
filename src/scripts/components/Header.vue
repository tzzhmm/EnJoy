
<template lang="html">
    <header class="yo-header yo-header-a">
        <span class="regret left yo-ico" v-if="isShowBack" @click="back">&#xf07d;111</span>
        <h2 class="title"><img src="/static/images/Header/logo.jpg" alt=""><span>北京</span></h2>
        <span class="affirm yo-ico">&#xf067;</span>
    </header>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:{
            isShowBack:{
                type:Boolean,
                reuired:false
            }
        },
        methods: {
           back: function () {
             this.$router.go(-1)
           }
         },

         mounted: function () {
           // console.log(0);
         },

         updated: function () {
           // console.log(1);
         }
    }
</script>
