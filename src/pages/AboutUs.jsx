import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/projectData';

const AboutUs = () => {
  return (
    <>
      {/* ST:- About Banner section */}
      <section className="full_width_about_banner_section section_padding">
        <div className="container">
          <div className="about_banner_wrapper">
            {/* about banner */}
            <div className="about_banner_img">
              <img src='/assets/img/about-banner.png' alt="About Banner" />
            </div>
            {/* about banner content */}
            <div className="about_banner_content">
              <h2>About Us</h2>
              <p>
                The Longevity Biotech Fellowship is a non-profit community for
                people to come together to build, join, or invest in revolutionary
                longevity biotechnology projects.
              </p>
              <p>
                We operate as an IRS-approved 501(c)3 non-profit-- registered
                under LessDeath Inc -- based in Santa Clara, California.
              </p>
              <Link to='/' className="btn btn-dark">Get In Touch</Link>
            </div>

          </div>
        </div>
      </section>
      {/* ED:- About Banner section */}

      {/* ST:- Why choice us section */}
      <section class="full_width_why_choice_section section_padding">
        <div class="container">
          <div class="why_choice_wrapper">
            {/* section header  */}
            <div class="section_header">
              <h2>Why Choose Us</h2>
              <p>
                On Ed-Circle, instructors from all over the world instruct
                millions of students. We offer the knowledge and abilities.
              </p>
            </div>
            {/* <!-- choice us boxes */}
            <div class="why_choice_us_boxes">
              {/* single box  */}
              {
                data.chooseData.map((chooseItem, index) => (
                  <div class="signle_choice_us" key={index}>
                    <div class="choice_icon">
                      {chooseItem.icon}
                    </div>
                    <h5>{chooseItem.title}</h5>
                    <p>
                      {chooseItem.desc}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      {/* ED:- Why choice us section */}
    </>
  )
}

export default AboutUs;