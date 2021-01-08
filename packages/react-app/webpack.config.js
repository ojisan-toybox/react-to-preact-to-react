const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  // sourceMap: true,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx|jsx)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.svg/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "preact/hooks": "react",
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  target: ["web", "es5"],
};
