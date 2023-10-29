import React from 'react';
import { BsCheckSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import UserProfileImage from '../assets/images/user-1.png';
import '../assets/styles/projectDetails.css';
import CommentBox from '../components/comment/CommentBox';
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
               
                </div>
              </div>
              {/* project details outer box  */}
              <div className="project_outer_box">
                {/* pin box  */}
               

                {/* comment box  */}
                <div className="details_block">
                  <CommentBox />
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="project_side_ber_container">
              <div className="project_side_bar side_ber_style_2">
                <form action="/" method="post">
                  <div className="input_box">
                    <h4> Affiliation : </h4>

                    <div className="input_box_keywords">
                      <p className='show_ct'>MIT</p>
                    </div>
                  </div>

                  <div className="input_box">
                    <h4> Keywords : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>Drug discovery</p>
                      <p className='show_ct'>Artificial Intelligence</p>
                      <p className='show_ct'>Neurodegenerative diseases</p>
                      <p className='show_ct'>Machine Learning</p>
                      <p className='show_ct'>Molecular Modeling</p>
                    </div>
                  </div>

                  <div className="input_box">
                    <h4> Onsite Requirement : </h4>

                    <div className="input_box_keywords">
                      <p className='show_ct'>N/A</p>
                    </div>
                  </div>

                  <div className="input_box">
                    <h4>Project Type : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>Team</p>
                    </div>
                  </div>

                  <div className="input_box">
                    <h4>Member Needed : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>3-4</p>
                    </div>
                  </div>

                  <div className="input_box">
                    <h4>Primary Category : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>AI- driven Drug Discovery</p>
                    </div>
                  </div>

                  <div className="input_box required_skills">
                    <h4> Required Skills </h4>
                    <div className="required_skills_tags">
                      <div className="required_skill_single">
                        <BsCheckSquare />
                        <p>Python</p>
                      </div>
                      <div className="required_skill_single">
                        <BsCheckSquare />
                        <p>Machine learning</p>
                      </div>
                      <div className="required_skill_single">
                        <BsCheckSquare />
                        <p>Molecular modeling</p>
                      </div>
                      <div className="required_skill_single">
                        <BsCheckSquare />
                        <p>Cheminformatics</p>
                      </div>
                      <div className="required_skill_single">
                        <BsCheckSquare />
                        <p>Machine learning</p>
                      </div>
                      <div className="required_skill_single">
                        <BsCheckSquare />
                        <p>Pharmacology</p>
                      </div>
                    </div>
                  </div>

                  <div className="input_box">
                    <h4>Deadline : </h4>

                    <div className="input_box_keywords">
                      <p className='show_ct'>Flexible</p>
                    </div>
                  </div>
                  <div className="input_box">
                    <h4>Expected Duration : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>4-6 Months</p>
                    </div>
                  </div>
                  <div className="input_box">
                    <h4>Time to Start : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>May 1, 2023</p>
                    </div>
                  </div>
                  <div className="input_box">
                    <h4>Project Submitted :</h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>Jun 27, 2023</p>
                    </div>
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