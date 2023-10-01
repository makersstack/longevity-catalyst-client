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
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up/:type' element={<SignUp />}></Route>
        <Route path='*' element={<PageNotFound />} /> {/* Catch-all route for all other paths */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;