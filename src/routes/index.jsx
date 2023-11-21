import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import GlobalRoute from "./GlobalRoute";
import PrivetRoutes from "./PrivetRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
      <Route path="/user/*" element={<PrivetRoutes />} />
      <Route path="/project/*" element={<GlobalRoute />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
