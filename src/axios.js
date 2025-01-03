import axios from "axios";

export const bookApi = axios.create({
  baseURL: import.meta.env.VITE_BOOK_API_URL,
  timeout: 5000
});