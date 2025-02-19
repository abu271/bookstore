import axios from "axios";

export const bookApi = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 5000
});