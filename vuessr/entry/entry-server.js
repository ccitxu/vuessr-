import { createVM } from '../src/appmian.js'
import axios from 'axios'
export default context => {
    return new Promise((resolve, reject) => {
        const { vm, router } = createVM();
        router.push(context.url);
        router.onReady(() => {
            const matchedComponent = router.getMatchedComponents();
            if (matchedComponent.length <= 0) {
                return reject({ code: 404 })
            }
            //新增：遍历路由下所有的组件，如果有请求则执行请求
            Promise.all(matchedComponent.map(v => {
                if (v.sendRequest) {
                    return v.sendRequest(axios)
                }
            })).then((res) => {
                context.state = vm.$store.state;
                resolve(vm);
            }).catch(reject);
            resolve(vm);
        }, reject)
    })
}