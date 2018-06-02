// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//vuex 引用
import Vuex from 'vuex'
Vue.use(Vuex)

//vuex支持模块化 module  在主index.js里面引入所有的 store module   每个module store 定义各自需要的属性
// 最终export default 实现全局 原理类似引入全局变量
// 每个页面 需要引用  import { mapGetters 需要用到的store方法 } from 'vuex'
//github 购物车实例地址  https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        //仅限于同步操作
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
    },
    actions: {
        //异步操作神器  Promise  async/await  复杂的异步嵌套
        addcount({ commit }) {
            setTimeout(() => {
                commit('addcount')
            }, 1000)
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