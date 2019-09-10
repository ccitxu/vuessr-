import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld' 
import a from '@/components/a' 
import b from '@/components/b' 
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
export default function createRouter() {
    let vueRouter = new Router({
        mode: 'history',
        routes
    })
    return vueRouter
}