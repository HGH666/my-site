import axios from "axios";
import showMessage from "@/util/showMessage";
const BASE_URL = "/api";
const instancs = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});
// 添加请求拦截器
instancs.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
instancs.interceptors.response.use(function (request) {
  if (request.data.code !== 0) {
    showMessage({ content: request.data.msg, type: "error" });
    return null;
  }
  return request.data.data;
});
export default instancs;
