import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authKey } from "../../constants/storageKey";
import { apiKey } from "../../globals";
import { getLocalStorage } from "../../utils/local-storage";

const instance = axios.create({
  baseURL: apiKey,
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
    const navigation = useNavigate();
    // const originalRequest = error.config;
    // if (error.response && error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   try {
    //     const { newAccessToken } = await getNewAccessToken();
    //     storeUserInfo({ newAccessToken });
    //     error.config.headers.Authorization = `accessToken ${newAccessToken}`;
    //     return instance(originalRequest);
    //   } catch (refreshError) {
    //     console.error('Error refreshing access token:', refreshError);
    //   }
    // }
    // return Promise.reject(error);
    console.log(error);
    if (error.response.status === 401 || error.response.status === 403) {
      // Redirect to the login page or any other appropriate page
      navigation('/login');
      console.log("mang");
    }
  }
);

export default instance;
