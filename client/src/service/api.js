import axios from "axios";

let api = axios.create({
  baseURL: "https://cross-pe.onrender.com",
  // baseURL: "http://localhost:4000",
  withCredentials: true,
});
export default api;
