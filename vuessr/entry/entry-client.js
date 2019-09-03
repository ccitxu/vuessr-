import { createVM } from '../src/main'
const { vm, router } = createVM();
router.onReady(() => {
    vm.$mount('#app', true);
})