const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        entry: "./src/index.js",
        output: {
            filename: isProduction ? "[name].[contenthash].js" : "[name].js",
            path: path.resolve(__dirname, "build"),
            clean: true,
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.css$/,
                    exclude: /\.module\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.module\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(webp|png|avif|jpe?g|gif|bmp|svg)$/i,
                    exclude: /node_modules/,
                    use: 'file-loader',
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    exclude: /node_modules/,
                    use: 'file-loader',
                }
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
            }),
        ],
    }
}