const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  output: {
    path: path.resolve("public"),
    filename: "bundle.js",
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: "babel-loader",
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    client: {
      overlay: false,
    },
  },
};
