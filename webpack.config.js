const htmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules:[ 
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }   
            },
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"]
                
            },
            {
                test: /\.s[ac]ss$/,
                use:["style-loader", "css-loader", "sass-loader"]
                
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset"
            }
        ]
    },
    resolve:{
        extensions:[".js",".jsx"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },

    plugins:[
        new CleanWebpackPlugin(),
        new htmlWebPackPlugin({
            template: "./src/index.html"
        })
    ]
}