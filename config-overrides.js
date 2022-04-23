const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@assets": "src/assets",
    "@components": "src/components",
    "@config": "src/config",
    "@firebaseapi": "src/firebaseapi",
    "@screens": "src/screens",
    "@services": "src/services",
    "@translations": "src/translations",
  })(config);

  return config;
};
