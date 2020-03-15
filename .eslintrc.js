// Ref:
// - ESLint
//   - https://eslint.org/docs/user-guide/configuring
// - ESLint + Typescript
//   - https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
//   - https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
//   - https://github.com/typescript-eslint/typescript-eslint#readme
// Rules:
// - @typescript-eslint/eslint-plugin
//   - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from  @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
