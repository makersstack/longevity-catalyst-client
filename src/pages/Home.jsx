import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import trustImages from '../data/images';
import { data } from '../data/projectData';
import { baseUrl } from '../globals';

const Home = () => {
  return (
    <>
      <Header></Header>
      {/* ST:- Banner section */}
      <section className="full_width_banner_section section_padding">
        <div className="container">
          <div className="banner_wrapper">
            <h1>Longevity Catalyst: An Open Science Platform</h1>
            <p>
              Longevity Catalyst is an open science platform that connects
              researchers, engineers, mentors, and funders in the longevity field.
              It's designed to accelerate progress in extending human lifespan by
              fostering collaboration, knowledge sharing, and problem-solving.
            </p>
            <Link to='/' className="btn btn-dark btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>
      {/* ED: Banner section  */}

      {/* ST:- trust by area */}
      <section className="full_width_trust_by_section section_padding">
        <div className="container">
          <div className="trust_by_wrapper">
            <h6>Trusted by</h6>
            <div className="trust_by_box">
              {
                trustImages.map((image, index) => (
                  <div className="single_trust_by" key={index}>
                    <img src={`${baseUrl}${image.src}`} alt={image.name} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* ED:- trust by area */}

      {/* ST:- Trading Project area */}
      <section class="full_width_trading_project_section section_padding">
        <div class="container">
          <div class="trading_project_wrapper">
            <h6>Trending Project</h6>
            <div class="trading_project_box">
              {
                data.projectCards.map((item, index) => (
                  <div class="trading_project_single" key={index} style={{background: `url(${baseUrl}${item.bg_img}) lightgray 50% / cover no-repeat`}} >
                    <h3>{item.title}</h3>
                    <p>
                      {
                        item.desc
                      }
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* ED:- trust by area */}
    </>
  );
};

export default Home;