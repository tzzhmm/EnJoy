<template lang="html">
    <nav>
        <ul>
            <router-link tag="li" :to="'/Home'"  class="yo-i"><span class="yo-ico">&#xe656;</span><p>精选</p></router-link>
            <router-link tag="li" :to="'/Tabulation'" ><span class="yo-ico">&#xe621;</span><p>分类</p></router-link>
            <router-link tag="li" :to="'/Magazine'" ><span class="yo-ico">&#xe67a;</span><p>杂志</p></router-link>
            <router-link tag="li" :to="'/Shopping'" ><span class="yo-ico">&#xe6f8;</span><p>购物车</p></router-link>
            <router-link tag="li" :to="'/Login'" ><span class="yo-ico">&#xe602;</span><p>我的</p></router-link>
        </ul>
    </nav>
</template>

<script>
    export default {

    }
</script>
