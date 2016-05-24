import config from '../config';
import webpack from 'webpack';
import path from 'path';
import postcssTools from 'webpack-postcss-tools';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import postcssImport from 'postcss-import';
import postcssCalc from 'postcss-calc';
import csswring from 'csswring';
import postcssDiscardDuplicates from 'postcss-discard-duplicates';

export default function (env) {
  const publicPath = '';
  const filename = env === 'production' ? '[name]-[hash].js' : '[name].js';
  const cssLoader = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss';

  let plugins = [
    new HtmlWebpackPlugin({
      title: config.libraryName,
      template: path.resolve(config.demoAppSource, 'index.html'), // Load a custom template
      inject: 'body', // Inject all scripts into the body,
      filename: 'index.html'
    })
  ];

  if (env === 'production') {
    plugins = plugins.concat(new ExtractTextPlugin(filename + '.css'))
  }

  const webpackConfig = {
    plugins,
    module: {
      preLoaders: [
        {
          test: /\.js?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.json$/,
          loader: 'json',
          exclude: /node_modules/
        }
      ]
    },
    postcss: [
      postcssTools.prependTildesToImports,
      require('autoprefixer')({ browsers: ['last 2 version'] }),
    ]
  };

  if (env !== 'test') {
    webpackConfig.entry = {
      demo: [
        path.resolve(config.demoAppSource, 'index.js')
      ]
    };

    webpackConfig.output = {
      path: config.destination,
      filename,
      publicPath
    };
  }

  if (env === 'development') {
    webpack.devtool = 'cheap-module-eval-source-map';
    webpack.debug = true;
    webpackConfig.module.loaders.push(
      {
        test: /\.css$/,
        loader: 'style!' + cssLoader
      }
    );
  }

  if (env === 'production') {
    webpackConfig.plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.NoErrorsPlugin()
    );

    webpackConfig.module.loaders.push(
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          cssLoader
        )
      }
    );

    webpackConfig.postcss = [
      postcssImport,
      postcssCalc(),
      csswring,
      postcssDiscardDuplicates()
    ];
  }

  return webpackConfig;
};
