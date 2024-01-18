import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const { isLoggedIn, userInfo } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(userInfo?.role)) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  return <Outlet />;
};

const IfAuthCheck = () => {
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  return isLoggedIn
    ? <Navigate to='/dashboard/home' state={{ from: location }} replace />
    : <Outlet />
};

export { IfAuthCheck, RequireAuth };

