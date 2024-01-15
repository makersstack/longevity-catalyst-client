// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

// const ProtectedRoute = ({ allowedRoles, path }) => {
//   const { userInfo } = useAuth();

//   if (!userInfo || !allowedRoles.includes(userInfo.role)) {
//     return <Navigate to="/dashboard/home" />;
//   }
//   return  <Navigate to={path} />
// };

// export default ProtectedRoute;
