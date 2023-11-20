import { useContext } from "react";
import { LoadingProvider } from "../contex/LoadingContext";

const useLoading = () => {
  useContext(LoadingProvider);
}
export default useLoading;