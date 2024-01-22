import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../src/assets/styles/home.css';
import ProjectFeed from '../components/ui/ProjectFeed';
import Tooltip from '../components/ui/Tooltip';
import TradingProjectSlider from '../components/ui/TradingProjectSlider';
import TrustSlider from '../components/ui/TrustSlider';
import useAuth from '../hooks/useAuth';
import ScrollToTop from '../utils/routeChange';
import { scrollToSection } from '../utils/utilitis';

const Home = () => {
  useEffect(() => {
    document.title = 'Home - Longevity Catalyst';
  }, []);
  ScrollToTop();
  const { isLoggedIn } = useAuth();

  return (
    <>
      {/* ST:- Banner section */}
      <section className="full_width_banner_section section_padding">
        <div className="container">
          <div className="banner_wrapper">
            <h1>Longevity Catalyst: An Open Science Platform </h1>
            <p>
              Longevity Catalyst is an open science platform that connects
              researchers, engineers, mentors, and funders in the longevity field.
              It's designed to accelerate progress in extending human lifespan by
              fostering collaboration, knowledge sharing, and problem-solving.
            </p>
            {
              isLoggedIn ? (
                <Tooltip text="Begin your journey!">
                  <button type='button' className="btn btn-dark btn-lg" onClick={() => scrollToSection('feedProjects')}>
                    Get Started
                  </button>
                </Tooltip>
              ) : (
                <Tooltip text="Begin your journey!">
                  <Link to='/login?emsg=Please login to get started' className="btn btn-dark btn-lg">
                    Get Started
                  </Link>
                </Tooltip>
              )
            }
          </div>
        </div>
      </section>
      {/* ED: Banner section  */}
      {/* ST:- trust by area */}
      <section className="full_width_trust_by_section section_padding">
        <div className="container">
          <div className="trust_by_wrapper">
            <h6>Trusted by</h6>
            <TrustSlider />
          </div>
        </div>
      </section>
      {/* ED:- trust by area */}

      {/* ST:- Trading Project area */}
      <section className="full_width_trading_project_section section_padding">
        <div className="container">
          <div className="trading_project_wrapper">
            <h6>Trending Project</h6>
            <TradingProjectSlider />
          </div>
        </div>
      </section>
      {/* ED:- trust by area */}

      {/* ST:- Project show area */}
      <section className="project_show_section home_project_show" id='feedProjects'>
        <div className="container">
          <ProjectFeed />
        </div>
      </section>
      {/* ST:- Project show area */}
    </>
  );
};

export default Home;