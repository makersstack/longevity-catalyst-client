import useAuth from "../../hooks/useAuth";

const LogoutFunction = () => {
  const { handleLogout } = useAuth();

  const logoutUser = async () => {
      try {
          await handleLogout();
      } catch (error) {
          // Handle error if logout fails
      }
  };

  logoutUser();

  return null;
};

export default LogoutFunction;