module.exports = {
    mode: "production",
    entry: "./src/main.js",
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
    }
}