export const genProjectLink = (projectId) => {
  const encodedId = btoa(projectId.toString());
  return encodedId;
};

export const decodeProjectLink = (encodedId) => {
  try {
    const decodedId = atob(encodedId);
    return decodedId;
  } catch (error) {
    console.error('Decoding error:', error);
    return null; // Return null or handle the error as per your requirement
  }
};
