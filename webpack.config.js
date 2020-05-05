'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: __dirname,
    entry: './src/support-pie-chart.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'support-pie-chart.min.js',
    },
    devServer: {
        contentBase: './example',
        inline:true,
        port: 4000
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'support-pie-chart.min.css' 
        }) 
    ],
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader' 
                } 
            },
            {
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] ,
            }
        ]
    }
};