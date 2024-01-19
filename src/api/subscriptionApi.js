import { axiosBaseQuery } from "../helpers/axios/baseQuery";

const subscriptionApi = {

  subscribe: async (email) =>
    axiosBaseQuery({
      url: `/users/subscriptions`,
      method: 'POST',
      data: email
    }),
}

export default subscriptionApi;