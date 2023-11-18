
// import axios from 'axios';
// import useAuth from './UseAuth';

// const BASE_URL = 'http://localhost:5000/api/v1';

// const UseRefreshToken = () => {
//   const { setAuth,auth } = useAuth();

//   const headers = {
//     'Content-Type': 'application/json', // Replace with your desired content type
//     // Add any other headers you want to set
//     // For example:
//     'Authorization': auth.accessToken
//   };

//   const refresh = async () =>{
//     const response = await axios.create({ baseURL: BASE_URL, withCredentials: true }).post('/auth/refresh-token',headers);
//     setAuth(prev =>{
//         console.log(JSON.stringify(prev));
//         console.log(response.data);
//         return {...prev}
//     })
//   }
//   return refresh;
 
// };

// export default UseRefreshToken;