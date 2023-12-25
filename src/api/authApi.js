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

  logoutUser: async () =>
    axiosBaseQuery({
      url: `/auth/logout`,
      method: "POST",
    }),

  changlePassword: async (passData) =>
    axiosBaseQuery({
      url: `/auth/profile/changepass`,
      method: "PATCH",
      data: passData
    }),

  updateUser: async (username, userData) =>
    axiosBaseQuery({
      url: `/users/${username}/update`,
      method: "PATCH",
      data: userData,
    }),

};

export default authApi;
