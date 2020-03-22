import { API, FileInfo, JSCodeshift, Options, Transform } from "jscodeshift/src/core";

const DEFAULT_FUNCTION_NAME = "defaultFunctionName";
const DEFAULT_FUNCTION_NAME_TO_CALL = "defaultFunctionNameToCall";
const DEFAULT_COMMENT = " defaultComment";

const transform: Transform = (
  file: FileInfo,
  api: API,
  {
    functionName = DEFAULT_FUNCTION_NAME,
    functionNameToCall = DEFAULT_FUNCTION_NAME_TO_CALL,
    comment = DEFAULT_COMMENT,
  }: Options
) => {
  const j: JSCodeshift = api.jscodeshift;
  return (
    j(file.source)
      .find(j.FunctionDeclaration)
      // Target a particular function declaration
      .filter(({ node: functionDeclaration }) => functionDeclaration.id.name === functionName)
      .replaceWith(({ node: functionDeclaration }) => {
        // Create a function call expression statement
        const functionCallExpressionStatement = j.expressionStatement(
          j.callExpression(j.identifier(functionNameToCall), [])
        );

        // Create a comment and add it as a leading comment to the function call expression
        const commentLine = j.commentLine(comment);
        functionCallExpressionStatement.comments = [commentLine];

        // Append the function call expression to the function declaration's existing body
        functionDeclaration.body.body = [...functionDeclaration.body.body, functionCallExpressionStatement];
        return functionDeclaration;
      })
      .toSource()
  );
};

export default transform;
export const parser = "flow"; // babel|babylon|flow|ts|tsx (See https://github.com/facebook/jscodeshift#usage-cli)
