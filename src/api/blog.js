import http from "./request";

export async function getBlog(params) {
  return await http.get("/blog", { params });
}

export async function getBlogType() {
  return await http.get("/blogtype");
}

export async function getBlogDetail(id) {
  return await http.get(`/blog/${id}`);
}

export async function submitComment(data) {
  return await http.post(`/comment`,data);
}

export async function getComment(params) {
  return await http.get(`/comment`,{params});
}