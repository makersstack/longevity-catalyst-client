import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import UserProfileImage from '../assets/images/user-1.png';
import Comment from '../components/postProject/Comment';
import PinBox from '../components/postProject/PinBox';
const ProjectDetails = () => {
  return (
    <div>
      {/* ST:- project details section */}
      <section className="full_widht_project_details_area section_padding">
        <div className="container">
          <div className="project_details_wrapper">
            {/* Project left show box  */}
            <div className="project_show_left_box">
              {/* show details content */}
              <div className="show_project_details">
                {/* project head */}
                <div className="project_details_head">
                  <span className="project_time">27 April 2023</span>
                  <div className="post_auth_info">
                    <div className="profile_image">
                      <Link to="/user/Esther Howard">
                        <img src={UserProfileImage} alt="userImage" />
                      </Link>
                    </div>
                    <div className="post_user_fet">
                      <a href="/user/Esther Howard" className="user_name"
                      >Esther Howard</a
                      >
                      <div className="user_title">Product Designer</div>
                    </div>
                  </div>
                  <h2>AI-driven Drug Discovery for Neurodegenerative Diseases</h2>
                  <p>
                    Developing an AI-driven platform to screen and identify
                    potential drug candidates for the treatment of neurodegenerative
                    diseases.
                  </p>
                  <Link to="/" className="btn btn-light head_btn">Schedule a Meeting</Link>
                </div>
                {/* project details show */}
                <div className="project_details_show">
                  {/* single block */}
                  <div className="details_block">
                    <h5 className="block_title">Experience Required :</h5>
                    <p>
                      Advanced: Has extensive experience and a deep understanding of
                      the skills required, can handle complex tasks and mentor
                      others.
                    </p>
                  </div>
                  {/* single block */}
                  <div className="details_block">
                    <h5 className="block_title">Experience Required :</h5>
                    <ul>
                      <li>
                        A comprehensive report on the AI-driven platform and its
                        performance in identifying potential drug candidates
                      </li>
                      <li>
                        A ranked list of drug candidates with predicted efficacy and
                        safety profiles
                      </li>
                      <li>
                        Molecular models and interaction diagrams for the top drug
                        candidates
                      </li>
                      <li>
                        Well-documented code for the AI-driven platform, including
                        training and validation data
                      </li>
                      <li>
                        A proposed plan for experimental validation of the top drug
                        candidates
                      </li>
                    </ul>
                  </div>
                  {/* single block */}
                  <div className="details_block">
                    <h5 className="block_title">Links to Relevant date :</h5>
                    <ul>
                      <li>
                        <Link to="/">https://www.exampledata.com</Link>
                      </li>
                    </ul>
                  </div>
                  {/* single block */}
                  <div className="details_block">
                    <h5 className="block_title">Links to Relevant Literature :</h5>
                    <ul>
                      <li>
                        <Link to="/">https://www.relevantliterature.com</Link>
                      </li>
                      <li>
                        <Link to="/">https://www.longevityresearch.com</Link>
                      </li>
                    </ul>
                  </div>
                  {/* single block */}
                  <div className="details_block">
                    <h5 className="block_title">Additional Information :</h5>
                    <p>
                      Collaboration with our research team via regular meetings and
                      progress updates is required. Experience with experimental
                      validation of drug candidates is a plus.
                    </p>
                  </div>
                  {/* single block add comment button  */}
                  <div className="details_block">
                    <button className="btn btn-light add_comment_btn">
                      <AiOutlinePlus />
                      Add Comment
                    </button>
                  </div>
                </div>
              </div>
              {/* project details outer box  */}
              <div className="project_outer_box">
                {/* pin box  */}
                <div className="details_block">
                  <PinBox />
                </div>

                {/* comment box  */}
                <div className="details_block">
                  <Comment/>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="project_side_ber_container">
              <div className="project_side_bar side_ber_style_2">
                <form action="/" method="post">
                  <div className="input_box">
                    <label> Affiliation : </label>

                    <label className="plan plan-button plan-button-colors" htmlFor="opt1">
                      <input type="checkbox" name="plan" id="opt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>MIT</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box">
                    <label> Keywords : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="kopt1"
                    >
                      <input type="checkbox" name="plan" id="kopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>Drug discovery</p>
                        </div>
                      </div>
                    </label>
                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="kopt2"
                    >
                      <input type="checkbox" name="plan" id="kopt2" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>Artificial Intelligence</p>
                        </div>
                      </div>
                    </label>
                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="kopt3"
                    >
                      <input type="checkbox" name="plan" id="kopt3" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>Neurodegenerative diseases</p>
                        </div>
                      </div>
                    </label>
                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="kopt4"
                    >
                      <input defaultChecked type="checkbox" name="plan" id="kopt4" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>Machine Learning</p>
                        </div>
                      </div>
                    </label>
                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="kopt5"
                    >
                      <input type="checkbox" name="plan" id="kopt5" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>Molecular Modeling</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box">
                    <label> Onsite Requirement : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="onopt1"
                    >
                      <input type="checkbox" name="plan" id="onopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>N/A</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box">
                    <label>Project Type : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="ptopt1"
                    >
                      <input type="checkbox" name="plan" id="ptopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>Team</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box">
                    <label>Member Needed : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="mnopt1"
                    >
                      <input type="checkbox" name="plan" id="mnopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>3-4</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box">
                    <label>Primary Category : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="pcopt1"
                    >
                      <input type="checkbox" name="plan" id="pcopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>AI- driven Drug Discovery</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box required_skills">
                    <label> Required Skills </label>

                    <label className="plan plan-button-colors" htmlFor="sk-opt1">
                      <input type="checkbox" name="skill" id="sk-opt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <div className="plan-defaultChecked-icon">
                            <i className="check_icon fas fa-check"></i>
                          </div>
                          <p>Python</p>
                        </div>
                      </div>
                    </label>

                    <label className="plan plan-button-colors" htmlFor="sk-opt2">
                      <input
                        type="checkbox"
                        defaultChecked=""
                        name="skill"
                        id="sk-opt2"
                      />
                      <div className="plan-content">
                        <div className="plan-details">
                          <div className="plan-defaultChecked-icon">
                            <i className="check_icon fas fa-check"></i>
                          </div>
                          <p>Machine learning</p>
                        </div>
                      </div>
                    </label>

                    <label className="plan plan-button-colors" htmlFor="sk-opt3">
                      <input type="checkbox" name="skill" id="sk-opt3" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <div className="plan-defaultChecked-icon">
                            <i className="check_icon fas fa-check"></i>
                          </div>
                          <p>Molecular modeling</p>
                        </div>
                      </div>
                    </label>
                    <label className="plan plan-button-colors" htmlFor="sk-opt4">
                      <input type="checkbox" name="skill" id="sk-opt4" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <div className="plan-defaultChecked-icon">
                            <i className="check_icon fas fa-check"></i>
                          </div>
                          <p>Cheminformatics</p>
                        </div>
                      </div>
                    </label>
                    <label className="plan plan-button-colors" htmlFor="sk-opt5">
                      <input type="checkbox" name="skill" id="sk-opt5" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <div className="plan-defaultChecked-icon">
                            <i className="check_icon fas fa-check"></i>
                          </div>
                          <p>Pharmacology</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box">
                    <label>Deadline : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="dlopt1"
                    >
                      <input type="checkbox" name="plan" id="dlopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>Flexible</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="input_box">
                    <label>Expected Duration : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="edlopt1"
                    >
                      <input type="checkbox" name="plan" id="edlopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>4-6 Months</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="input_box">
                    <label>Time to Start : </label>

                    <label
                      className="plan plan-button plan-button-colors"
                      htmlFor="tmsopt1"
                    >
                      <input type="checkbox" name="plan" id="tmsopt1" />
                      <div className="plan-content">
                        <div className="plan-details">
                          <p>May 1, 2023</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="input_box">
                    <p className="submited_date">Project Submutted April 27, 2023</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ED:- project details section */}
    </div>
  );
};

export default ProjectDetails;