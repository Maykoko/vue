const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',

  devServer: {
    port: 8888,
    contentBase: path.join(__dirname, '/'),
    open: true,
  },

  plugins: [

    new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      // loader的加载顺序是从右到左的
      // css-loader是帮助webpack编译css文件. 而style-loader是将最终编译的结果放到HTML中生效
      // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },

};