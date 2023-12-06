import { useContext } from "react";
import { LoadingContext } from "../contex/LoadingContext";

const useLoading = () => {
  return useContext(LoadingContext);
}
export default useLoading;