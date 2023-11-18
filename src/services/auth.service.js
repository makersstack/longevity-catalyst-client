import axios from "axios";
import { authKey } from "../constants/storageKey";
import { apiKey } from "../globals";
import { decodedToken } from "../utils/jwt";
import { getLocalStorage, setToLocalStorage } from "../utils/local-storage";


export const storeUserInfo = ({ accessToken }) => {
  return setToLocalStorage(authKey, accessToken)
}

export const getUserInfo = () => {
  const authToken = getLocalStorage(authKey);
  if (authToken) {
    const decodeadData = decodedToken(authToken);
    return decodeadData
  } else {
    return ""
  }
};

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};

export const isLoggdIn = () => {
  const authToken = getLocalStorage(authKey);
  return !!authToken
}

export const getNewAccessToken = async () => {
  try {
    const response = await axios.post(
      `${apiKey}/auth/refresh-token`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error('Failed to refresh access token');
  }
};
