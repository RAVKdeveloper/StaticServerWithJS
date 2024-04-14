import fs from "fs";
import { mimeTypes } from "./mime-types.js";

export function staticFile(res, filePath, ext) {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile("./public" + filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not Found");
    }
    res.end(data);
  });
}
