const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
        top: './src/top',
        my_page: "./src/my_page",
        article: "./src/article.js"
    },
    output: {
        path: path.resolve(__dirname, 'src'), //アウトプット先
        filename: '[name].bundle.js' //アウトプットするファイル名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env","@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
};