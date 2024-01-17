import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { IoEyeOutline, IoHomeOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import { projectApi } from '../api';
import profileApi from '../api/profileApi';
import '../assets/styles/profileShow.css';
import ImageTagWithFallback from '../components/common/ImageTagWithFallback';
import TopFilterButtons from '../components/filter/TopFilterButtons';
import OperationButtons from '../components/profile/OperationButtons';
import ProjectCard from '../components/project/ProjectCard';
import ProjectCardSkeleton from '../components/project/ProjectCardSkeleton';
import { avatersFor } from '../constants/avaters';
import { topFilterOptionsPage1 } from '../data/filterData';
import useAuth from '../hooks/useAuth';
import dateTimeHel from '../utils/dateTimeHel';
import ScrollToTop from '../utils/routeChange';
import PageNotFound from './PageNotFound';

const ProfileDetails = () => {
  const [userInformatin, setUserInformatin] = useState([]);
  useEffect(() => {
    if (userInformatin.full_name) {
      document.title = `${userInformatin.full_name} - Longevity Catalyst`;
    } else {
      document.title = "Profile - Longevity Catalyst";
    }

  }, [userInformatin]);
  ScrollToTop();
  const { isLoggedIn, userInfo } = useAuth();
  const getUserName = useParams();

  const [selectedTopOption, setSelectedTopOption] = useState('latest');

  const handelSideBarButton = (e) => {
    e.preventDefault();
  }
  const handleTopOptionChange = (value) => {
    setSelectedTopOption(value);
  };

  const [projects, setProjects] = useState([]);
  const [isUserFound, setIsUserFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
  const [page, setPage] = useState(1);
  const [moreCount, setMoreCount] = useState(0);
  const [totalProjecs, setTotalProjecs] = useState(0);

  const { username } = useParams();
  // get profile information 
  useEffect(() => {
    const fetchProfileInfo = async () => {
      setIsLoading(true);
      const response = await profileApi.GetUserInfoByUsername(username);
      const getError = response?.error;
      if (getError) {
        if (getError.status === 404) {
          setIsUserFound(true);
        } else {
          console.error(getError);
        }
      } else {
        setUserInformatin(response?.data?.data);
      }
    }
    fetchProfileInfo();
  }, [username]);

  // get projects 
  useEffect(() => {
    const fetchLatestProjects = async () => {
      setIsLoading(true);

      const paginationOptions = {
        page,
        limit: 5,
      };
      const response = await projectApi.getAllProjectsByUsername(userInformatin.username, filters, paginationOptions);
      const getError = response?.error;
      if (getError) {
        // if (getError.status === 404) {
        //   setIsUserFound(true);
        // }
        console.error(getError);
      } else {
        const resData = response?.data;
        if (resData?.success) {
          const newProjects = resData.data || [];
          if (page === 1) {
            setProjects(newProjects);
          } else {
            setProjects((prevProjects) => [...prevProjects, ...newProjects]);
          }
          const totalPr = response?.data?.meta?.total;
          setTotalProjecs(totalPr);
          // setUserInformatin(resData?.data?.userData);
        }
      }

      setIsLoading(false);
    }
    if(userInformatin.username){
      fetchLatestProjects();
    }
  }, [userInformatin,filters, page]);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    setMoreCount(totalProjecs - projects.length);

  }, [totalProjecs, projects]);

  useEffect(() => {
    setPage(1);
    setProjects([]);
    setMoreCount(0);
  }, [filters]);

  return (
    <>
      {
        isUserFound ? (
          <PageNotFound showInfoText='User Not Found' />
        ) : (
          <section className="full_width_contributer_section">
            <div className="container">
              <div className="contributer_page_wrapper">

                <div className="project_side_ber_container">
                  <div className="project_side_bar">
                    <form method="post">

                      <div className="side_bar_card">
                        <div className="profile_user_info">
                          <div className="image_block">
                            <ImageTagWithFallback src={userInformatin?.profileImage} fallbackSrc={avatersFor?.user} alt={userInformatin?.username} />
                          </div>
                          <div className="info_block">
                            <h3 className='userProfile_title'>{userInformatin.full_name}</h3>
                            <div className="user_title">As an {userInformatin?.role}</div>
                            <span className="follow_st">
                              {/* <Link to="/">0 follower</Link>. &nbsp;
                              <Link to="/">0 following</Link> */}
                              <span className='user_title'>{userInformatin?.followerCount} follower</span> &nbsp;&nbsp;
                              <span className='user_title'>{userInformatin?.followingCount} following</span>
                            </span>
                            {
                              userInfo?.username !== getUserName?.username && (
                               <OperationButtons defaultDataObject={{ username: getUserName?.username, isNotify: userInformatin?.isNotify, isFollow: userInformatin?.isFollow }} />
                              )
                            }
                          </div>
                        </div>
                      </div>

                      <div className="side_bar_card">
                        <div className="side_bar_card_head">
                          <span className="head_title">Intro</span>
                          {isLoggedIn && userInfo && userInfo?.username === getUserName?.username && (
                            <Link to='/dashboard/profile/update' className="btn btn-gray btn-sm">Edit</Link>
                          )}
                        </div>

                        <div className="side_bar_card_body">

                          <div dangerouslySetInnerHTML={{ __html: userInformatin?.bio }} />


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
                                <span>Home state</span>
                                <b>Brazil</b>
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
                            {userInformatin?.company && (
                              <li>
                                <div className="icon_box">
                                  <FiBriefcase />
                                </div>
                                <p>
                                  <span> Work At </span>
                                  <b>{userInformatin?.company}</b>
                                </p>
                              </li>
                            )}
                            {userInformatin?.createdAt && (
                              <li>
                                <div className="icon_box">
                                  <FiCalendar />
                                </div>
                                <p>
                                  <span>Joined</span>
                                  <b>{dateTimeHel.formatDateToString(userInformatin?.createdAt, { day: false })}</b>
                                  {/* <b>January 2010</b> */}
                                </p>
                              </li>
                            )}
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
          </section>
        )
      }
    </>
  )
};

export default ProfileDetails;