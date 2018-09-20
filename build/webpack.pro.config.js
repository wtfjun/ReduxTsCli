let config = require('./webpack.com.config');
config = {
  ...config,
  mode: 'production'
};

module.exports = config;

