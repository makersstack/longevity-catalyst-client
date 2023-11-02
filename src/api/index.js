import axios from "axios";

// SetUp the base URL for Api
const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1'
});

export const authApi = {
  signup: (userData) => api.post('/users/user', userData),
  login: (credentials) => api.post('/auth/login', credentials)
};

export const dataApi = {
  fetchData: () => api.get('/data'),
};