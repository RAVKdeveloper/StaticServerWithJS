import path from "path";

import { staticFile } from "../../appModules/index.js";
import { mimeTypes } from "../../appModules/index.js";

export class DefaultService {
  static default(res, url) {
    const extname = String(path.extname(url)).toLowerCase();
    if (extname in mimeTypes) {
      staticFile(res, url, extname);
    } else {
      res.statusCode = 404;
      res.end("Not Found");
    }
  }
}
