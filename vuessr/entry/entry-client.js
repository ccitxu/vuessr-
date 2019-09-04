import { createVM } from '../src/main'
const { vm, router } = createVM();
window.addEventListener('load', (e) => {
    vm.$mount('#app');
})