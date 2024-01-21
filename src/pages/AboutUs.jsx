import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/about.css';
import Tooltip from '../components/comment/Tooltip';
import Newsletter from '../components/ui/Newsletter';
import { data } from '../data/projectData';
import { baseUrl } from '../globals';
import ScrollToTop from '../utils/routeChange';

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - Longevity Catalyst";
  }, []);
  ScrollToTop();

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
              <br /> 
              <Tooltip text="Contact us for assistance!">
                <Link to='/help' className="btn btn-dark">Get In Touch</Link>
              </Tooltip>
            </div>

          </div>
        </div>
      </section>
      {/* ED:- About Banner section */}

      {/* ST:- Why choice us section */}
      <section className="full_width_why_choice_section section_padding">
        <div className="container">
          <div className="why_choice_wrapper">
            {/* section header  */}
            <div className="section_header">
              <h2>Why Choose Us</h2>
              <p>
                On Ed-Circle, instructors from all over the world instruct
                millions of students. We offer the knowledge and abilities.
              </p>
            </div>
            {/* <!-- choice us boxes */}
            <div className="why_choice_us_boxes">
              {/* single box  */}
              {
                data.chooseData.map((chooseItem, index) => (
                  <div className="signle_choice_us" key={index}>
                    <div className="choice_icon">
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
      {/* <!-- ST:- Team member section  --> */}
      <section className="full_width_team_member_section section_padding">
        <div className="container">
          <div className="team_member_wrapper">
            {/* section header  */}
            <div className="section_header">
              <h2>Meet the team Member</h2>
              <p>
                On Ed-Circle, instructors from all over the world instruct
                millions of students. We offer the knowledge and abilities.
              </p>
            </div>
            <div className="team_member_box">
              {/* single team member  */}
              {
                data.membersData.map((item, index) => (
                  <div className="single_team_member" key={index}>
                    <div className="team_member_img">
                      <img src={`${baseUrl}${item.icon}`} alt="avater" />
                    </div>
                    <h6 className="team_member_title">{item.title}</h6>
                    <span className="team_member_designation">
                      {item.subTitle}
                    </span>
                    <p>
                      {item.desc}
                    </p>
                    <div className="team_socail_contact">
                      {
                        item.socailIcons.map((icon, index) => (
                          <Link to='/about' key={index}>{icon}</Link>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </section>
      {/* ED:- Team member section */}
      {/* For NewsLetter */}
      <Newsletter />
      {/* For NewsLetter */}
    </>
  )
}

export default AboutUs;