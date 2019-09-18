import Vue from 'vue'
import App from './App'
import createRouter from './router'
export function createVM() {
    const router = createRouter();
    const vm = new Vue({
        router,
        render: h => h(App)
    });
    return { vm, router }
}