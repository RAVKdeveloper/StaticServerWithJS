import { staticFile, getData, API_ENDPOINTS } from "../../appModules/index.js";

export const mainService = async (res, publicUrl, extname) => {
  const data = await getData(API_ENDPOINTS.games);
  console.log(data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
};
