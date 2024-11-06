const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3005,
  },
};
