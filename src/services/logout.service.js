import { authApi } from "../api";

export const logoutRequest = async () => {
  try {
    const response = await authApi.logoutUser();
    return response.data;
  } catch (error) {
    throw new Error('Logout request failed');
  }
};
