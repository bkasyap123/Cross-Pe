import axios from "axios";

let api = axios.create({
  baseURL: "https://easypayz.onrender.com",
  // withCredentials: true,
});

export default api;
