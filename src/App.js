import React from 'react';
import 'react-responsive-modal/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import ProjectDetails from './pages/ProjectDetails';
import ContributerSignUp from './pages/auth/ContributerSignUp';
import Login from './pages/auth/Login';
import ResearcherSignUp from './pages/auth/ResearcherSignUp';
import UserSignUp from './pages/auth/UserSignUp';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' >
          <Route path='researcher' element={<ResearcherSignUp />} />
          <Route path='contributer' element={<ContributerSignUp />} />
          <Route path='user' element={<UserSignUp />} />
          <Route path='single-project' element={<ProjectDetails />} />
        </Route>
        <Route path='*' element={<PageNotFound />} /> {/* Catch-all route for all other paths */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;