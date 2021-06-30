module.exports = {
    mode: "development",
    entry: "./src/main.js",
    module: {
        rules:[ 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }   
            },
            {
                test: /\.css$/i,
                use:["style-loader", "css-loader"]
                
            },
            {
                test: /\.s[ac]ss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
                
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}