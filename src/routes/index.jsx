import { Route, Routes } from "react-router-dom";
import { IfAuthCheck, RequireAuth } from "../middleware/AuthMiddleware";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import ProfileDetails from "../pages/ProfileDetails";
import ProjectDetails from "../pages/ProjectDetails";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import AddProject from "../pages/dashboard/AddProject";
import AllProject from "../pages/dashboard/AllProject";
import Dashboard from "../pages/dashboard/Dashboard";
import EditProject from "../pages/dashboard/EditProject";
import EditUserProfile from "../pages/dashboard/EditUserProfile";
import PasswordChange from "../pages/dashboard/PasswordChange";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/faqs" element={<FAQ />} />
      <Route path="/:username" element={<ProfileDetails />} />
      <Route path="/project/:projectId" element={<ProjectDetails />} />

      <Route element={<IfAuthCheck />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up/:type" element={<SignUp />} />
      </Route>

      <Route element={<RequireAuth />}>
        <Route path="/dashboard/home" element={<Dashboard />} />
        <Route path="/dashboard/project/all" element={<AllProject />} />
        <Route path="/dashboard/project/add" element={<AddProject />} />
        <Route path="/dashboard/project/edit/:projectId" element={<EditProject />} />
        <Route path="/dashboard/profile/update" element={<EditUserProfile />} />
        <Route path="/dashboard/password/change" element={<PasswordChange />} />
      </Route>

      <Route path="/404" element={<PageNotFound showInfoText={'404 Page not Found'} />} />
      <Route path="*" element={<PageNotFound showInfoText={'Page not Found'} />} />
    </Routes>
  );
};

export default AppRoutes;
