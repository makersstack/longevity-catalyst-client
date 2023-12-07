/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiSolidUpvote } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { projectApi } from '../api';
import '../assets/styles/profileShow.css';
import ImageTagWithFallback from '../components/common/ImageTagWithFallback';
import SidebarFilters from '../components/filter/SidebarFilters';
import TopFilterButtons from '../components/filter/TopFilterButtons';
import ProjectCard from '../components/project/ProjectCard';
import Loader from '../components/ui/Loader';
import { avatersFor } from '../constants/avaters';
import { categoryOptions, durationOptions, languageOptions, requirdSkillCheckData, statusOptions, topFilterOptionsByUser, topicOptions } from '../data/filterData';
import useLoading from '../hooks/useLoading';
import ScrollToTop from '../utils/RouteChange';

const ProfileShow = ({ rating }) => {
  useEffect(() => {
    document.title = 'Profile - Longevity Catalyst';
  }, []);
  ScrollToTop();
  const { isLoading, setIsLoading } = useLoading();
  const { username } = useParams();

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [userInformatin, setUserInformatin] = useState([]);


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
  }, [setIsLoading, username]);


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
            {isLoading ? (
              <Loader />
            ) : (


              <div className="project_show_container">
                <div className="profile_user_info other_profile">
                  <div className="image_block">
                    <ImageTagWithFallback src={avatarSrc} fallbackSrc={avatersFor.user} alt={userInformatin?.full_name} />
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
                      <ProjectCard key={project.id} project={project} />
                    ))
                  ) : (
                    <p>No projects found</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileShow