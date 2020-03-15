// Ref:
// - ESLint
//   - https://eslint.org/docs/user-guide/configuring
// - ESLint + Typescript
//   - https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
//   - https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
//     - Other plugins recommended (e.g. jest, node, import/export conventions, eslint comment
//   - https://github.com/typescript-eslint/typescript-eslint#readme
// Extends:
// - eslint:recommended
//   - https://eslint.org/docs/rules/
// - plugin:@typescript-eslint/eslint-recommended
//   - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts
// - plugin:@typescript-eslint/recommended
//   - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
// - prettier/@typescript-eslint
//   - https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
// - plugin:prettier/recommended
//   - https://github.com/prettier/eslint-plugin-prettier/blob/master/eslint-plugin-prettier.js
// Rules:
// - eslint:recommended
//   - https://eslint.org/docs/rules/
// - @typescript-eslint/eslint-plugin
//   - https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md#supported-rules
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: [
    "@typescript-eslint", // tells ESLint to load the plugin package "@typescript-eslint/eslint-plugin"
    "prettier" // tells ESLint to load the plugin package "eslint-plugin-prettier"
  ],
  extends: [
    "eslint:recommended", // is ESLint's inbuilt "recommended" config - it turns on a small, sensible set of rules which lint for well-known best-practices.
    "plugin:@typescript-eslint/eslint-recommended", // [@typescript-eslint/eslint-plugin] is a configuration we provide which disables a few of the recommended rules from the previous set that we know are already covered by TypeScript's typechecker.
    "plugin:@typescript-eslint/recommended", // [@typescript-eslint/eslint-plugin] Uses the recommended rules from  @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", //  [eslint-config-prettier] Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // [eslint-plugin-prettier] Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
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
