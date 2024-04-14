import { VoteService } from "../service/index.js";

export async function voteRouteController(req, res) {
  await VoteService.createVote(req, res);
}
