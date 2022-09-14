const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    publicPath: "public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js/"),
  },
};
