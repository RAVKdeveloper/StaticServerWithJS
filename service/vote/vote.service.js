import { parseBody } from "../../appModules/http-utils/parse-body.js";

export const voteService = async (req, res) => {
  parseBody(req, (err, body) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
    console.log(body);
    res.statusCode = 200;
    res.end("Success!");
  });
};
