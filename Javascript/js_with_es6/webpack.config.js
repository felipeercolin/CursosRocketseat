module.exports = {
    // webpack - INICIO
    // entry : './WebPackServer/main.js',
    // output:{
    //     path: __dirname + '/WebPackServer',
    //     filename: 'bundle.js',
    // },
    // webpack - FIM
    // webpackserver - INICIO
    //entry : './WebPackServer/WebPackDevServer/src/main.js', //add polyfill que carregará primeiro antes de carregar o main.js
    entry : [ '@babel/polyfill', './WebPackServer/WebPackDevServer/src/main.js' ],
    output:{
        path: __dirname + '/WebPackServer/WebPackDevServer/public',
        filename: 'bundle.js',
    },
    devServer:{
        contentBase: __dirname + '/WebPackServer/WebPackDevServer/public'
    },
    // webpackserver - INICIO
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }
        ],
    }
};