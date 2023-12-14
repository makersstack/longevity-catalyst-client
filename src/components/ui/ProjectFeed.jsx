/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { categoryOptions, durationOptions, languageOptions, requirdSkillCheckData, statusOptions, topFilterOptionsPage1, topicOptions } from '../../data/filterData';

import '../../assets/styles/projectFeed.css';

import { projectApi } from '../../api';

import SidebarFilters from '../filter/SidebarFilters';
import TopFilterButtons from '../filter/TopFilterButtons';
import ProjectCard from '../project/ProjectCard';


const ProjectFeed = () => {

  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  const [page, setPage] = useState(1);
  const [isSideBarActive, setSideBarActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  // Top Filter
  const [selectedTopOption, setSelectedTopOption] = useState('latest');

  const handleTopOptionChange = (value) => {
    setSelectedTopOption(value);
  };

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
        const response = await projectApi.getAllProjects(filters, paginationOptions);

        const projectsData = response?.data?.data || [];
        setProjects(projectsData);

        setFilteredProjects(projectsData);

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
  }, [filters, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
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
      if (selectedCategory && project.project_keywords !== selectedCategory) {
        console.log(selectedCategory);
      }
      return true;
    });
  }

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

    if (filterType !== 'searchTerm') {
      setSideBarActive(!isSideBarActive);
    }
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
              <ProjectCard key={project.id} project={project} />
            ))}
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <button onClick={handleLoadMore} className='btn btn-dark' disabled={isLoading}>
                Load More
              </button>
            )}
          </div>

        </div>

      </div>
    </>
  );
};

export default ProjectFeed;