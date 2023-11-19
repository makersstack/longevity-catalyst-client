import { axiosBaseQuery } from "../helpers/axios/baseQuery";


export const projectApi = {
  getAllProjects: async () =>
    axiosBaseQuery({
      url: "/projects",
      method: "GET",
    }),

  createProject: async (projectData) =>
    axiosBaseQuery({
      url: "/projects/create",
      method: "POST",
      data: projectData,
    }),

};

export default projectApi;
