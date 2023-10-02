/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import { categoryOptions, durationOptions, languageOptions, requirdSkillCheckData, statusOptions, topFilterOptionsPage1, topicOptions } from '../data/filterData';
import SidebarFilters from './filter/SidebarFilters';
import TopFilterButtons from './filter/TopFilterButtons';

const ProjectFeed = () => {
  const [projects, setProjects] = useState([]);
  
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
        setFilteredProjects(data); 
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Top Filter
  const [selectedTopOption, setSelectedTopOption] = useState('latest');

  const handleTopOptionChange = (value) => {
    setSelectedTopOption(value);
  };

  // Sidebar Content
  const [filters, setFilters] = useState({
    search: '',
    selectedCategory: '',
    selectedTopic: '',
    selectedDuration: '',
    selectedRequiredSkills: [],
    selectedFundingStatus: '',
    selectedLanguage: '',
  });

  const handlePageChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <>
      <div className="project_show_wrapper">
        <SidebarFilters
          search={true}
          categories={categoryOptions}
          topic={topicOptions}
          duration={durationOptions}
          requiredSkills={true}
          fundingStatus={statusOptions}
          language={languageOptions}
          onPageChange={handlePageChange}
          requirdSkillCheckData={requirdSkillCheckData}
          filters={filters}
        />
        {/* project show container */}
        <div className="project_show_container">
          <TopFilterButtons options={topFilterOptionsPage1}
            selectedOption={selectedTopOption}
            onOptionChange={handleTopOptionChange} />
          {/* project show container */}
          <div className="project_show_cash">
            {/* Render project cards */}
            {filteredProjects.map((project) => (
              <div className="card" key={project.id}>
                {/* card header */}
                <div className="card_header">
                  <div className="post_auth_info">
                    <div className="profile_image">
                      <Link to="/profile-contributer">
                        <img src={project.profileImageUrl} alt="userProfile" />
                      </Link>
                    </div>
                    <div className="post_user_fet">
                      <Link to="/profile-contributer" className="user_name">
                        {project.author}
                      </Link>
                      <div className="post-features">
                        <i className="fas fa-user"></i> Friends <span></span> 5 hours ago
                      </div>
                    </div>
                  </div>
                  <div className="post_arrow">
                    <button type="button">
                      <BiUpvote />
                    </button>
                    <button>
                      <BiDownvote />
                    </button>
                  </div>
                </div>
                {/* card body */}
                <div className="card_body">
                  <h4 className="card_title">{project.projectName}</h4>
                  <p className="card_text">{project.projectDescription}</p>
                  <Link to="single-project">
                    Learn more <HiArrowNarrowRight />
                  </Link>
                </div>
                {/* card footer */}
                <div className="card_footer">
                  {/* project resource */}
                  <div className="project_resourse">
                    <button className="project_effective_button">
                      <AiOutlineLike /> Like
                    </button>
                    <div className="project_reso_details">
                      <div className="likded_users">
                        <Link to="/">
                          <img src={project.profileImageUrl} alt={`userImage`} />
                        </Link>
                        <Link to="/">
                          <img src={project.profileImageUrl} alt={`userImage`} />
                        </Link>
                        <Link to="/">
                          <img src={project.profileImageUrl} alt={`userImage`} />
                        </Link>
                      </div>
                      <p>and {project.likesCount} people liked this post.</p>
                    </div>
                    <button className="project_effective_button">
                      <RiShareForwardFill /> Share
                    </button>
                  </div>
                  {/* comment features */}
                  <div className="project_comment_features">
                    <button className="project_effective_button">
                      <FaRegCommentDots /> Comment
                    </button>
                    <div className="post-features">
                      <Link to="/">{project.commentsCount} Comments</Link> <span></span>
                      <Link to="/">{project.sharesCount} Shares</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </>
  );
};

export default ProjectFeed;