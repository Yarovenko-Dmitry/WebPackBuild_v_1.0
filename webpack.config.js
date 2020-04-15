const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: ['./src/app.js', './src/style.scss'],
    output: {
      path: path.join(__dirname, '/dev_result/'),
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader, 'css-loader',{
              loader: 'postcss-loader', // Run postcss actions
              options: {
                plugins: function () { // postcss plugins, can be exported to postcss.config.js
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }, 'sass-loader'
          ]
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ]
    },
    devServer: {
      inline:true,
      port: 3000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'bundle.css'
      }),
      new CopyPlugin([
        { from: './src/assets/audio', to: 'audio' },
        { from: './src/assets/img', to: 'img' },
      ]),
    ]
  }

  return config
}
