import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDownvote, BiSolidBadge, BiUpvote } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import { FaAward, FaRegCommentDots } from 'react-icons/fa';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import UserProfile from '../assets/images/user-1.png';
import SidebarFilters from './filter/SidebarFilters';
import TopFilterButtons from './filter/TopFilterButtons';

const topFilterOptionsPage1 = [
  { label: 'Latest', icon: <BiSolidBadge />, value: 'latest' },
  { label: 'Most View', icon: <BsEye />, value: 'mostView' },
  { label: 'Top', icon: <FaAward />, value: 'top' },
  { label: 'Rising', icon: <FaArrowTrendUp />, value: 'rising' },
];

const ProjectFeed = () => {
  const [selectedTopOption, setSelectedTopOption] = useState('latest');

  const handleTopOptionChange = (value) => {
    setSelectedTopOption(value);
  };

  return (
    <>
      <div className="project_show_wrapper">
        <SidebarFilters  />
        {/* project show container */}
        <div className="project_show_container">
          <TopFilterButtons options={topFilterOptionsPage1}
          selectedOption={selectedTopOption}
          onOptionChange={handleTopOptionChange} />
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
                <Link to="single-project">
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
                <Link to="single-project">
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
                <Link to="single-project">
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