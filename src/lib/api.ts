import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000 * 30,
});

const uploader = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    "Content-Type": "multipart/form-data",
  },
  timeout: 1000 * 30,
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  },
);

export { api, uploader };
