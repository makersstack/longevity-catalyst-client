import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/UseAuth';


const RequireAuth = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};

const IfAuthCheck = () => {
  const location = useLocation();

  const { isLoggedIn } = useAuth();

  return isLoggedIn
    ? <Navigate to='/dashboard/home' state={{ from: location }} replace />
    : <Outlet />
};

export { IfAuthCheck, RequireAuth };

