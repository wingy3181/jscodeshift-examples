const semver = require("semver");
const { engines } = require(__dirname + "/../.././package");
const version = engines.node;
if (!semver.satisfies(process.version, version)) {
  console.error(`The current node version ${process.version} does not satisfy the required version ${version}`);
  process.exit(1);
}
