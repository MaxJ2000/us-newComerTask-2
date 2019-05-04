const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: "./src/app.ts"
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
    open: false
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
};
