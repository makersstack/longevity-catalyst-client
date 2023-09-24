import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import { data } from '../data/projectData';
import { baseUrl } from '../globals';

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
      {/* <!-- ST:- Team member section  --> */}
      <section class="full_width_team_member_section section_padding">
        <div class="container">
          <div class="team_member_wrapper">
            {/* section header  */}
            <div class="section_header">
              <h2>Meet the team Member</h2>
              <p>
                On Ed-Circle, instructors from all over the world instruct
                millions of students. We offer the knowledge and abilities.
              </p>
            </div>
            <div class="team_member_box">
              {/* single team member  */}
              {
                data.membersData.map((item, index) => (
                  <div class="single_team_member" key={index}>
                    <div class="team_member_img">
                      <img src={`${baseUrl}${item.icon}`} alt="avater" />
                    </div>
                    <h6 class="team_member_title">{item.title}</h6>
                    <span class="team_member_designation">
                      {item.subTitle}
                    </span>
                    <p>
                      {item.desc}
                    </p>
                    <div class="team_socail_contact">
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