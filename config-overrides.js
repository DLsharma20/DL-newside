module.exports = function override(config, env) {
  //do stuff with the webpack config...
  if (env === 'development') {
    // Enable it to see the error source for development
    config.devtool = 'eval-source-map';
  }
  return config;
};
