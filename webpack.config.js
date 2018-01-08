// this is a node js script

// path is from node js
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// environment variable
// stores the current environment you're working on
// e.g heroku sets it to production
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

// way to expose something to another file
module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('style.css')

  // return webpack config object
  return {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
      // needs to be an absolute path
      path: path.join(__dirname, 'public', 'dist'),
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
                sourceMap: true,
                includePaths: ['node_modules', 'src']
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: ['node_modules', 'src']
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      // expose the env variables to client side js
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_SENDER_ID': JSON.stringify(process.env.FIREBASE_SENDER_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
};
