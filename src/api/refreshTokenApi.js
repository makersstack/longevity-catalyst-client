import axios from 'axios';
import { apiKey } from '../globals';

const refreshToken = async (accessToken) => {
  try {
    const response = await axios.post(
      `${apiKey}/auth/refresh-token`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        withCredentials: true
      }
    );

    if (response.data && response.data.success) {
      const newAccessToken = response.data.data.accessToken;
      axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      return newAccessToken;
    } else {
      throw new Error('Failed to refresh access token');
    }
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

export default refreshToken;
