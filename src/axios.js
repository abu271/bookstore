import axios from "axios";

export const bookApi = axios.create({
  baseURL: import.meta.env.VITE_BOOK_API_URL ||'http://abudarda.co.uk:8000',
  timeout: 5000
});