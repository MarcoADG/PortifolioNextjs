import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/MarcoADG/repos",
});

export default api;
