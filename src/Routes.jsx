import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import About from './pages/AboutUs';
import Home from './pages/Home';

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
      </Routes>
    </Router>
  );
};

export default Routess;
