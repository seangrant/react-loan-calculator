var Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

var config = {
    devtool: 'eval',
    entry: [

        'webpack/hot/dev-server',

        'webpack-dev-server/client?http://localhost:8080',

        mainPath],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    module: {

        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath] },

            { test: /\.css$/, loader: 'style!css' },

						{ test: /\.less$/, loader: 'style!css!less' },

            {
                // ASSET LOADER
                // Reference: https://github.com/webpack/file-loader
                // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                // Rename the file using the asset hash
                // Pass along the updated reference to your code
                // You can add here any file extension you want to get copied to your output
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            },
        ]
    },



    plugins: [new Webpack.HotModuleReplacementPlugin(),
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        })]
};

module.exports = config;
