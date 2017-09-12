import config from '../config';
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import fs from 'fs';
import marked from 'marked';

export default function (env) {
  let plugins = [
    new HtmlWebpackPlugin({
      title: config.libraryName,
      template: path.resolve(config.demoAppSource, 'index.html'), // Load a custom template
      inject: 'body', // Inject all scripts into the body,
      filename: 'index.html'
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      VERSION: require('../../package.json').version,
      README: marked(fs.readFileSync('README.md', 'utf8')),
      AUTHOR: require('../../package.json').author,
      REPOSITORY: require('../../package.json').repository.url
    })
  ];

  if (env === 'production') {
    plugins = plugins.concat([
      new webpack.optimize.UglifyJsPlugin()
    ]);
  }

  const webpackConfig = {
    cache: false,
    plugins,
    resolve: {
      alias: {
        build: path.resolve(process.cwd(), config.destination),
        'instructure-icons': path.resolve(process.cwd(), config.destination)
      }
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js?$/,
          exclude: [ /node_modules/, /__build__/ ],
          loader: 'eslint-loader'
        },
        {
          test: /\.js?$/,
          exclude: [ /node_modules/ ],
          use: [{
            loader: 'babel-loader',
            query: {
              babelrc: true,
              cacheDirectory: '.babel-cache'
            }
          }]
        },
        {
          test: /\.css$/,
          exclude: [ /node_modules/ ],
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                minimize: (env === 'production'),
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=[name].[ext]'
        }
      ]
    }
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      demo: [
        'babel-polyfill-loader!',
        path.resolve(config.demoAppSource, 'index.js')
      ],
      'vendor': ['react', 'react-dom']
    };

    webpackConfig.output = {
      path: path.resolve(process.cwd(), config.destination),
      filename: '[name].js',
      publicPath: ''
    };
  }

  return webpackConfig;
}
