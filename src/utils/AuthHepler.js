const SetAuth = (data) => {
    let retVal = false;
    try {
      if (data && data.accessToken && data.refreshToken) {
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        retVal = true;
      } else {
        // Handle the case when data is not in the expected format
        console.error('Invalid data format');
      }
    } catch (error) {
      console.error(error);
      retVal = false;
    }
    return retVal;
  };
  
const GetAuth = () => {
    return 'hi';
}

export { GetAuth, SetAuth };

