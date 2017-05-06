
import Vue from 'vue'
import index from './scripts/components/index.vue'

require('./styles/app.scss')

Vue.config.productionTip = false
new Vue({
    el:'#app',
    components:{ index },
    template:'<index />'
})
