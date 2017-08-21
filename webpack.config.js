const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    
    entry: {
        main: './src/script/main.js',
        a: ['./src/script/a.js', './src/script/b.js']
    },

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name]-[chunkhash].js'
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html'
        })
    ]


}