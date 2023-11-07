import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from './UseAuth';

const IfAuthCheck = () => {
    const { auth } = useAuth();
    const location = useLocation();
    
    return (
        !auth?.accessToken
            ? <Outlet />
            : <Navigate to='/user/dashboard' state={{ from: location }} replace />
    );
};

export default IfAuthCheck;