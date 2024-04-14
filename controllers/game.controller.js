import { gameService } from "../service/index.js";

export async function gameRouteController(res) {
  await gameService(res);
}
