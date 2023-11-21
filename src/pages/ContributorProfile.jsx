import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaBell, FaWifi } from 'react-icons/fa';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { IoEyeOutline, IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import "../assets/styles/profileShow.css";
import TopFilterButtons from '../components/filter/TopFilterButtons';
import { topFilterOptionsPage1 } from '../data/filterData';
import ScrollToTop from '../utils/RouteChange';

const ContributorProfile = () => {
  ScrollToTop();
  const [selectedTopOption, setSelectedTopOption] = useState('latest');

  const handelSideBarButton = (e) => {
    e.preventDefault();
  }

  const handleTopOptionChange = (value) => {
    setSelectedTopOption(value);
  };
  return (
    <section className="full_width_contributer_section">
      <div className="container">
        <div className="contributer_page_wrapper">

          <div className="project_side_ber_container">
            <div className="project_side_bar">
              <form method="post">

                <div className="side_bar_card">
                  <div className="profile_user_info">
                    <div className="image_block">
                      <img src="./assets/img/team-member-1.jpeg" alt="user" />
                    </div>
                    <div className="info_block">
                      <h3>Mark Hamalainen</h3>
                      <div className="user_title">Programmer</div>
                      <span className="follow_st">
                        <Link to="/">5000 follower </Link> .
                        <Link to="/">200 following</Link>
                      </span>
                      <div className="profile_buttons">
                        <Link to="/" className="btn btn-dark no-shadow">
                          <FaBell />
                          Notify
                        </Link>
                        <Link to="/" className="btn btn-gray">
                          <FaWifi />
                          Follow
                        </Link>
                        <button className="btn_more_bar">
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="side_bar_card">

                  <div className="side_bar_card_head">
                    <span className="head_title">Intro</span>
                    <Link to="/" className="btn btn-gray btn-sm">Edit</Link>
                  </div>

                  <div className="side_bar_card_body">
                    <p>
                      Software engineer, dad, husband, former video game
                      programmer, and member of The Church of Jesus Christ of
                      Latter-day Saints.
                    </p>
                    <span className="divider"></span>
                    <ul>
                      <li>
                        <div className="icon_box">
                          <CiLocationOn />
                        </div>
                        <p>
                          <span>Lives in</span>
                          <b>New York</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <IoHomeOutline />
                        </div>
                        <p>
                          <span>Lives in</span>
                          <b>Home state Brazil</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <IoEyeOutline />
                        </div>
                        <p>
                          <span>Content View</span>
                          <b>3.5M</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <FiBriefcase />
                        </div>
                        <p>
                          <span>Software Engineer</span>
                          <b>Present</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <FiCalendar />
                        </div>
                        <p>
                          <span>Joined</span>
                          <b>January 2010</b>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="side_bar_card">
                  <div className="input_box">
                    <h4>Skills : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>Python</p>
                      <p className='show_ct'>Machine learning</p>
                      <p className='show_ct'>Molecular modeling</p>
                      <p className='show_ct'>Cheminformatics</p>
                      <p className='show_ct'>Pharmacology</p>
                    </div>
                    {/* <div className='demo'>
                      <Link to="/" className="btn btn-gray btn-sm">Add Skills</Link>
                    </div> */}
                  </div>
                </div>

                <div className="side_bar_card">
                  <div className="input_box">
                    <h4>Protfolio :</h4>
                    <input
                      id="se-p"
                      type="text"
                      disabled
                      placeholder="https://www.protfolio.com"
                    />
                  </div>
                </div>

                <div className="side_bar_card">
                  <div className="input_box">
                    <h4>Certification :</h4>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="project_show_container">

            <TopFilterButtons options={topFilterOptionsPage1}
              selectedOption={selectedTopOption}
              onOptionChange={handleTopOptionChange}
              handelSideBarButton={handelSideBarButton}
            />

            <div className="project_show_cash">

              <div className="card">

                <div className="card_header">
                  <div className="post_auth_info">
                    <div className="profile_image">
                      <Link to="/">
                        <img src="demo.png" alt="demo" />
                      </Link>
                    </div>
                    <div className="post_user_fet">
                      <Link href="profile-contributer.html" className="user_name">
                        Esther Howard
                      </Link>
                      <div className="post-features">
                        <i className="fas fa-user"></i> Public <span></span> 5 hours
                        ago
                      </div>
                    </div>
                  </div>
                  <div className="post_arrow">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M8 21V13H3L12 2L21 13H16V21H8ZM10 19H14V11H16.775L12 5.15L7.225 11H10V19Z"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M16 3L16 11L21 11L12 22L3 11L8 11L8 3L16 3ZM14 5L10 5L10 13L7.225 13L12 18.85L16.775 13L14 13L14 5Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="card_body">
                  <h4 className="card_title">
                    AI-driven Drug Discovery for Neurodegenerative Diseases
                  </h4>
                  <p className="card_text">
                    Developing an AI-driven platform to screen and identify
                    potential drug candidates for the treatment of
                    neurodegenerative diseases.
                  </p>
                  <a href="project-details.html"
                  >Learn more <i className="fas fa-arrow-right"></i
                  ></a>
                </div>

                <div className="card_footer">

                  <div className="project_resourse">
                    <button className="project_effective_button">
                      <img src="assets/img/liked1.svg" alt='demo' /> Like
                    </button>
                    <div className="project_reso_details">
                      <div className="likded_users">
                        <Link to="/">
                          <img src="assets/img/user-2.png" alt="user 2" />
                        </Link>
                        <Link to="/">
                          <img src="assets/img/user-3.png" alt="user 2" />
                        </Link>
                        <Link to="/">
                          <img src="assets/img/user-4.png" alt="user 2" />
                        </Link>
                      </div>
                      <p>and 312 peoples liked this post.</p>
                    </div>
                    <button className="project_effective_button">
                      <img src="assets/img/share.svg" alt='demo' /> Share
                    </button>
                  </div>

                  <div className="project_comment_features">
                    <button className="project_effective_button">
                      <img src="assets/img/comment.svg" alt='demo' /> Comment
                    </button>
                    <div className="post-features">
                      <Link to="/">927 Comments</Link> <span></span>
                      <Link to="/">20 Shares</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ContributorProfile;