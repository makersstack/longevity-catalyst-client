import queryString from 'query-string';
import { axiosBaseQuery } from '../helpers/axios/baseQuery';

export const projectApi = {
  getAllProjects: async (queryParams) => {
    try {
      const queryStringified = queryString.stringify(queryParams);
      const url = `/projects${queryStringified ? `?${queryStringified}` : ''}`;

      return await axiosBaseQuery({
        url,
        method: 'GET',
      });
    } catch (error) {
      throw new Error('Error fetching projects:', error);
    }
  },

  getSingleProject: async (projectId) =>
    axiosBaseQuery({
      url:  `/projects/${projectId}`,
      method: "GET",
  }),

  getAllProjectsByUser: async (page = 1, limit = 5) => {
    try {
      return await axiosBaseQuery({
        url: `/projects/user/?page=${page}&limit=${limit}`,
        method: 'GET',
      });
    } catch (error) {
      throw new Error('Error fetching projects by user:', error);
    }
  },

  getAllProjectsByUsername: async (username) =>
  axiosBaseQuery({
    url: `/projects/user/${username}`,
    method: "GET",
  }),

  getProjectsByUsername: async (username) =>
  axiosBaseQuery({
    url: `/users/${username}`,
    method: "GET",
  }),
  
  createProject: async (projectData) =>
    axiosBaseQuery({
      url: '/projects/create',
      method: 'POST',
      data: projectData,
    }),
};

export default projectApi;
