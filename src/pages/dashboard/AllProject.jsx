/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { projectApi } from '../../api';
import '../../assets/styles/dashboard.css';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import useAuth from '../../hooks/UseAuth';
import ScrollToTop from '../../utils/RouteChange';
// import calculateDurationFromNow from '../../utils/durationCalculate';
import ProjectCard from '../../components/project/ProjectCard';
import ProjectCardSkeleton from '../../components/project/ProjectCardSkeleton';

const AllProject = () => {
    useEffect(() => {
        document.title = "My Projects - Longevity Catalyst";
    }, []);
    ScrollToTop();

    const { userInfo } = useAuth();
    const userName = userInfo?.username;

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isUserFound, setIsUserFound] = useState(false);
    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }
    // For Fetch Project By user
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [moreCount, setMoreCount] = useState(0);
    const [totalProjecs, setTotalProjecs] = useState(0);
    const [filters] = useState({
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
        const fetchLatestProjects = async () => {
            setIsLoading(true);
            const paginationOptions = {
                page,
                limit: 5,
            };
            const response = await projectApi.getAllProjectsByUsername(userName, filters, paginationOptions);
            const getError = response?.error;
            if (getError) {
               console.error(getError);
              } else {
                const resData = response?.data;
                if (resData?.success) {
                  const newProjects = resData.data.projects || [];
                  if (page === 1) {
                    setProjects(newProjects);
                  } else {
                    setProjects((prevProjects) => [...prevProjects, ...newProjects]);
                  }
                  const totalPr = response?.data?.meta?.total;
                  setTotalProjecs(totalPr);
                }
              }
              
            setIsLoading(false);

        }
        fetchLatestProjects();
    }, [userName, page, filters]);

    useEffect(() => {
        setMoreCount(totalProjecs - projects.length);

    }, [totalProjecs, projects])

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };


    //   delete operation 
    const DeleteProject = async (projectId) => {
        try {
            setIsLoading(true);
            if (!projectId) {
                throw new Error('Project ID not provided');
            }
            const response = await projectApi.deleteProject(projectId);
            const deleteSt = response?.data;
            if (deleteSt?.success) {
                if (response?.data?.data?.id) {
                    const updateProjectData = projects.filter(project => project.id !== response?.data?.data?.id);
                    setProjects(updateProjectData);
                }
            }
            // Do others 
        } catch (error) {
            throw new Error('Error Deleting Project:', error);
        } finally {
            setIsLoading(false);
            return true;
        }
    }


    const othersOperationData = {
        DeleteProject,
    }

    return (
        <>
            <section className="full_widht_auth_section">
                <div className="container">
                    <div className="dashboard">
                        <DashboardMenu isActiveMenu={isActiveMenu} />
                        <div className="dashboard_add_project">
                            {/* <!-- Add Project head --> */}
                            <div className="add_project_head">
                                <button className='dasMenuBtn' onClick={handelDashMenu}>
                                    <AiOutlineMenuUnfold />
                                </button>
                                <h3 className="title">All Projects  </h3>
                            </div>
                            <div className='dashboard_all_projectBody'>
                                <div className="project_show_cash">
                                    {/* Render project cards */}
                                    {projects.length !== 0 && (
                                        projects.map((project) => (
                                            <ProjectCard key={project.id} project={project} />
                                        ))
                                    )}

                                    {!isLoading && projects.length === 0 && (
                                        <p>No projects found</p>
                                    )}

                                    {isLoading ? (
                                        <>
                                            {[1, 2].map((item) => (
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
                </div>
            </section>
        </>
    );
};

export default AllProject;