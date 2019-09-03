// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { createRouter } from './router'

Vue.config.productionTip = true
export function createVM() {
    const router = createRouter();
    const vm = new Vue({
        router,
        render: h => h(App)
    });
    return { vm, router }
}