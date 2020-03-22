# `jscodeshift-examples`

[![license](https://img.shields.io/github/license/wingy3181/jscodeshift-examples.svg)](LICENSE)

[![Maintenance Status](https://img.shields.io/badge/status-maintained-brightgreen.svg)](https://github.com/wingy3181/jscodeshift-examples/pulse)
[![Build Status](https://github.com/wingy3181/jscodeshift-examples/workflows/CI/badge.svg)](https://github.com/wingy3181/jscodeshift-examples/actions)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Tested with jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Dependencies status](https://img.shields.io/david/wingy3181/jscodeshift-examples.svg)](https://david-dm.org/wingy3181/jscodeshift-examples)
[![Dev Dependencies status](https://img.shields.io/david/dev/wingy3181/jscodeshift-examples.svg)](https://david-dm.org/wingy3181/jscodeshift-examples?type=dev)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[![Watch on GitHub](https://img.shields.io/github/watchers/wingy3181/jscodeshift-examples.svg?style=social)](https://github.com/wingy3181/jscodeshift-examples/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/wingy3181/jscodeshift-examples.svg?style=social)](https://github.com/wingy3181/jscodeshift-examples/stargazers)

A few examples on [jscodeshift][jscodeshift] codemods with tests.

## Table of Contents

<!-- To update run: npx markdown-toc --maxdepth 3 -i README.md -->

<!-- toc -->

- [Quick Usage](#quick-usage)
  - [Running](#running)
  - [Linting and Type-Checking](#linting-and-type-checking)
  - [Unit Testing](#unit-testing)
  - [Developing](#developing)
- [Supported Node Versions](#supported-node-versions)
- [Technologies Used](#technologies-used)
- [References](#references)
  - [jscodeshift](#jscodeshift)
- [License](#license)

<!-- tocstop -->

## Quick Usage

### Running

```sh
npm start
```

Run `npm start` to start an interactive CLI where you will be prompted for:

- the codemod/transform to run
- the input file to transform
- options to be passed to the codemod/transform

that will be run via [`jscodeshift`][jscodeshift].

### Linting and Type-Checking

```sh
npm run lint
```

Run `npm run lint` to type-check `.ts` files and run linting across `.js` and `.ts` files via [`eslint`][eslint].

### Unit Testing

```sh
npm test
```

Run `npm test` to do a one-time pass of Jest unit tests with coverage.

### Developing

```sh
npm run jest:projects
```

Run `npm run jest:projects` to do a one-time pass of ESLint linting, and Jest unit tests with coverage.

When developing, run `npm run jest:projects:watch` which will validate ESLint linting and Jest unit tests as you develop and change code.

## Supported Node Versions

The repository has been tested to work in Node 12.

## Technologies Used

- [Jscodeshift][jscodeshift] (codemods)
- [TypeScript](https://www.typescriptlang.org/) (type-checking/transpiling)
- [Jest](https://jestjs.io/en) (testing & code coverage)
- [ESLint][eslint] (linting)
- [Prettier](https://prettier.io/) (code formatting)
- [Inquirer](https://github.com/SBoudrias/Inquirer.js/) (interactive command line user interface)
- [Renovate](https://github.com/renovatebot/renovate) (dependency update)
- [GitHub Actions](https://github.com/features/actions) (continuous integration)

## References

### jscodeshift

- [jscodeshift][jscodeshift]
- [recast](https://github.com/benjamn/recast) (used by `jscodeshift` to transform code into an [abstract syntax tree][ast] (AST))
- [ast-types](https://github.com/benjamn/ast-types) (used by `jscodeshift` to provide typescript typings within the [abstract syntax tree][ast]
- [AST Explorer](https://astexplorer.net/)
- [Awesome jscodeshift](https://github.com/sejoker/awesome-jscodeshift) (curated list of `jscodeshift` references)
- [skovy.dev - Creating a custom transform for jscodeshift](https://skovy.dev/jscodeshift-custom-transform/)
- [github.com/elliottsj/jscodeshift-typescript-example](https://github.com/elliottsj/jscodeshift-typescript-example)

## License

The repository is available as open source under the terms of the [MIT License](LICENSE.md).

[jscodeshift]: https://github.com/facebook/jscodeshift
[eslint]: http://eslint.org/
[ast]: https://en.wikipedia.org/wiki/Abstract_syntax_tree
