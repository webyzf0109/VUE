import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vuexone from '@/views/vuex/vuexone'
import loadmore from '@/views/mintUi/loadmore'
import loadinfinite from '@/views/mintUi/loadinfinite'
import select from '@/views/select/select'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/vuexone', //vuex
            name: 'vuexone',
            component: vuexone
        },
        {
            path: '/loadmore', //下拉加载
            name: 'loadmore',
            component: loadmore
        },
        {
            path: '/loadinfinite', //无限滚动
            name: 'loadinfinite',
            component: loadinfinite
        },
        {
            path: '/select', //级联选择
            name: 'select',
            component: select
        },
    ]
})