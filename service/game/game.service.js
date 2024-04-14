import fs from "fs";

export class GameService {
  static async getGame(res) {
    try {
      const ratingFile = await fs.readFileSync("./dataset/rating.json");
      const data = JSON.parse(ratingFile);
      const game = this.getRandomGame(data);
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(game));
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }

  static getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
}
