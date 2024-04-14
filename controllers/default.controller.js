import { defaultService } from "../service/index.js";

export async function defaultRouteController(res, url) {
  defaultService(res, url);
}
