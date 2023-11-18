import { apiKey } from "../globals";
import { instance as axoisInstance } from "../helpers/axios/axoisInstance";

export const projectApi = {
 createProject: (projectData) => axoisInstance.post(`${apiKey}/projects/create-project`, projectData),
 getProject: (projectId) => axoisInstance.get(`${apiKey}/projects/${projectId}`),
 likeProject: (projectId) => axoisInstance.post(`${apiKey}/projects/${projectId}/like`),
 unlikeProject: (projectId) => axoisInstance.delete(`${apiKey}/projects/${projectId}/like`),
};

