import axios from "axios";

let api = axios.create({
  baseURL: "https://easypayz.onrender.com",
  // baseURL: "http://localhost:4000",
  withCredentials: true,
});
export default api;
