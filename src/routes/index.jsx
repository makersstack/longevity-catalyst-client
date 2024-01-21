import { Route, Routes } from "react-router-dom";
import { ENUM_USER_ROLE } from "../constants/role";
import { IfAuthCheck, RequireAuth } from "../middleware/AuthMiddleware";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import ProfileDetails from "../pages/ProfileDetails";
import ProjectDetails from "../pages/ProjectDetails";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import CareersPage from "../pages/careers";
import CookiesPage from "../pages/cookies";
import AddProject from "../pages/dashboard/AddProject";
import AllProject from "../pages/dashboard/AllProject";
import Dashboard from "../pages/dashboard/Dashboard";
import EditProject from "../pages/dashboard/EditProject";
import EditUserProfile from "../pages/dashboard/EditUserProfile";
import PasswordChange from "../pages/dashboard/PasswordChange";
import FeaturesPage from "../pages/features";
import HelpPage from "../pages/help";
import OverviewPage from "../pages/overview";
import PricingPage from "../pages/pricing";
import PrivacyPage from "../pages/privacy";
import TermsConditionPage from "../pages/terms";

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

      <Route element={<RequireAuth allowedRoles={[ENUM_USER_ROLE.REGULARUSER, ENUM_USER_ROLE.CONTRIBUTOR, ENUM_USER_ROLE.RESEARCHER]} />}>
        <Route path="/dashboard/home" element={<Dashboard />} />
        <Route path="/dashboard/profile/update" element={<EditUserProfile />} />
        <Route path="/dashboard/password/change" element={<PasswordChange />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ENUM_USER_ROLE.CONTRIBUTOR, ENUM_USER_ROLE.RESEARCHER]} />}>
        <Route path="/dashboard/project/all" element={<AllProject />} />
        <Route path="/dashboard/project/add" element={<AddProject />} />
        <Route path="/dashboard/project/edit/:projectId" element={<EditProject />} />
      </Route>
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsConditionPage />} />
      <Route path="/cookies" element={<CookiesPage />} />

      <Route path="/404" element={<PageNotFound showInfoText={'404 Page not Found'} />} />
      <Route path="*" element={<PageNotFound showInfoText={'Page not Found'} />} />
    </Routes>
  );
};

export default AppRoutes;
