import React, { useEffect, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { projectApi } from '../../api';
import '../../assets/styles/dashboard.css';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import useAuth from '../../hooks/UseAuth';
import ScrollToTop from '../../utils/RouteChange';
// import calculateDurationFromNow from '../../utils/durationCalculate';
import ProjectCard from '../../components/project/ProjectCard';

const AllProject = () => {
    useEffect(() => {
        document.title = "My Projects - Longevity Catalyst";
      }, []);
    ScrollToTop();

    const {userInfo} = useAuth();
    const userName = userInfo?.username;

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }
    // For Fetch Project By user
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchLatestProjects = async () => {
            setIsLoading(true);
            try {
                const response = await projectApi.getAllProjectsByUsername(userName);
                const newProjects = response.data.data || [];
                setProjects(newProjects);
            } catch (error) {
                throw new Error("Error fetching projects", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchLatestProjects();
    }, [userName]);

    const handleLoadMore = () => {
       alert("Processing... Project Filters, Search Terms, and Pagination!");
    };



    return (
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
                            <h3 className="title">All Projects</h3>
                        </div>
                        <div className='dashboard_all_projectBody'>
                            <div className="project_show_cash">
                                {/* Render project cards */}
                                {projects.map((project) => (
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
                </div>
            </div>
        </section>
    );
};

export default AllProject;