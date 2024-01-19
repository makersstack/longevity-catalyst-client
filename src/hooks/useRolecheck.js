import useAuth from "./useAuth";

const useRolecheck = (allowedRoles) => {
  const { isLoggedIn, userInfo } = useAuth();
  console.log(allowedRoles);
  if (!isLoggedIn) {
    return false;
  }

  if (!allowedRoles.includes(userInfo?.role)) {
    return false;
  }

  return true;
}

export default useRolecheck;