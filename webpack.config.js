// webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var loaders = [{
        loader: 'css-loader',
        options: {
            modules: true
        }
    },
    {
        loader: 'sass-loader'
    }
]
module.exports = {
    // The standard entry point and output config
    entry: {
        main: "./main",
    },
    output: {
        filename: "dist/[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        rules: [{
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: loaders
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'dist/bundle.css', disable: false, allChunks: true })
    ]
}
