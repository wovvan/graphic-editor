var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var webpack = require('webpack');
module.exports = {
    entry: {
        //index: './src/lb-ui.module.js',
        objectives:'./src/objectives/objectives.module.js'
    },
    output: {
        libraryTarget: "umd",
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate', 'babel?optional[]=runtime'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)$/,
                loader: 'file'
            }, {
                test: /\.html$/,
                loader: 'html?attrs[]=img:src'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less')

            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ],
    externals: ['angular', 'angular-ui-router'],
    plugins: [
        new webpack.ProvidePlugin({
            jquery: "jquery",
            $: "jquery",
            'window.jQuery': "jquery"
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
};