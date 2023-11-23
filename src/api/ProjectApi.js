import { axiosBaseQuery } from "../helpers/axios/baseQuery";


const projectApi = {
  getAllProjects: async () =>
    axiosBaseQuery({
      url: "/projects",
      method: "GET",
    }),
    getSingleProject: async (projectId) =>
    axiosBaseQuery({
      url:  `/projects/${projectId}`,
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
