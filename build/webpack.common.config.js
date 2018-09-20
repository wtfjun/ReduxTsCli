const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '../dist'),
    },
  
    devtool: 'source-map',
  
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
  
        { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
      ]
    },
  
    plugins: [
    ],
  };