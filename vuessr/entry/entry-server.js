import { createVM } from '../src/main.js'
export default context => {
    return new Promise((resolve, reject) => {
        const { vm, router } = createVM();
        router.push(context.url);
        router.onReady(() => {
            const matchedComponent = router.getMatchedComponents();
            if (matchedComponent.length <= 0) {
                return reject({ code: 404 })
            }
            resolve(vm)
        }, reject)
    })
}