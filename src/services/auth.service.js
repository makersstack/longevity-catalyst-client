import axios from "axios";
import { authKey } from "../constants/storageKey";
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
    const response = await axios.post('http://localhost:5000/api/v1/auth/refresh-token');

    if (response.data && response.data.success) {
      const newAccessToken = response.data.data.accessToken;
      return newAccessToken;
    } else {
      throw new Error('Failed to get a new access token');
    }
  } catch (error) {
    throw new Error('Failed to fetch a new access token');
  }
};
