import { GameService } from "../service/index.js";

export async function gameRouteController(res) {
  await GameService.getGame(res);
}
