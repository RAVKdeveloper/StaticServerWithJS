import fs from "fs";
import {
  staticFile,
  getData,
  API_ENDPOINTS,
  makeRatingFile,
} from "../../appModules/index.js";

export class MainService {
  static async getHTML(res, publicUrl, extname) {
    const data = await getData(API_ENDPOINTS.games);
    await makeRatingFile("./dataset/rating.json", data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }
}
