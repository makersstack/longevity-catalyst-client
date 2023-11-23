import { axiosBaseQuery } from "../helpers/axios/baseQuery";


export const authApi = {
  login: async (credentials) =>
    axiosBaseQuery({
      url: "/auth/login",
      method: "POST",
      data: credentials,
    }),
    signup: async (userData) =>
    axiosBaseQuery({
      url: "/auth/signup",
      method: "POST",
      data: userData,
    }),

  getUserProfile: async (userId) =>
    axiosBaseQuery({
      url: `/users/profile/${userId}`, 
      method: "GET",
    }),

  // Other auth-related API functions
};

export default authApi;
