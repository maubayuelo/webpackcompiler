const path = require("path");
const ConcatPlugin = require('webpack-concat-plugin');

module.exports = {
  entry: {
    'main.js': [
      path.resolve(__dirname, 'web/assets/index.js'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  },
  plugins:[
    new ConcatPlugin({
      uglify: false,
      sourceMap: false,
      name: 'result',
      outputPath: './assets/js/',
      fileName: 'main.js',
      filesToConcat: ['./web/assets/js/scripts/**'],
      attributes: {async: true}
    })
  ]
};
