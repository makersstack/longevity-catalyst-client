import { useContext } from "react";
import { AuthContext } from "../contex/AuthContext";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;