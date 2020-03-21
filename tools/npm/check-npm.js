if (process.env.npm_execpath.indexOf("node") === -1) {
  console.error("Please use NPM instead of Yarn to install dependencies.");
  process.exit(1);
}
