import { axiosBaseQuery } from "../helpers/axios/baseQuery";


const categoryApi = {
  getAllCategories: async () =>
    axiosBaseQuery({
      url: "/categories",
      method: "GET",
    }),

};

export default categoryApi;
