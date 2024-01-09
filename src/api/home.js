import http from "./request";

export function getbanners() {
  return http.get("/banner");
}
