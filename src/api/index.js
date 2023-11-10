import axios from "axios";
import { apiKey, baseUrl } from "../globals";

// SetUp the base URL for Api
const api = axios.create({
  baseURL: baseUrl
});

// Add a response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export const authApi = {
  signup: (userData) => api.post(`${(apiKey)}/auth/signup`, userData),
  login: (credentials) => api.post(`${(apiKey)}/auth/login`, credentials)
};



export const dataApi = {
  fetchData: () => api.get('/data'),
};