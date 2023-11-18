import { apiKey } from "../globals";
import { instance as axoisInstance } from "../helpers/axios/axoisInstance";

// SetUp the base URL for Api

export const authApi = {
  signup: (userData) => axoisInstance.post(`${(apiKey)}/auth/signup`, userData),
  login: (credentials) => axoisInstance.post(`${(apiKey)}/auth/login`, credentials),
};

