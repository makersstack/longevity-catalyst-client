import React from 'react';
import 'react-responsive-modal/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import { LoadingProvider } from './contex/LoadingProvider';
import IfAuthCheck from './hooks/IfAuthCheck';
import RequireAuth from './hooks/RequireAuth';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import ProfileShow from './pages/ProfileShow';
import ProjectDetails from './pages/ProjectDetails';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import AddProject from './pages/userPanel/AddProject';
import AllProject from './pages/userPanel/AllProject';
import Dashboard from './pages/userPanel/Dashboard';
import EditUserProfile from './pages/userPanel/EditUserProfile';
import PasswordChange from './pages/userPanel/PasswordChange';

const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/faqs' element={<FAQ />} />

          <Route element={<IfAuthCheck />}>
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up/:type' element={<SignUp />}></Route>
          </Route>

          <Route path='/single-project' element={<ProjectDetails />} />
          <Route path='/user/:profile' element={<ProfileShow />} />

          <Route element={<RequireAuth />}>
            <Route path='/user/profile/update' element={<EditUserProfile />} />
            <Route path='/user/dashboard' element={<Dashboard />} />
            <Route path='/user/project/all' element={<AllProject />} />
            <Route path='/user/project/add' element={<AddProject />} />
            <Route path='/user/password/change' element={<PasswordChange />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;