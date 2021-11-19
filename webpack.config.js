const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ].filter(Boolean),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      })
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
