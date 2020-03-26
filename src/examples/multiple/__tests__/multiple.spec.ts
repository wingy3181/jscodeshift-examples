jest.autoMockOff();

import { defineTest } from "jscodeshift/src/testUtils";

defineTest(
  __dirname,
  "multiple",
  null,
  "multiple",
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  { parser: "ts" }
);
