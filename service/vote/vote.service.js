import fs from "fs";
import {
  parseBody,
  createRating,
  WEIGHT,
  updateRating,
} from "../../appModules/index.js";

export class VoteService {
  static async createVote(req, res) {
    if (req.method !== "POST") {
      res.statusCode = 404;
      res.end("Not Found");
    } else {
      try {
        res.statusCode = 200;
        const body = await parseBody(req);
        const data = JSON.parse(body);
        const rating = createRating(data, WEIGHT);
        const newRating = await this.readRating(data.id, rating);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
      } catch (e) {
        console.log(e);
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    }
  }

  static async readRating(id, rating) {
    const ratingFile = await fs.readFileSync("./dataset/rating.json");
    const ratingArray = JSON.parse(ratingFile);
    const newRating = updateRating(ratingArray, id, rating);
    await fs.writeFileSync("./dataset/rating.json", JSON.stringify(newRating));
    return newRating;
  }
}
