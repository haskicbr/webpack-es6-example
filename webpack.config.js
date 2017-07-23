var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src'), // ТОЧКА ВХОДА
    output: {
        filename: 'bundle.js', // ФАйл выхода
        path: path.resolve(__dirname, 'dist')
    },

    //Babel config
    module: {
        rules: [
            { test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options : {
                        // Установка других плагинов
                        // http://babeljs.io/docs/plugins
                        presets : ['env', 'stage-0', 'es2016', 'es2015', "babili"]
                    }
                }
            }
        ]
    }
};