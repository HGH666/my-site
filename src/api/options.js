import http from "./request";

export async function getSetting(params) {
  return await http.get("/setting", { params });
}