import { authApi } from "../api";
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

export const logoutRequest = async () => {
  try {
    const response = await authApi.logoutUser();
    return response.data; 
  } catch (error) {
    throw new Error('Logout request failed');
  }
};
