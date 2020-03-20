jest.autoMockOff();

import { defineTest } from "jscodeshift/src/testUtils";

defineTest(
  __dirname,
  "append-function-call",
  null,
  "default",
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  { parser: "ts" }
);

defineTest(
  __dirname,
  "append-function-call",
  { functionName: "customFunctionName", functionNameToCall: "customFunctionNameToCall", comment: " customComment" },
  "custom",
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  { parser: "ts" }
);
