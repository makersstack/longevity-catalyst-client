import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDownvote, BiSolidBadge, BiUpvote } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { FaAward, FaRegCommentDots } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import UserProfile from '../assets/images/user-1.png';

const ProjectFeed = () => {
  return (
    <>
      <div className="project_show_wrapper">
        {/* project side bar filter */}
        <div className="project_side_ber_container">
          <div className="project_side_bar">
            <form action="/" method="post">
              {/* Project Name  */}
              <div className="input_box">
                <label for="se-p">Search Project</label>
                <input id="se-p" type="text" placeholder="Project Name" />
              </div>
              {/* Categories */}
              <div className="input_box">
                <label for="p-categories">Categories</label>
                <select name="p-categories" id="p-categories">
                  <option value="">Select Categories</option>
                  <option value="">project 1</option>
                  <option value="">project 2</option>
                  <option value="">project 3</option>
                </select>
              </div>
              {/* Topic */}
              <div className="input_box">
                <label> Topic </label>

                <label className="plan basic-plan" for="opt1">
                  <input checked="" type="radio" name="plan" id="opt1" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>1-25</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="opt2">
                  <input type="radio" name="plan" id="opt2" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>1-25</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="opt3">
                  <input type="radio" name="plan" id="opt3" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>51-100</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="opt4">
                  <input type="radio" name="plan" id="opt4" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>College Students</p>
                    </div>
                  </div>
                </label>
              </div>
              {/* Duration  */}
              <div className="input_box">
                <label for="p-categories">Duration</label>
                <select name="p-dura" id="p-dura">
                  <option value="">Select Role</option>
                  <option value="">option 1</option>
                  <option value="">option 2</option>
                  <option value="">option 3</option>
                </select>
              </div>
              {/* Required Skills */}
              <div className="input_box required_skills">
                <label> Required Skills </label>

                <label className="plan basic-plan" for="sk-opt1">
                  <input type="checkbox" name="skill" id="sk-opt1" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Python</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="sk-opt2">
                  <input type="checkbox" checked name="skill" id="sk-opt2" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Machine learning</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="sk-opt3">
                  <input type="checkbox" name="skill" id="sk-opt3" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Molecular modeling</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="sk-opt4">
                  <input type="checkbox" name="skill" id="sk-opt4" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Cheminformatics</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="sk-opt5">
                  <input type="checkbox" name="skill" id="sk-opt5" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <div className="plan-checked-icon">
                        <i className="check_icon fas fa-check"></i>
                      </div>
                      <p>Pharmacology</p>
                    </div>
                  </div>
                </label>
              </div>
              {/* Funding Status */}
              <div className="input_box">
                <label> Funding Status </label>

                <label className="plan basic-plan" for="st-opt1">
                  <input checked="" type="radio" name="status" id="st-opt1" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>30 days</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="st-opt2">
                  <input type="radio" name="status" id="st-opt2" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>60 days</p>
                    </div>
                  </div>
                </label>

                <label className="plan basic-plan" for="st-opt3">
                  <input type="radio" name="status" id="st-opt3" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>90 days</p>
                    </div>
                  </div>
                </label>
                <label className="plan basic-plan" for="st-opt4">
                  <input type="radio" name="status" id="st-opt4" />
                  <div className="plan-content">
                    <div className="plan-details">
                      <p>No Contract</p>
                    </div>
                  </div>
                </label>
              </div>
              {/* Language */}
              <div className="input_box">
                <label for="Language">Language</label>
                <select name="Language" id="Language">
                  <option value="">Language</option>
                  <option value="">Language 1</option>
                  <option value="">Language 2</option>
                  <option value="">Language 3</option>
                </select>
              </div>

            </form>
          </div>
        </div>
        {/* project show container */}
        <div className="project_show_container">
          {/* project short filter */}
          <div className="project_short_filter">
            <button className="short_filter_button active">
              <BiSolidBadge />
              Latest
            </button>
            <button className="short_filter_button">
              <BsEye />
              Most View
            </button>
            <button className="short_filter_button">
              <FaAward />
              Top
            </button>
            <button className="short_filter_button">
              <FaArrowTrendUp />
              Rising
            </button>
          </div>
          {/* project show area  */}
          <div className="project_show_cash">
            {/* single project card */}
            <div className="card">
              {/* card header */}
              <div className="card_header">
                <div className="post_auth_info">
                  <div className="profile_image">
                    <Link to='/profile-contributer'>
                      <img src={UserProfile} alt="userProfile" />
                    </Link>
                  </div>
                  <div className="post_user_fet">
                    <Link to="/profile-contributer" className="user_name">
                      Esther Howard
                    </Link>
                    <div className="post-features">
                      <i className="fas fa-user"></i> Friends <span></span> 5
                      hours ago
                    </div>
                  </div>
                </div>
                <div className="post_arrow">
                  <button type='button'>
                    <BiUpvote />
                  </button>
                  <button>
                    <BiDownvote />
                  </button>
                </div>
              </div>
              {/* card body */}
              <div className="card_body">
                <h4 className="card_title">
                  AI-driven Drug Discovery for Neurodegenerative Diseases
                </h4>
                <p className="card_text">
                  Developing an AI-driven platform to screen and identify
                  potential drug candidates for the treatment of
                  neurodegenerative diseases.
                </p>
                <Link to="sign-up/single-project">
                  Learn more <HiArrowNarrowRight />
                </Link>
              </div>
              {/* card footer  */}
              <div className="card_footer">
                {/* project resourse   */}
                <div className="project_resourse">
                  <button className="project_effective_button">
                    <AiOutlineLike /> Like
                  </button>
                  <div className="project_reso_details">
                    <div className="likded_users">
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                    </div>
                    <p>and 312 peoples liked this post.</p>
                  </div>
                  <button className="project_effective_button">
                    <RiShareForwardFill /> Share
                  </button>
                </div>
                {/* comment features   */}
                <div className="project_comment_features">
                  <button className="project_effective_button">
                    <FaRegCommentDots /> Comment
                  </button>
                  <div className="post-features">
                    <Link to='/'>927 Comments</Link> <span></span>
                    <Link to='/'>20 Shares</Link>
                  </div>
                </div>

              </div>

            </div>

            {/* single project card */}
            <div className="card">
              {/* card header */}
              <div className="card_header">
                <div className="post_auth_info">
                  <div className="profile_image">
                    <Link to='/profile-contributer'>
                      <img src={UserProfile} alt="userProfile" />
                    </Link>
                  </div>
                  <div className="post_user_fet">
                    <Link to="/profile-contributer" className="user_name">
                      Esther Howard
                    </Link>
                    <div className="post-features">
                      <i className="fas fa-user"></i> Friends <span></span> 5
                      hours ago
                    </div>
                  </div>
                </div>
                <div className="post_arrow">
                  <button type='button'>
                    <BiUpvote />
                  </button>
                  <button>
                    <BiDownvote />
                  </button>
                </div>
              </div>
              {/* card body */}
              <div className="card_body">
                <h4 className="card_title">
                  AI-driven Drug Discovery for Neurodegenerative Diseases
                </h4>
                <p className="card_text">
                  Developing an AI-driven platform to screen and identify
                  potential drug candidates for the treatment of
                  neurodegenerative diseases.
                </p>
                <Link to="sign-up/single-project">
                  Learn more <HiArrowNarrowRight />
                </Link>
              </div>
              {/* card footer  */}
              <div className="card_footer">
                {/* project resourse   */}
                <div className="project_resourse">
                  <button className="project_effective_button">
                    <AiOutlineLike /> Like
                  </button>
                  <div className="project_reso_details">
                    <div className="likded_users">
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                    </div>
                    <p>and 312 peoples liked this post.</p>
                  </div>
                  <button className="project_effective_button">
                    <RiShareForwardFill /> Share
                  </button>
                </div>
                {/* comment features   */}
                <div className="project_comment_features">
                  <button className="project_effective_button">
                    <FaRegCommentDots /> Comment
                  </button>
                  <div className="post-features">
                    <Link to='/'>927 Comments</Link> <span></span>
                    <Link to='/'>20 Shares</Link>
                  </div>
                </div>

              </div>

            </div>
            
            {/* single project card */}
            <div className="card">
              {/* card header */}
              <div className="card_header">
                <div className="post_auth_info">
                  <div className="profile_image">
                    <Link to='/profile-contributer'>
                      <img src={UserProfile} alt="userProfile" />
                    </Link>
                  </div>
                  <div className="post_user_fet">
                    <Link to="/profile-contributer" className="user_name">
                      Esther Howard
                    </Link>
                    <div className="post-features">
                      <i className="fas fa-user"></i> Friends <span></span> 5
                      hours ago
                    </div>
                  </div>
                </div>
                <div className="post_arrow">
                  <button type='button'>
                    <BiUpvote />
                  </button>
                  <button>
                    <BiDownvote />
                  </button>
                </div>
              </div>
              {/* card body */}
              <div className="card_body">
                <h4 className="card_title">
                  AI-driven Drug Discovery for Neurodegenerative Diseases
                </h4>
                <p className="card_text">
                  Developing an AI-driven platform to screen and identify
                  potential drug candidates for the treatment of
                  neurodegenerative diseases.
                </p>
                <Link to="sign-up/single-project">
                  Learn more <HiArrowNarrowRight />
                </Link>
              </div>
              {/* card footer  */}
              <div className="card_footer">
                {/* project resourse   */}
                <div className="project_resourse">
                  <button className="project_effective_button">
                    <AiOutlineLike /> Like
                  </button>
                  <div className="project_reso_details">
                    <div className="likded_users">
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                      <Link to="/">
                        <img src={UserProfile} alt="user2"
                        />
                      </Link>
                    </div>
                    <p>and 312 peoples liked this post.</p>
                  </div>
                  <button className="project_effective_button">
                    <RiShareForwardFill /> Share
                  </button>
                </div>
                {/* comment features   */}
                <div className="project_comment_features">
                  <button className="project_effective_button">
                    <FaRegCommentDots /> Comment
                  </button>
                  <div className="post-features">
                    <Link to='/'>927 Comments</Link> <span></span>
                    <Link to='/'>20 Shares</Link>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default ProjectFeed;