module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": 0,
  },
  "no-underscore-dangle": ["error", { allow: ["_id"] }],
};
