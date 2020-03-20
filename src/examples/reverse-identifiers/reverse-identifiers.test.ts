import * as childProcess from "child_process";
import * as path from "path";
const transform = require.resolve("./reverse-identifiers");

describe("reverse-identifiers", () => {
  it("transforms correctly", () => {
    const result = childProcess.spawnSync(
      path.join("node_modules", ".bin", "jscodeshift"),
      [
        "--dry",
        "--print",
        "--run-in-band",
        "-t",
        transform,
        "--extensions=ts",
        "--parser=ts",
        path.join(__dirname, "./reverse-identifiers.input.ts")
      ],
      {
        encoding: "utf8"
      }
    );

    expect(result.stdout).toEqual(expect.stringContaining("type yarrAemaNrOemaN = string | string[];"));
  });
});
