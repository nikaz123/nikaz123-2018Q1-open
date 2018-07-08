const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require("webpack");

//const CSSPlugin = new ExtractTextPlugin("app.css");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    resolve: {
        alias: {
            jquery: path.join(__dirname,'./src/game/resourses/jQUERY/jquery-1.12.4.js'),
            "jquery-ui": path.join(__dirname,'./src/game/resourses/jQUERY/jquery-ui.js')
        }},
    entry: {
        loading: './src/game/loading.js',
        index: './src/landing/index.js',
        game: './src/game/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist/'),
        publicPath: '../dist/',

    },
    module: {

        rules: [


            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },


            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'less-loader']
                    })
            },


            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/audio/[name].[ext]'
                    }
                }
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:'jquery'
        }),
        new ExtractTextPlugin({filename: '[name].css'}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['page1'],
            template: './src/landing/index.html',
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['page2'],
            template: './src/game/index.html',
            filename: './game.html'
        })
    ]
};