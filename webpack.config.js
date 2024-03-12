const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "index",
      template: path.resolve(__dirname, "./src/pages/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      title: "news",
      template: path.resolve(__dirname, "./src/pages/news.html"),
      filename: "news.html",
    }),
    new HtmlWebpackPlugin({
      title: "photo",
      template: path.resolve(__dirname, "./src/pages/photo.html"),
      filename: "photo.html",
    }),
    new HtmlWebpackPlugin({
      title: "rozklad",
      template: path.resolve(__dirname, "./src/pages/rozklad.html"),
      filename: "rozklad.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: "./dist",
    port: 8000,
    open: true,
  },
};
