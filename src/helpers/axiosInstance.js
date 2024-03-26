import axios from "axios";

export const instance = axios.create({
  baseURL:
    "https://test-backend.i.datapred.com",
});
