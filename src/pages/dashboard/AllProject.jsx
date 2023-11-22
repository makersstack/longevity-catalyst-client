import React, { useEffect, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { FaRegCommentDots, FaUserAlt } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { projectApi } from '../../api';
import defaultAvatar from '../../assets/images/defaultAvatar.png';
import '../../assets/styles/dashboard.css';
import LikeButton from '../../components/likeShare/LikeButton';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import ScrollToTop from '../../utils/RouteChange';
import calculateDurationFromNow from '../../utils/durationCalculate';

const AllProject = () => {
    ScrollToTop();
    const navigation = useNavigate();
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }
    // For Fetch Project By user
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchLatestProjects = async () => {
            setIsLoading(true);
            try {
                const response = await projectApi.getAllProjectsByUser(page, 5);
                const newProjects = response.data.data || [];
                setProjects((prevProjects) => [...prevProjects, ...newProjects]);
            } catch (error) {
                throw new Error("Error fetching projects", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchLatestProjects();
    }, [page]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1); 
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
                                    <div className="card" key={project.id}>
                                        {/* card header */}
                                        <div className="card_header">
                                            <div className="post_auth_info">
                                                <div className="profile_image">
                                                    <button onClick={() => navigation(`${project?.user?.userName}`)}>
                                                        <img src={project?.user?.profileImage || defaultAvatar} alt={project?.user?.userName} />
                                                    </button>
                                                </div>
                                                <div className="post_user_fet">
                                                    <button onClick={() => navigation(`${project?.user?.userName}`)} className="user_name">
                                                        {project?.user?.fullName}
                                                    </button>
                                                    <div className="post-features">
                                                        <FaUserAlt /> Friends <span></span> {calculateDurationFromNow(project.createdAt)}
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
                                            <h4 className="card_title">{project.projectTitle}</h4>
                                            <p className="card_text">
                                                {project.projectDesc}
                                            </p>
                                            <Link to="single-project">
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
                                                            <img src={defaultAvatar} alt={`userImage`} />
                                                        </Link>
                                                        <Link to="/">
                                                            <img src={defaultAvatar} alt={`userImage`} />
                                                        </Link>
                                                        <Link to="/">
                                                            <img src={defaultAvatar} alt={`userImage`} />
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