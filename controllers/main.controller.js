import { MainService } from "../service/index.js";

export async function mainRouteController(res, publicUrl, extname) {
  MainService.getHTML(res, publicUrl, extname);
}
