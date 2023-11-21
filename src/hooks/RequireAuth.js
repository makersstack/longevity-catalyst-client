import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from './UseAuth';


const RequireAuth = () => {
    const location = useLocation();
    const { isLoggedIn } = useAuth();

    return isLoggedIn  ? <Outlet /> : <Navigate to='/login' state={{from: location}} replace />;
};

export default RequireAuth;