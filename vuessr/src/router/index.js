import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const a = () =>
    import ('@/components/a');
const b = () =>
    import ('@/components/b')
Vue.use(Router)
const routes = [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/a',
        name: 'a',
        component: a
    },
    {
        path: '/b',
        name: 'b',
        component: b
    }
]
export function createRouter() {
    return new Router({
        mode: 'history',
        routes
    })
}