import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-foodexplorer-wp6b.onrender.com"
})