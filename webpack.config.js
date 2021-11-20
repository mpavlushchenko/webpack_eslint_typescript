const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const publicPath = process.env.PUBLIC_URL || '/';

function getConfig(dotenv, isProd) {
  return {
    mode: isProd ? 'production' : 'development',
    entry: ['./src/index.js'],
    devtool: isProd ? false : 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath,
      filename: '[name].bundle.js',
    },
    devServer: isProd
        ? undefined
        : {
          historyApiFallback: true,
          open: true,
          port: 3001,
          hot: true,
          liveReload: false,
          // host: 'local-ip', // => use this setting for tests on mobile devices
        },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
          {
              test: /\.(scss|css)$/,
              use: [
                  isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                  {
                      loader: 'css-loader',
                      options: {
                          importLoaders: isProd ? 2 : 1,
                          sourceMap: !isProd,
                      },
                  },
                  { loader: 'postcss-loader', options: { sourceMap: !isProd } },
                  { loader: 'sass-loader', options: { sourceMap: !isProd } },
              ],
          },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ].filter(Boolean),
    },
    plugins: [
        isProd
            ? new MiniCssExtractPlugin({
                // Extracts CSS into separate files
                // Note: style-loader is for development, MiniCssExtractPlugin is for production
                filename: '[name].[contenthash].css',
                chunkFilename: '[id].css',
            })
            : undefined,

      new HtmlWebpackPlugin({
        template: "public/index.html"
      }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv),
        }),

      !isProd && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),

    target: isProd ? "browserslist" : "web",
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
  }
}

module.exports = (env= {}) => {
  const isProduction = env.production
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  const dotenv = isProduction
      ? {
        APP_ENV: '#{APP_ENV}#',
        APP_URL: '#{APP_URL}#',
        API_URL: '#{API_URL}#',
      }
      : {
        APP_ENV: 'local',
        API_URL: '',
      }

  return getConfig(dotenv, isProduction)
};
