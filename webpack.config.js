const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    
    entry: {
        main: './src/script/main.js',
        a: ['./src/script/a.js', './src/script/b.js']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js'
    },

    plugins: [
        new htmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',
            inject: 'head'
        })
    ]


}