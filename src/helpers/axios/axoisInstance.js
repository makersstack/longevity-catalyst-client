
import axios from "axios";
import { authKey } from "../../constants/storageKey";
import { getNewAccessToken } from "../../services/auth.service";
import { getLocalStorage } from "../../utils/local-storage";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    const responseObject = {
      data: response?.data,
    };
    return responseObject;
  },
  async function (error) {
    const originalRequest = error.config;

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log("Hello for pass");
      // try {
      try {
        const newAccessTokenResponse = await getNewAccessToken();

        // Update the original request headers with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccessTokenResponse.accessToken}`;
        console.log(newAccessTokenResponse);
        // Retry the original request with the new access token
        return axios(originalRequest);
      } catch (refreshError) {
        // Handle token refresh failure or other errors
        return Promise.reject(refreshError);
      }

    } else {
      const responseObject = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message,
      };
      return responseObject;
    }
  }
);

export { instance };

