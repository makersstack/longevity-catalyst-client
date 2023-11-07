import axios from "axios";
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
  signup: (userData) => api.post('/users/user', userData),
  login: (credentials) => api.post('/auth/login', credentials)
};




export const dataApi = {
  fetchData: () => api.get('/data'),
};