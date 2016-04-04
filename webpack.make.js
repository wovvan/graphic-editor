'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
    var BUILD = !!options.BUILD;

    var config = {};

    config.entry = {
        app: './src/app.js'
    };


    config.output = {
        path: __dirname + '/public',
        publicPath: BUILD ? '/' : 'http://localhost:8081/',
        filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    };

    if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval';
    }

    config.module = {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel?optional[]=runtime'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'html?attrs[]=img:src'
            },
            {
                test: /\.woff(2)?(\?\S*)?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?\S*)?$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
            }
        ]
    };

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    config.plugins = [
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD || TEST
        }),
        new webpack.ProvidePlugin({
            jquery: "jquery",
            $: "jquery",
            'window.jQuery': "jquery"
        })
    ];


    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        })
    )

    if (BUILD) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        )
    }

    config.devServer = {
        contentBase: './public',
        port:8081,
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    };

    return config;
};