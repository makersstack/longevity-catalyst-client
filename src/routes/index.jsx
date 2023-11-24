import { Route, Routes } from "react-router-dom";
import ProfileView from "../components/profile/ProfileView";
import IfAuthCheck from "../hooks/IfAuthCheck";
import RequireAuth from "../hooks/RequireAuth";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import ProjectDetails from "../pages/ProjectDetails";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import AddProject from "../pages/dashboard/AddProject";
import AllProject from "../pages/dashboard/AllProject";
import Dashboard from "../pages/dashboard/Dashboard";
import EditUserProfile from "../pages/dashboard/EditUserProfile";
import PasswordChange from "../pages/dashboard/PasswordChange";
import ViewProfile from "../pages/dashboard/ViewProfile";

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/faqs" element={<FAQ />} />
      <Route path="/project/:projectId" element={<ProjectDetails />} />
      {/* <Route path="/:username" element={<ProfileShow />} /> */}

      <Route element={<IfAuthCheck />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up/:type" element={<SignUp />} />
      </Route>

      <Route path=":username" element={<ProfileView />} />

      <Route element={<RequireAuth />}>
        <Route path="/dashboard/home" element={<Dashboard />} />
        <Route path="/dashboard/project/all" element={<AllProject />} />
        <Route path="/dashboard/project/add" element={<AddProject />} />
        <Route path="/dashboard/profile/view" element={<ViewProfile />} />
        <Route path="/dashboard/profile/update" element={<EditUserProfile />} />
        <Route path="/dashboard/password/change" element={<PasswordChange />} />
      </Route>

      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
