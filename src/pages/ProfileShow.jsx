/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiSolidUpvote } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { projectApi } from '../api';
import '../assets/styles/profileShow.css';
import ImageTagWithFallback from '../components/common/ImageTagWithFallback';
import SidebarFilters from '../components/filter/SidebarFilters';
import TopFilterButtons from '../components/filter/TopFilterButtons';
import ProjectCard from '../components/project/ProjectCard';
import ProjectCardSkeleton from '../components/project/ProjectCardSkeleton';
import { avatersFor } from '../constants/avaters';
import { requirdSkillCheckData, topFilterOptionsByUser, topicOptions } from '../data/filterData';
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
  const [page, setPage] = useState(1);
  const [isSideBarActive, setSideBarActive] = useState(false);
  const [moreCount, setMoreCount] = useState(0);
  const [totalProjecs, setTotalProjecs] = useState(0);

  const [filters, setFilters] = useState({
    search: '',
    textsearch: '',
    selectedCategory: '',
    selectedTopic: '',
    selectedDuration: '',
    selectedRequiredSkills: [],
    selectedFundingStatus: '',
    selectedLanguage: '',
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const paginationOptions = {
          page,
          limit: 5,
        };
        const response = await projectApi.getAllProjectsByUsername(username, filters, paginationOptions);
        const projectsData = response?.data?.data || [];
        const resSt = response?.data;
        if (resSt?.success) {
          const newProjects = response.data.data || [];

          if (page === 1) {
            setProjects(projectsData);
            setFilteredProjects(projectsData);
          } else {
            setProjects((prevProjects) => [...prevProjects, ...newProjects]);
            setFilteredProjects((prevProjects) => [...prevProjects, ...newProjects]);

          }

          const totalPr = response.data.meta.total;
          setTotalProjecs(totalPr);
        }

        projectsData.forEach(project => {
          const user = project.User;
          setUserInformatin(user);
        });

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [filters, page, username, setIsLoading]);

  useEffect(() => {
    setMoreCount(totalProjecs - projects.length);

  }, [totalProjecs, projects])
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
      if (search && !project.projectName.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }

      if (selectedCategory && project.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }


  useEffect(() => {
    setPage(1);
    setProjects([]);
    setFilteredProjects([]);
    setMoreCount(0);
  }, [filters]);

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
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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


  const avatarSrc = userInformatin?.profileImage || avatersFor.user;

  return (
    <>
      <section className="project_show_section single_page_project_show">
        <div className="container">
          <div className="project_show_wrapper">
            <SidebarFilters
              search={true}
              categories={true}
              topic={topicOptions}
              duration={true}
              requiredSkills={true}
              fundingStatus={true}
              language={true}
              onPageChange={handlePageChange}
              requirdSkillCheckData={requirdSkillCheckData}
              filters={filters}
              isSideBarActive={isSideBarActive}
              handelSideBarButton={handelSideBarButton}
              sideBarRef={sideBarRef}
            />
            {/* project show container */}
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
                {filteredProjects.length !== 0 && (
                  filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                )}

                {!isLoading && filteredProjects.length === 0 && (
                  <p>No projects found</p>
                )}

                {isLoading ? (
                  <>
                    {[1, 2, 3].map((item) => (
                      <ProjectCardSkeleton key={item} />
                    ))}
                  </>

                ) : (
                  moreCount > 0 && (
                    <button onClick={handleLoadMore} className='btn btn-dark' disabled={isLoading}>
                      Load More
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileShow