import {
  mainRouteController,
  gameRouteController,
  voteRouteController,
  defaultRouteController,
} from "../controllers/index.js";

export const AppRoutes = (req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
};
