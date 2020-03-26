import { API, FileInfo, Options, Transform } from "jscodeshift/src/core";
import appendFunctionCallTransform from "../append-function-call/append-function-call";
import jqueryValSetToAttrSetTransform from "../jquery-val-set-to-attr-set/jquery-val-set-to-attr-set";
import reverseIdentifiersTransform from "../reverse-identifiers/reverse-identifiers";

// https://github.com/facebook/jscodeshift/issues/148#issuecomment-282026897
const transform: Transform = (file: FileInfo, api: API, options: Options) => {
  const fixes = [appendFunctionCallTransform, jqueryValSetToAttrSetTransform, reverseIdentifiersTransform];
  let src = file.source;
  fixes.forEach(fix => {
    if (typeof src === "undefined") {
      return;
    }
    src = fix({ ...file, source: src }, api, options) as string;
  });
  return src;
};

export default transform;
export const parser = "flow"; // babel|babylon|flow|ts|tsx (See https://github.com/facebook/jscodeshift#usage-cli)
