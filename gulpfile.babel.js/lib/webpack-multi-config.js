import config from '../config';
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default function (env) {
  let plugins = [
    new HtmlWebpackPlugin({
      title: config.libraryName,
      template: path.resolve(config.demoAppSource, 'index.html'), // Load a custom template
      inject: 'body', // Inject all scripts into the body,
      filename: 'index.html'
    })
  ];

  if (env === 'production') {
    plugins = plugins.concat([
      new webpack.UglifyJsPlugin()
    ]);
  }

  const webpackConfig = {
    cache: false,
    plugins,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js?$/,
          exclude: [ /node_modules/ ],
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
        }
      ]
    }
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      demo: [
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
