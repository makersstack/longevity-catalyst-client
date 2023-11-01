/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { FaRegCommentDots, FaUserAlt } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { categoryOptions, durationOptions, languageOptions, requirdSkillCheckData, statusOptions, topFilterOptionsPage1, topicOptions } from '../data/filterData';

import SidebarFilters from './filter/SidebarFilters';
import TopFilterButtons from './filter/TopFilterButtons';

const ProjectFeed = () => {
  const navigation = useNavigate();

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
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
  function filterProjects(filters, projects) {
    const {
      search,
      selectedCategory,
      selectedTopic,
      selectedDuration,
      selectedRequiredSkills,
      selectedFundingStatus,
      selectedLanguage,
    } = filters;
  
    return projects.filter((project) => {
      // Debug statements to check values
      // console.log('Search:', search);
      // console.log('Project Name:', project.projectName.toLowerCase());
      // Apply your filter logic here based on the filter criteria
      // For example, you can use if statements to check each filter
      if (search && !project.projectName.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
  
      if (selectedCategory && project.category !== selectedCategory) {
        return false;
      }
  
      return true; 
    });
  }
  const [filters, setFilters] = useState({
    search: '',
    selectedCategory: '',
    selectedTopic: '',
    selectedDuration: '',
    selectedRequiredSkills: [],
    selectedFundingStatus: '',
    selectedLanguage: '',
  });
  
  useEffect(() => {
   
    const filtered = filterProjects(filters, projects);
    setFilteredProjects(filtered);
  
  }, [filters, projects]);
  
  const handlePageChange = (filterType, value) => {
    console.log('onPageChange called with:', filterType, value);
  
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  
    setFilteredProjects((prevFilteredProjects) => {
      return filterProjects(
        {
          ...prevFilteredProjects, 
          [filterType]: value,
        },
        prevFilteredProjects
      );
    });
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
                      <button onClick={() => navigation(`/user/${project.author}`)}>
                        <img src={project.profileImageUrl} alt="userProfile" />
                      </button>
                    </div>
                    <div className="post_user_fet">
                      <button onClick={() => navigation(`/user/${project.author}`)} className="user_name">
                        {project.author}
                      </button>
                      <div className="post-features">
                        <FaUserAlt /> Friends <span></span> 5 hours ago
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
                  <p className="card_text">
                    {project.projectDescription}
                    </p>
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
            <div className="project_show_footer">
              <button type='button' className='btn btn_show_more'>
                Load More
              </button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default ProjectFeed;