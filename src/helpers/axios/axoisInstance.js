import axios from "axios";
import refreshToken from "../../api/refreshTokenApi";
import { authKey } from "../../constants/storageKey";
import { apiKey } from "../../globals";
import { getLocalStorage, setToLocalStorage } from "../../utils/local-storage";


const CancelToken = axios.CancelToken;
const source = CancelToken.source();


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
    if (accessToken) {
      config.headers.authorization = accessToken;
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
    if (error.response && error.response.data.message === "Forbidden - Token Expired" && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.authorization = token;
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

        originalRequest.headers.authorization = newAccessToken;
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

export const axiosCancelToken = () => {
  source.cancel("Operation canceled due to unmounting.");
};

export default instance;
