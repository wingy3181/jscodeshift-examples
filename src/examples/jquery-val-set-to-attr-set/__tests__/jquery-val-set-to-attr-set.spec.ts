jest.autoMockOff();

import { defineTest } from "jscodeshift/src/testUtils";

defineTest(
  __dirname,
  "jquery-val-set-to-attr-set",
  null,
  "default",
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  { parser: "ts" }
);
