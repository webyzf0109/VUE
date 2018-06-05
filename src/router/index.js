import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vuexone from '@/views/vuex/vuexone'
import loadmore from '@/views/mintUi/loadmore'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/vuexone',
            name: 'vuexone',
            component: vuexone
        },
        {
            path: '/loadmore',
            name: 'loadmore',
            component: loadmore
        },
    ]
})