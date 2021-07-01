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
                test: /\.css$/i,
                use:["style-loader", "css-loader"]
                
            },
            {
                test: /\.s[ac]ss$/i,
                use:["style-loader", "css-loader", "sass-loader"]
                
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