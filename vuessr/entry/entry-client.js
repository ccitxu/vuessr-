import { createVM } from '../src/main'
const { vm } = createVM();
window.addEventListener('load', (e) => {
    vm.$mount('#app');
})