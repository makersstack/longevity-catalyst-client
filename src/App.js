import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/styles/global.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;