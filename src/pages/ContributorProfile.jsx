import React, { useEffect, useState } from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { CiLocationOn } from "react-icons/ci";
import { FaBell, FaRegCommentDots, FaUserAlt, FaWifi } from 'react-icons/fa';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { HiArrowNarrowRight, HiDotsVertical } from 'react-icons/hi';
import { IoEyeOutline, IoHomeOutline } from "react-icons/io5";
import { RiShareForwardFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { projectApi } from '../api';
import "../assets/styles/profileShow.css";
import TopFilterButtons from '../components/filter/TopFilterButtons';
import LikeButton from '../components/likeShare/LikeButton';
import SocailModal from '../components/ui/SocailModal';
import { avatersFor } from '../constants/avaters';
import { topFilterOptionsPage1 } from '../data/filterData';
import { baseUrl } from '../globals';
import useAuth from '../hooks/UseAuth';
import ScrollToTop from '../utils/RouteChange';
import dateTimeHel from '../utils/dateTimeHel';
const ContributorProfile = () => {
  ScrollToTop();
  const navigation = useNavigate();
  const { isLoggedIn, userInfo } = useAuth();
  const [selectedTopOption, setSelectedTopOption] = useState('latest');

  const handelSideBarButton = (e) => {
    e.preventDefault();
  }
  const handleTopOptionChange = (value) => {
    setSelectedTopOption(value);
  };

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLatestProjects = async () => {
      setIsLoading(true);
      try {
        const response = await projectApi.getAllProjectsByUsername(userInfo.username);
        const newProjects = response.data.data || [];
        setProjects((prevProjects) => [...prevProjects, ...newProjects]);
      } catch (error) {
        throw new Error("Error fetching projects", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLatestProjects();
  }, [userInfo.username]);
  const handleLoadMore = () => {
    alert("Processing... Project Filters, Search Terms, and Pagination!");
  };
  // For modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const avatarSrc = isLoggedIn ? (userInfo?.profileImage || avatersFor.user) : null;
  return (
    <section className="full_width_contributer_section">
      <div className="container">
        <div className="contributer_page_wrapper">

          <div className="project_side_ber_container">
            <div className="project_side_bar">
              <form method="post">

                <div className="side_bar_card">
                  <div className="profile_user_info">
                    <div className="image_block">
                      <img src={avatarSrc} alt="user" />
                    </div>
                    <div className="info_block">
                      <h3>{userInfo.full_name}</h3>
                      <div className="user_title">Programmer</div>
                      <span className="follow_st">
                        <Link to="/">5000 follower </Link> .
                        <Link to="/">200 following</Link>
                      </span>
                      <div className="profile_buttons">
                        <Link to="/" className="btn btn-dark no-shadow">
                          <FaBell />
                          Notify
                        </Link>
                        <Link to="/" className="btn btn-gray">
                          <FaWifi />
                          Follow
                        </Link>
                        <Link to="/" className="btn_more_bar">
                          <HiDotsVertical />
                        </Link>
                        {/* <button className="btn_more_bar" >
                          <HiDotsVertical />
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="side_bar_card">

                  <div className="side_bar_card_head">
                    <span className="head_title">Intro</span>
                    <Link to="/" className="btn btn-gray btn-sm">Edit</Link>
                  </div>

                  <div className="side_bar_card_body">
                    <p>
                      Software engineer, dad, husband, former video game
                      programmer, and member of The Church of Jesus Christ of
                      Latter-day Saints.
                    </p>
                    <span className="divider"></span>
                    <ul>
                      <li>
                        <div className="icon_box">
                          <CiLocationOn />
                        </div>
                        <p>
                          <span>Lives in</span>
                          <b>New York</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <IoHomeOutline />
                        </div>
                        <p>
                          <span>Lives in</span>
                          <b>Home state Brazil</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <IoEyeOutline />
                        </div>
                        <p>
                          <span>Content View</span>
                          <b>3.5M</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <FiBriefcase />
                        </div>
                        <p>
                          <span>Software Engineer</span>
                          <b>Present</b>
                        </p>
                      </li>
                      <li>
                        <div className="icon_box">
                          <FiCalendar />
                        </div>
                        <p>
                          <span>Joined</span>
                          <b>January 2010</b>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="side_bar_card">
                  <div className="input_box">
                    <h4>Skills : </h4>
                    <div className="input_box_keywords">
                      <p className='show_ct'>Python</p>
                      <p className='show_ct'>Machine learning</p>
                      <p className='show_ct'>Molecular modeling</p>
                      <p className='show_ct'>Cheminformatics</p>
                      <p className='show_ct'>Pharmacology</p>
                    </div>
                  </div>
                </div>

                <div className="side_bar_card">
                  <div className="input_box">
                    <h4>Protfolio :</h4>
                    <input
                      id="se-p"
                      type="text"
                      disabled
                      placeholder="https://www.protfolio.com"
                    />
                  </div>
                </div>

                <div className="side_bar_card">
                  <div className="input_box">
                    <h4>Certification :</h4>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                    <div className="side_sertification">
                      <img
                        src="https://www.figma.com/file/VYUcSJ76YkqAwXSoS8xErM/image/99ce3e4e72e3d5f19e407f5857afebd8e36a535c?fuid=1228801612906942585"
                        alt=""
                      />
                      <div className="sertification_info">
                        <div className="sertificaton_title">General Electric</div>
                        <span>Nov 2018</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="project_show_container">

            <TopFilterButtons options={topFilterOptionsPage1}
              selectedOption={selectedTopOption}
              onOptionChange={handleTopOptionChange}
              handelSideBarButton={handelSideBarButton}
            />

            <div className="project_show_cash">
              {projects.map((project) => (
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
                      {/* For Share */}
                      <SocailModal isOpen={isModalOpen} closeModal={closeModal} postLink={`${baseUrl}project/${project.id}`} />
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
    </section>
  )
};

export default ContributorProfile;