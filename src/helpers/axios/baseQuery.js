import axiosInstance from "./axoisInstance";

export const axiosBaseQuery = async ({
  url,
  method,
  data,
  params,
  contentType,
}) => {
  try {
    const result = await axiosInstance({
      url,
      method,
      data,
      params,
      headers: {
        "Content-Type": contentType || "application/json",
      },
      withCredentials: true,
    });
    return result;
  } catch (error) {
    return {
      error: {
        status: error?.response?.status,
        data: error?.response?.data || error.message,
      },
    };
  }
};
