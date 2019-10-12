/* server.js */
const exp = require('express')
const Vue = require('vue')
const express = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
const createApp = require('./dist/bundle.server.js')['default'];
// const clientBoundleFileUrl = '/bundle.client.js'

// 设置静态文件目录
express.use('/', exp.static(__dirname + '/dist'))
express.get('/api/info', (req, res) => {
    res.json({ code: 0, data: '你好啊你是谁谁会阿四大' });
});
// 响应路由请求
express.get('*', (req, res) => {
        const context = { url: req.url }
        createApp(context).then(app => {
            // 创建vue实例，传入请求路由信息
            renderer.renderToString(app, (err, html) => {
                if (err) {
                    console.log('sdasda');
                    return res.status(500).end('运行时错误')
                }
                res.send(html);
            })
        })

    })
    // 服务器监听地址
express.listen(8001, () => {
    console.log('SSR服务器已启动！')
});