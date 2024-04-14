import path from "path";

import { staticFile } from "../../appModules/http-utils/static-file.js";
import { mimeTypes } from "../../appModules/http-utils/mime-types.js";

export const defaultService = (res, url) => {
  const extname = String(path.extname(url)).toLowerCase();
  if (extname in mimeTypes) {
    staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
};
