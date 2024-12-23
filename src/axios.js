import axios from "axios";

export const bookApi = axios.create({
  baseURL: '/api',
  timeout: 1000
});