import { axiosBaseQuery } from '../helpers/axios/baseQuery';

export const profileApi = {

    GetUserInfoByUsername : async (username) =>
    axiosBaseQuery({
      url: `/users/${username}`,
      method: 'GET'
    }),

  NotificationOperation: async (operationData) =>
    axiosBaseQuery({
      url: `/profile/set/notification`,
      method: 'POST',
      data: operationData
    }),

    FollowOperation: async (operationData) =>
    axiosBaseQuery({
      url: `/profile/set/follow`,
      method: 'POST',
      data: operationData
    }),

};

export default profileApi;
