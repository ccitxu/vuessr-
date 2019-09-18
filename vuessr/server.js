/* server.js */
const exp = require('express')
const express = require('express')()
const renderer = require('vue-server-renderer').createRenderer()
const createApp = require('./dist/bundle.server.js')['default']
const clientBoundleFileUrl = '/bundle.client.js'

// 设置静态文件目录
express.use('/', exp.static(__dirname + '/dist'))

// 响应路由请求
express.get('*', (req, res) => {
    const context = { url: req.url }
    console.log(context);
    // 创建vue实例，传入请求路由信息
    createApp(context).then(app => {
        renderer.renderToString(app, (err, html) => {
            if (err) { return res.status(500).end('111') }
            console.log(clientBoundleFileUrl)
            res.send(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Vue2.0 SSR渲染页面</title>
                        <script src="${clientBoundleFileUrl}"></script>
                    </head>
                    <body>
                        <div id="app">
                            ${html}
                        </div>
                    </body>
                </html>
            `)
        })
    }, err => {
        if (err.code === 404) { res.status(404).end('所请求的页面不存在1111') }
    })
})


// 服务器监听地址npm
express.listen(8001, () => {
    console.log('SSR服务器已启动！')
});