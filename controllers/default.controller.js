import { DefaultService } from "../service/index.js";

export async function defaultRouteController(res, url) {
  await DefaultService.default(res, url);
}
