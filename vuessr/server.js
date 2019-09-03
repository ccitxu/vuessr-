const exp = require('express');
const Vue = require('vue');
const express = require('express')()
const rend = require('vue-server-renderer');
const createApp = require('./dist/bundle.server.js')['default'];
const clinetBoundleFileUrl = '/bundle.client.js';
const renderer = rend.createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})
express.use('/', exp.static(__dirname + '/dist'))
    // 响应路由请求
express.get('*', (req, res) => {
    const context = { url: req.url }
    createApp(context).then(app => {
        const context2 = {
            title: 'hello',
            meta: `
                   <meta charset="utf-8"/>
                `
        }
        renderer.renderToString(app, context2, (err, html) => {
            if (err) { return res.state(500).end('运行时错误') }
            res.send(html)
        })
    }, err => {
        if (err.code === 404) {
            res.status(404).end('所请求的页面不存在')
        }
    })
})


// 服务器监听地址
express.listen(8008, () => {
    console.log('SSR服务器已启动！')
});