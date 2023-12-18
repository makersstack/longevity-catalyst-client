import axios from "axios";
import refreshToken from "../../api/refreshTokenApi";
import { authKey } from "../../constants/storageKey";
import { apiKey } from "../../globals";
import { getLocalStorage, setToLocalStorage } from "../../utils/local-storage";

const instance = axios.create({
  baseURL: apiKey,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});
let isRefreshing = false;
let failedQueue = [];
const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

instance.interceptors.request.use(
  function (config) {
    const accessToken = getLocalStorage(authKey);
    // console.log(accessToken);
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
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = token;
            return instance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const accessToken = getLocalStorage(authKey);
        const newAccessToken = await refreshToken(accessToken);
        setToLocalStorage(authKey, newAccessToken);
        processQueue(null, newAccessToken);

        originalRequest.headers.Authorization = newAccessToken;
        return instance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
