const path = require('path');
const rootPath = path.resolve(__dirname, '..');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': resolve('src')
        }
    },
    entry: ['babel-polyfill', path.join(rootPath, 'entry/entry-client.js')],
    output: {
        path: path.join(rootPath, 'dist'),
        filename: 'bundle.client.js',
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: rootPath,
                exclude: /node_modules/,
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],

};