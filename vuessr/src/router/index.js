import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [{
        path: '/',
        name: 'a',
        component: () =>
            import ('@/components/a')
    },
    {
        path: '/b',
        component: () =>
            import ('@/components/b')
    }
]
export default function createRouter() {
    let vueRouter = new Router({
        mode: 'history',
        routes
    })
    return vueRouter
}