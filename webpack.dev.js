const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "./assets/js/[name]",
    path: path.resolve(__dirname, "web")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      template: "./app/Resources/views/index.html",
      filename: "./assets/css/style.css"
    }),
    // new BrowserSyncPlugin({
    //   browser: "google chrome",
    //   files: ["./web/assets/css/**", "./web/assets/scss/**", "./web/assets/js/**", "./app/Resources/views/**"],
    //   host: 'localhost',
    //   port: 80,
    //   proxy: 'http://www.topchats.local.ex-situ.com',
    //   reloadDelay: 0001,
    //   reload: true
    // })
    new BrowserSyncPlugin({
      browser: "google chrome",
      files: ["./web/assets/css/**", "./web/assets/scss/**", "./web/assets/js/**", "./app/Resources/views/**"],
      host: 'localhost',
      port: 80,
      proxy: 'http://localhost:8081/app/Resources/views/',
      reloadDelay: 0000,
      reload: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          //"style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});
