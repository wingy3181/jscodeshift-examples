// See https://prettier.io/docs/en/options.html for more detail.
module.exports = {
  // - Include parentheses around a sole arrow function parameter.
  // arrowParens: "avoid",

  // - Print spaces between brackets in object literals.
  // bracketSpacing: true,

  // Flavor of line endings in text files. "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what's used after the first line)
  // endOfLine: "auto",
  endOfLine: "lf",

  // - Specify the file name to use to infer which parser to use.
  // filePath: '<string>',

  // - Specify the global whitespace sensitivity for HTML files
  // htmlWhitespaceSensitivity: "css",

  // - Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier
  // insertPragma: false,

  // - Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  // jsxBracketSameLine: false,

  // - Use single quotes instead of double quotes in JSX.
  // jsxSingleQuote: false,

  // - Specify which parser to use. Prettier automatically infers the parser from the input file path, so you shouldn't have to change this setting. See https://prettier.io/docs/en/options.html#parser for values
  // parser: "babel",

  // - Specify the line length that the printer will wrap on.
  // printWidth: 80,
  printWidth: 120,

  // - By default, Prettier will wrap markdown text as-is since some services use a linebreak-sensitive renderer, e.g. GitHub comment and BitBucket. In some cases you may want to rely on editor/viewer soft wrapping instead, so this option allows you to opt out with "never".
  // proseWrap: "preserve",

  // - Change when properties in objects are quoted.
  // quoteProps: "as-needed",

  // - Format only a segment of a file. These two options can be used to format code starting and ending at a given character offset (inclusive and exclusive, respectively). The range will extend:
  // rangeStart: 0,
  // rangeEnd: null,

  // - Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to prettier.
  // requirePragma: false

  // - Print semicolons at the ends of statements.
  // semi: true,

  // - Use single quotes instead of double quotes.
  // singleQuote: false,

  // - Specify the number of spaces per indentation-level.
  // tabWidth: 2,

  // - Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.
  // trailingComma: "none",

  // - Indent lines with tabs instead of spaces.
  // useTabs: false,

  // - Whether or not to indent the code inside <script> and <style> tags in Vue files
  // vueIndentScriptAndStyle: false
}
