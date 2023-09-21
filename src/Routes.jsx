import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';

import About from './pages/AboutUs';
import Home from './pages/Home';

const Routess = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routess;
