import axios from "axios";
import { authKey } from "../../constants/storageKey";
import { getNewAccessToken, storeUserInfo } from "../../services/auth.service";
import { getLocalStorage } from "../../utils/local-storage";


const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = getLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    const responseObject = {
      data: response?.data,
    };
    return responseObject;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { newAccessToken } = await getNewAccessToken();
        storeUserInfo({ newAccessToken });
        error.config.headers.Authorization = `accessToken ${newAccessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing access token:', refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
