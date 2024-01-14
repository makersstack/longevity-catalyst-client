import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";


const useLoading = () => {
  return useContext(LoadingContext);
}
export default useLoading;