const jestConfig = require("./jest.config");

module.exports = {
  ...jestConfig,
  projects: [
    { displayName: "lint", runner: "jest-runner-eslint", testMatch: ["<rootDir>/**/*.{ts,js}"] },
    { displayName: "test", preset: "ts-jest" }
  ],
  // Remove reporters as don't need this in watch mode when developing + jest-stare is causing infinite loop again
  // even though it is ignoring the same folders
  reporters: ["default"]
};
