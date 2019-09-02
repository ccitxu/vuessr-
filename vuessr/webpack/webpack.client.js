const path = require('path');
const rootpath = path.resolve(__dirname, '..');
const cleanWebpackPlugin = require('clean-webpack-plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    target: 'node',
    entry: ['babel-polyfill', path.join(rootpath, 'entry/entry-client.js')],
    output: {
        path: path.join(rootpath, 'dist'),
        filename: 'bundle.client.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: rootpath,
            exclude: /node_modules/
        }]
    },
    plugins: [],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': resolve('src')
        }
    }
};