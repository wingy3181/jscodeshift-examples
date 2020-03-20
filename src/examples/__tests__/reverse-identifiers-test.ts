jest.autoMockOff();

import { defineTest, defineInlineTest } from "jscodeshift/src/testUtils";
import transform from "../reverse-identifiers";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
defineTest(__dirname, "reverse-identifiers");

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
defineTest(__dirname, "reverse-identifiers", null, "typescript/reverse-identifiers", { parser: "ts" });

describe("reverse-identifiers", () => {
  defineInlineTest(
    transform,
    {},
    `
var firstWord = 'Hello ';
var secondWord = 'world';
var message = firstWord + secondWord;`,
    `
var droWtsrif = 'Hello ';
var droWdnoces = 'world';
var egassem = droWtsrif + droWdnoces;
  `
  );
  defineInlineTest(transform, {}, "function aFunction() {};", "function noitcnuFa() {};", "Reverses function names");
});
