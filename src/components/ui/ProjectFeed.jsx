/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { FaRegCommentDots, FaUserAlt } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { categoryOptions, durationOptions, languageOptions, requirdSkillCheckData, statusOptions, topFilterOptionsPage1, topicOptions } from '../../data/filterData';



import '../../assets/styles/projectFeed.css';

import { projectApi } from '../../api';

import { avatersFor } from '../../constants/avaters';
import dateTimeHel from '../../utils/dateTimeHel';
import LikeButton from '../LikeShare/LikeButton';
import SidebarFilters from '../filter/SidebarFilters';
import TopFilterButtons from '../filter/TopFilterButtons';
import SocailModal from './SocailModal';


const ProjectFeed = () => {
  const navigation = useNavigate();

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  const [isSideBarActive, setSideBarActive] = useState(false);

  // Top Filter
  const [selectedTopOption, setSelectedTopOption] = useState('latest');

  const handleTopOptionChange = (value) => {
    setSelectedTopOption(value);
  };

  // useEffect(() => {
  //   fetch('/data.json')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProjects(data);
  //       setFilteredProjects(data); 
  //     })
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await projectApi.getAllProjects();
        const projectsData = response?.data?.data || [];
        setProjects(projectsData); // Set projects state with the extracted data
        setFilteredProjects(projectsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []);

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
      // Apply your filter logic here based on the filter criteria
      // For example, you can use if statements to check each filter
      if (search && !project.project_name.toLowerCase().includes(search.toLowerCase())) {
        console.log(search);
        return false;
      }

      if (selectedCategory && project.project_keywords !== selectedCategory) {
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

    if (filterType !== 'textsearch') {
      setSideBarActive(!isSideBarActive);
    }

  };
  // For modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const postLink = "http://localhost:3000/single-project";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  // for Side bar
  const sideBarRef = useRef();
  const handelSideBarButton = (e) => {
    e.preventDefault();
    setSideBarActive(!isSideBarActive);
  }

  useEffect(() => {
    if (isSideBarActive) {
      document.body.classList.add('sitebaractivebody');
    } else {
      document.body.classList.remove('sitebaractivebody');
    }
  }, [isSideBarActive]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setSideBarActive(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sideBarRef]);

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
          isSideBarActive={isSideBarActive}
          handelSideBarButton={handelSideBarButton}
          sideBarRef={sideBarRef}
        />
        {/* project show container */}
        <div className="project_show_container">
          <TopFilterButtons options={topFilterOptionsPage1}
            selectedOption={selectedTopOption}
            onOptionChange={handleTopOptionChange}
            handelSideBarButton={handelSideBarButton}
          />
          {/* project show container */}
          <div className="project_show_cash">
            {/* Render project cards */}
            {filteredProjects.map((project) => (
              <div className="card" key={project.id}>
                {/* card header */}
                <div className="card_header">
                  <div className="post_auth_info">
                    <div className="profile_image">
                      <button onClick={() => navigation(`${project?.User?.username}`)}>
                        <img src={project?.User?.profileImage || avatersFor.user} alt={project?.User?.username} />
                      </button>
                    </div>
                    <div className="post_user_fet">
                      <button onClick={() => navigation(`${project?.User?.username}`)} className="user_name">
                        {project?.User?.full_name}
                      </button>
                      <div className="post-features">
                        <FaUserAlt /> Friends <span></span> {dateTimeHel.calculateDurationFromNow(project.createdAt)}
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
                  <Link to={`/project/${project.id}`}>
                    <h4 className="card_title">{project.project_name}</h4>
                  </Link>
                  <p className="card_text">
                    {project.project_desc}
                  </p>

                  <Link to={`/project/${project.id}`} className='al_project_learn_more'>
                    Learn more <HiArrowNarrowRight />
                  </Link>
                </div>
                {/* card footer */}
                <div className="card_footer">
                  {/* project resource */}
                  <div className="project_resourse">
                    <LikeButton projectId={2} userId={2} />
                    <div className="project_reso_details">
                      <div className="likded_users">
                        <Link to="/">
                          <img src={avatersFor.user} alt={`userImage`} />
                        </Link>
                        <Link to="/">
                          <img src={avatersFor.user} alt={`userImage`} />
                        </Link>
                        <Link to="/">
                          <img src={avatersFor.user} alt={`userImage`} />
                        </Link>
                      </div>
                      <p>and {project.likesCount} people liked this post.</p>
                    </div>

                    {/* For Share */}
                    <SocailModal isOpen={isModalOpen} closeModal={closeModal} postLink={postLink} />
                    <button className="project_effective_button" onClick={openModal}>
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