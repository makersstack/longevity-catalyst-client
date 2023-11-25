/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiDownvote, BiSolidUpvote, BiUpvote } from 'react-icons/bi';
import { FaRegCommentDots, FaUserAlt } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projectApi } from '../api';
import '../assets/styles/profileShow.css';
import LikeButton from '../components/LikeShare/LikeButton';
import SidebarFilters from '../components/filter/SidebarFilters';
import TopFilterButtons from '../components/filter/TopFilterButtons';
import { avatersFor } from '../constants/avaters';
import { categoryOptions, durationOptions, languageOptions, requirdSkillCheckData, statusOptions, topFilterOptionsByUser, topicOptions } from '../data/filterData';
import ScrollToTop from '../utils/RouteChange';
import dateTimeHel from '../utils/dateTimeHel';

const ProfileShow = ({ rating }) => {
  ScrollToTop();

  const { username } = useParams()
  const navigation = useNavigate();

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [userInformatin, setUserInformatin] = useState([]);

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await projectApi.getAllProjectsByUsername(username);
        if (response?.data?.success) {
          const projectsData = response?.data?.data || [];
          setProjects(projectsData);
          setFilteredProjects(projectsData);
          projectsData.forEach(project => {
            const user = project.User;
            setUserInformatin(user);
          });
        } else {
          // navigation('/404');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, [username]);


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
  const avatarSrc = userInformatin?.profileImage || avatersFor.user;

  return (
    <>
      <section className="project_show_section single_page_project_show">
        <div className="container">
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
              <div className="profile_user_info other_profile">
                <div className="image_block">
                  <img src={avatarSrc} alt="userProfile" />
                </div>
                <div className="info_block">
                  <h3>{userInformatin?.full_name}</h3>
                  <div className="user_title">{userInformatin?.bio}</div>
                  <div className="profile_info_ratings">
                    <span><AiFillStar /></span>
                    <span><AiFillStar /></span>
                    <span><AiFillStar /></span>
                    <span><AiFillStar /></span>
                    <span><AiOutlineStar /></span>
                  </div>
                  <p className='vote_count'><BiSolidUpvote /> 5 Upvoted</p>
                </div>
              </div>
              <TopFilterButtons options={topFilterOptionsByUser}
                selectedOption={selectedTopOption}
                onOptionChange={handleTopOptionChange} />
              {/* project show container */}
              <div className="project_show_cash">

                {filteredProjects.length !== 0 ? (
                  filteredProjects.map((project) => (
                    <div className="card" key={project.id}>
                      {/* card header */}
                      <div className="card_header">
                        <div className="post_auth_info">
                          <div className="profile_image">
                            <button onClick={() => navigation(`/${project?.User?.username}`)}>
                              <img src={project?.User?.profileImage || avatersFor.user} alt={project?.User?.username} />

                            </button>
                          </div>
                          <div className="post_user_fet">
                            <button onClick={() => navigation(`/${project?.User?.username}`)} className="user_name">
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
                  ))

                ) : (
                  <p>No projects found.</p>
                )}

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileShow;