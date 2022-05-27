const HtmlWebpackPlugin = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const helpers = require('./helpers');

module.exports = merge(
    {},
    {
        context: helpers.resolveFromRootPath('src'),
        resolve: {
            alias: {
                assets: helpers.resolveFromRootPath('src/assets'),
                common: helpers.resolveFromRootPath('src/common'),
                core: helpers.resolveFromRootPath('src/core'),
                layouts: helpers.resolveFromRootPath('src/layouts'),
                pods: helpers.resolveFromRootPath('src/pods'),
                scenes: helpers.resolveFromRootPath('src/scenes'),
            },
            extensions: ['.js', '.ts', '.tsx'],
        },
        entry: {
            app: ['regenerator-runtime/runtime', './index.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(png|jpeg)$/,
                    type: "asset/resource",
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    exportLocalsConvention: "camelCase",
                                    localIdentName: "[path][name]__[local]",
                                    localIdentContext: helpers.resolveFromRootPath("src"),
                                },
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                implementation: require("sass"),
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
            ],
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'all',
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        enforce: true,
                    },
                },
            },
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'index.html',
            }),
        ],
    }
);
