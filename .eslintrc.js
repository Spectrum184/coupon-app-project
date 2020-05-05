module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/prop-types": 1,
    "react/jsx-max-props-per-line": 1,
    "linebreak-style": 0,
    "import/no-extraneous-dependencies": 0,
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "no-case-declarations": 0,
    "react/jsx-props-no-spreading": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "no-unused-vars": 1,
    "import/extensions": 0,
    "import/order": 1,
    "no-use-before-define": 0,
    "no-param-reassign": 0,
    "import/no-cycle": 0,
    "no-underscore-dangle": [
      "error",
      {
        allow: ["_id"],
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  plugins: ["prettier"],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
