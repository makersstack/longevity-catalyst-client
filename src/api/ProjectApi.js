import { axiosBaseQuery } from '../helpers/axios/baseQuery';

export const projectApi = {
  getAllProjects: async (filters, paginationOptions) => {
    const searchQuery = filters.searchTerm ? `searchTerm=${encodeURIComponent(filters.searchTerm)}` : '';

    const filterQueries = Object.entries(filters)
      .filter(([key, value]) => key !== 'searchTerm' && value !== '')
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((val) => `${key}=${encodeURIComponent(val)}`).join('&');
        }
        return `${key}=${encodeURIComponent(value)}`;
      })
      .join('&');

    const { page, limit } = paginationOptions;

    const paginationQuery = `page=${page}&limit=${limit}`;

    const queryParams = [paginationQuery, searchQuery, filterQueries,].filter(Boolean).join('&');

    const modifyUrl = `/projects${queryParams ? `?${queryParams}` : ''}`;

    return await axiosBaseQuery({
      url: modifyUrl,
      method: 'GET',
    });
  },

  getSingleProject: async (projectId) =>
    axiosBaseQuery({
      url: `/projects/${projectId}`,
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

  createProject: async (projectData) =>
    axiosBaseQuery({
      url: '/projects/create',
      method: 'POST',
      data: projectData,
    }),

  // For comment
  addComment: async (commentText, projectId) =>
    axiosBaseQuery({
      url: `/project/${projectId}/comment`,
      method: 'POST',
      data: commentText,
    }),

  getAllCommentByPost: async (projectId, paginationOptions) => {
    const { limit } = paginationOptions;
    return await axiosBaseQuery({
      url: `/project/${projectId}/comments?limit=${limit}`,
      method: "GET",
    })
  },

  updateComment: async (projectData) =>
    axiosBaseQuery({
      url: '/project/create',
      method: 'POST',
      data: projectData,
    }),

  deleteComment: async (projectData) =>
    axiosBaseQuery({
      url: '/project/create',
      method: 'POST',
      data: projectData,
    }),
  // For Reply
  addReply: async (commentText, projectId, commentId) =>
    axiosBaseQuery({
      url: `/project/${projectId}/comment/:commentId/reply`,
      method: 'POST',
      data: commentText,
    }),

  getAllReplyByComment: async (projectId, paginationOptions) => {
    const { limit } = paginationOptions;
    return await axiosBaseQuery({
      url: `/project/${projectId}/comments?limit=${limit}`,
      method: "GET",
    })
  },

};

export default projectApi;
