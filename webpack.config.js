const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const parts = require('./webpack.parts.js');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

const commonConfig = merge([ {
  entry : [
    path.join(PATHS.src,'css/style.css'),
    path.join(PATHS.src,'js/script.js')
  ],
  output: {
    path: PATHS.dist,
    filename:  `js/script.js`,
  },
  module: {
    rules : [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: `babel-loader`
      },
      {
        test: /\.html$/,
        loader: `html-loader`,
        options: {
          attrs: [
            `img:src`,
            `source:srcset`
          ]
        }
      },
      {
        test : /\.(jpe?g|png|woff2?|webp|gif)$/,
        loader: `url-loader`,
        options: {
          limit: 1000,
          context: `./src`,
          name: `[path][name].[ext]`,
        },
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })]
}]);

const productionConfig = merge([
  parts.extractCSS()
]);

const developmentConfig = merge([
  {
    entry: ["./src/index.html"],
    devServer: {overlay: true}
  },
  parts.loadCSS(),
]);

if (process.env.NODE_ENV === 'production') {
  console.log('Building production')
  module.exports = merge(commonConfig, productionConfig);
}else{
  module.exports = merge(commonConfig, developmentConfig);
}
