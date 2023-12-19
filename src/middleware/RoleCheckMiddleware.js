import { Routes, useNavigate } from "react-router-dom";
import useAuth from "../hooks/UseAuth";

const RoleCheck = ({paramToCheck, allowedRoles, children}) => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  const userHasPermission = () => {
    if(!allowedRoles.includes(userInfo?.role)){
      navigate('/dashboard/home');
      return false;
    }

    if (paramToCheck && userInfo?.role === 'contributor') {
      // Replace 'parameterValue' with the actual parameter value to check against
      if (userInfo?.someParameter !== 'parameterValue') {
        navigate('/dashboard/home'); // Redirect to home if parameter doesn't match
        return false;
      }
    }

    return true;
  }

  return userHasPermission() ? <Routes>{children}</Routes> : null;
}

export default RoleCheck;