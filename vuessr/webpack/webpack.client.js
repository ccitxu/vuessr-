const path = require('path');
<<<<<<< HEAD
const rootpath = path.resolve(__dirname, '..');
=======
const rootPath = path.resolve(__dirname, '..');
>>>>>>> 27b0780affdcd788c1de77a378a14db75631a2c8

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {
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
    plugins: [],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': resolve('src')
        }
    }
};