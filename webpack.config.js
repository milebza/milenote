// this is a node js script

// path is from node js
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// way to expose something to another file
module.exports = () => {
  const CSSExtract = new ExtractTextPlugin('style.css')

  return {
    entry: './src/app.js',
    output: {
      // needs to be an absolute path
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        // \. -> escapes the dot
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        // ? -> makes the s optional
        test: /\.s?css$/,
        // with use we can specify an array of loaders
        // use: [
        //   'style-loader',
        //   'css-loader',
        //   // behind the scenes sass-loader calls node-sass
        //   'sass-loader'
        // ]
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};
