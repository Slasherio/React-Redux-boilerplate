module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "styled-components",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
  ],
  env: {
    production: {
      only: ["app"],
      plugins: ["lodash"],
    },
  },
};
