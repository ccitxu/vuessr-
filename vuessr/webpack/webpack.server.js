const path = require('path');
const rootPath = path.resolve(__dirname, '..');

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
            exclude: /node_modules/,
            options: {
                presets: ['es2015']
            }
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