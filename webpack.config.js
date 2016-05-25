var path = require('path');

module.exports = {
    entry: {
        "app.js" : [
            'babel-polyfill',
            path.resolve(__dirname, 'js/src/plotgame.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'js/build'),
        filename: "[name]"
    },
    module: {
        loaders: [{ 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel",
            query: {
                presets: 'es2015'
            }
        }, {
            test: /\.css$/, 
            loader: "style-loader!css-loader"
        }]
    },
    
};