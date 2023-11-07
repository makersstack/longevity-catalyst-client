import { useContext } from "react";
import AuthContex from "../contex/AuthProvider";

const useAuth = () => {
  return useContext(AuthContex);
};

export default useAuth;
