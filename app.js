import http from "http";

import { AppRoutes } from "./routes/app.routes.js";

const server = http.createServer((req, res) => {
  AppRoutes(req, res);
});

server.listen(3005, () => console.log("server listen 3005 port"));
