const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@api": "src/api",
    "@assets": "src/assets",
    "@components": "src/components",
    "@routes": "src/routes",
    "@screens": "src/screens",
    "@services": "src/services",
    "@translations": "src/translations",
    "@utils": "src/utils",
    "@config": "src/config",
  })(config);

  return config;
};
