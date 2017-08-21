const path = require('path');

module.exports = {
    
    entry: {
        main: './src/script/main.js',
        a: ['./src/script/a.js', './src/script/b.js']
    },

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name]-[chunkhash].js'
    }


}