import { API, FileInfo, JSCodeshift, Transform } from "jscodeshift/src/core";

const transform: Transform = (file: FileInfo, api: API) => {
  const j: JSCodeshift = api.jscodeshift;
  return j(file.source)
    .find(j.CallExpression)
    .filter(({ node: callExpression }) => {
      const isMemberExpressionInsideCallExpression = callExpression.callee.type === "MemberExpression";
      const isFunctionWithName =
        "property" in callExpression.callee && callExpression.callee.property["name"] === "val";
      const isFunctionWithArguments = callExpression.arguments.length > 0;
      return isMemberExpressionInsideCallExpression && isFunctionWithName && isFunctionWithArguments;
    })
    .replaceWith(({ node: callExpression }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      callExpression.callee.property.name = "attr";
      callExpression.arguments = [j.literal("value"), ...callExpression.arguments];
      return callExpression;
    })
    .toSource();
};

export default transform;
export const parser = "flow"; // babel|babylon|flow|ts|tsx (See https://github.com/facebook/jscodeshift#usage-cli)
