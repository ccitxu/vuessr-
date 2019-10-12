const path = require('path');
const rootPath = path.resolve(__dirname, '..');
const VueLoaderPlugin = require('vue-loader/lib/plugin') <<
    <<
    <<
    <
    HEAD
const htmlWebpackplugin = require('html-webpack-plugin');

===
===
=
const HtmlWebpackPlugin = require('html-webpack-plugin'); >>>
>>>
>
06 d7ce9d8fcc713ccfc1ea2037bfd4fcde5b1a4b

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    target: 'node',
    entry: ['babel-polyfill', path.join(rootPath, 'entry/entry-server.js')],
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(rootPath, 'dist'),
        filename: 'bundle.server.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: rootPath,
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.template.html',
            template: path.resolve(__dirname, '../index.template.html'),
            files: {
                js: '/bundle.client.js'
            }
        })
    ]
};