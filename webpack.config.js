const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/index.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: 'public/icons/[name].[ext]',
        }
      },
      {
        test: /\.(ttf|eot|woff2|woff)$/,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          name: './public/[name].[ext]',
          limit: 1000
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
      minify: {
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeco: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin(),
  ],
};
