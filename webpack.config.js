const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, args) => {

  const isProduction = args.mood === 'production'

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: "/dist/" // this row for -  webpack-dev-server
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        options: { presets: ['@babel/env', '@babel/preset-react'] }
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader,
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
        ],
      }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-cheap-module-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),

      },

      historyApiFallback: true,
      compress: true
    },
    mode: 'development',

 

  };
};


