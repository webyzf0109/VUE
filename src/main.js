// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//vuex 引用
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        //修改store.state中的数据  this.$store.commit('addcount')
        addcount(state) {
            //参数最多支持两个  1 ：state 2:commit 传过来的
            state.count++;
        },
        stractcount(state) {
            state.count--;
        }
    },
    getters: {
        //只负责get值不负责修改 但是可以对数据进行包装  跟过滤器和计算属性比较像
        optcount(state) {
            return '最新的count值' + state.count
        }
    }
})
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})