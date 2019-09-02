const path = require('path');
const rootpath = path.resolve(__dirname, '..');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    target: 'node',
    entry: ['babel-polyfill', path.join(rootpath, 'entry/entry-server.js')],
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(rootpath, 'dist'),
        filename: 'bundle.server.js'
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
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': resolve('src')
        }
    }
};