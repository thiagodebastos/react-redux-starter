const rewireReactHotLoader = require("react-app-rewire-hot-loader");

/* config-overrides.js */
module.exports = function override(config, env) {
  // add a plugin
  config = rewireReactHotLoader(config, env);
  return config;
};
