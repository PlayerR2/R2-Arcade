const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(gif|jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
};
