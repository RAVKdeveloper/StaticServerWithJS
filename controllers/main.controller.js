import { mainService } from "../service/index.js";

export async function mainRouteController(res, publicUrl, extname) {
  mainService(res, publicUrl, extname);
}
