import { createVM } from '../src/appmian.js'
const { vm } = createVM();
window.addEventListener('load', (e) => {
    vm.$mount('#app');
})