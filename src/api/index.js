import axios from "axios";
import { instance as axoisInstance } from "../helpers/axios/axoisInstance";
const BASE_URL = 'http://localhost:5000/api/v1';

// SetUp the base URL for Api
const api = axios.create({
  baseURL: BASE_URL
});

// Add a response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export const authApi = {
  signup: (userData) => axoisInstance.post(`${(BASE_URL)}/auth/signup`, userData),
  login: (credentials) => axoisInstance.post(`${(BASE_URL)}/auth/login`, credentials)
};



export const dataApi = {
  fetchData: () => api.get('/data'),
};