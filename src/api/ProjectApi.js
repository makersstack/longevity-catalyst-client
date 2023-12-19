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

  getAllProjectsByUsername: async (username, filters, paginationOptions) => {
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

    const modifyUrl = `/projects/user/${username}${queryParams ? `?${queryParams}` : ''}`;

    return await axiosBaseQuery({
      url: modifyUrl,
      method: 'GET',
    });
  },



  createProject: async (projectData) =>
    axiosBaseQuery({
      url: '/projects/create',
      method: 'POST',
      data: projectData,
    }),

  updateProject: async (projectData, projectId) =>
    axiosBaseQuery({
      url: `/projects/${projectId}/update`,
      method: 'PATCH',
      data: projectData,
    }),

  deleteProject: async (projectId) =>
    axiosBaseQuery({
      url: `/projects/${projectId}/delete`,
      method: 'delete',
    }),

  // For comment
  addComment: async (commentText, projectId) =>
    axiosBaseQuery({
      url: `/project/${projectId}/comment`,
      method: 'POST',
      data: commentText,
    }),

  getAllCommentByPost: async (projectId, paginationOptions) => {
    const { limit,page } = paginationOptions;
    return await axiosBaseQuery({
      url: `/project/${projectId}/comments?limit=${limit}&page=${page}`,
      method: "GET",
    })
  },

  updateComment: async (commentId,commentData) =>
    axiosBaseQuery({
      url: `/project/comment/${commentId}/update`,
      method: 'PATCH',
      data: commentData,
    }),
  updateReplay: async (replayId,commentData) =>
    axiosBaseQuery({
      url: `/project/replay/${replayId}/update`,
      method: 'PATCH',
      data: commentData,
    }),

  deleteComment: async (commentId) =>
    axiosBaseQuery({
      url: '/project/comment/delete/' + commentId,
      method: 'delete',
    }),
  // For Reply
  addReply: async (replyText, projectId, commentId) =>
    axiosBaseQuery({
      url: `/project/${projectId}/comment/${commentId}/reply`,
      method: 'POST',
      data: replyText,
    }),
  deleteReplay: async (replayId) =>
    axiosBaseQuery({
      url: '/project/replay/delete/' + replayId,
      method: 'delete',
    }),

  getAllReplyByComment: async (commentId, paginationOptions) => {
    const { limit,page } = paginationOptions;
    return await axiosBaseQuery({
      url: `/project/${commentId}/replay?limit=${limit}&page=${page}`,
      method: "GET",
    })
  },
  likeOperation: async (operationData) =>
    axiosBaseQuery({
      url: `/like/project`,
      method: 'POST',
      data: operationData
    }),

  VoteOperation: async (operationData) =>
    axiosBaseQuery({
      url: `/vote/project`,
      method: 'POST',
      data: operationData
    }),

};

export default projectApi;
