import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/faqs' element={<FAQ />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;