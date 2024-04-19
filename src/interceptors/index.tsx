import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    config.baseURL = "https://swapi.dev/api";
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Erro no interceptor axios:", error);
    return Promise.reject(error);
  }
);

export default axios;
