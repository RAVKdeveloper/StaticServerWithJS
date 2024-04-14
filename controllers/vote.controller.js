import { voteService } from "../service/index.js";

export async function voteRouteController(req, res) {
  await voteService(req, res);
}
