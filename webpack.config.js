const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
})

module.exports = {
    entry: "./src/main.js",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require('postcss-preset-env')(),
                                require('postcss-browser-reporter')()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
}
