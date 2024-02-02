const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const isProduction = argv.mode === "production";

    return {
        entry: {
            main: "./src/index.js",
        },
        output: {
            filename: isProduction ? "[name].[contenthash].js" : "[name].js",
            path: path.resolve(__dirname, "build"),
            clean: true,
            publicPath: '/',
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
                    exclude: /node_modules/,
                    use: ["babel-loader"],
                },
                {
                    test: /\.css$/i,
                    exclude: /node_modules/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(webp|png|avif|jpe?g|gif|bmp|svg)$/i,
                    exclude: /node_modules/,
                    type: "asset/resource",
                    generator: {
                        filename: 'assets/images/[name][ext]',
                    },
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
                    exclude: /node_modules/,
                    type: "asset/resource",
                    generator: {
                        filename: 'assets/videos/[name][ext]',
                    },
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx", ".css"],
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
    };
};