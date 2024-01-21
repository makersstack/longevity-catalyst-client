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
import formatNumber from '../utils/NumberCountFormate';
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
    if (userInformatin.username) {
      fetchLatestProjects();
    }
  }, [userInformatin, filters, page]);
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
                              <span className='user_title'>{userInformatin?.followerCount ? formatNumber(userInformatin?.followerCount) : 0} follower</span> &nbsp;&nbsp;
                              <span className='user_title'>{userInformatin?.followingCount ? formatNumber(userInformatin?.followingCount) : 0} following</span>
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
                          {
                            userInformatin?.UserDetail && userInformatin?.UserDetail?.bio !== null && (
                              <>
                                <div dangerouslySetInnerHTML={{ __html: userInformatin?.UserDetail?.bio }} />
                                <span className="divider"></span>
                              </>
                            )
                          }

                          <ul>

                            {
                              userInformatin?.UserDetail && userInformatin?.UserDetail?.lives_in !== null && (

                                <li>
                                  <div className="icon_box">
                                    <CiLocationOn />
                                  </div>
                                  <p>
                                    <span>Lives in</span>
                                    <b>{userInformatin?.UserDetail?.lives_in}</b>
                                  </p>
                                </li>
                              )
                            }

                            {
                              userInformatin?.UserDetail && userInformatin?.UserDetail?.home_state !== null && (
                                <li>
                                  <div className="icon_box">
                                    <IoHomeOutline />
                                  </div>
                                  <p>
                                    <span>Home state</span>
                                    <b>{userInformatin?.UserDetail?.home_state}</b>
                                  </p>
                                </li>
                              )

                            }



                            <li>
                              <div className="icon_box">
                                <IoEyeOutline />
                              </div>
                              <p>
                                <span>Content View</span>
                                <b>{userInformatin?.content_view_count ? formatNumber(userInformatin?.content_view_coun) : 0}</b>
                              </p>
                            </li>





                            {userInformatin?.UserDetail && userInformatin?.UserDetail?.company !== null && (
                              <li>
                                <div className="icon_box">
                                  <FiBriefcase />
                                </div>
                                <p>
                                  <span> Work At </span>
                                  <b>{userInformatin?.UserDetail?.company}</b>
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

                      {
                        userInformatin?.Skills && (
                          <div className="side_bar_card">
                            <div className="input_box">
                              <h4>Skills : </h4>
                              <div className="input_box_keywords">
                                {
                                  userInformatin?.Skills?.map((item, index) => (
                                    <p className='show_ct' key={index}>{item.skillName}</p>
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        )
                      }


                      {
                        userInformatin?.UserDetail && userInformatin?.UserDetail?.portfolio !== null && (
                          <div className="side_bar_card">
                            <div className="input_box">
                              <h4>Protfolio :</h4>
                              <Link className='al_input_link' target='_blank' to={userInformatin?.UserDetail?.portfolio}>{userInformatin?.UserDetail?.portfolio}</Link>
                            </div>
                          </div>
                        )
                      }

                      {
                        userInformatin?.UserDetail && userInformatin?.UserDetail?.github !== null && (
                          <div className="side_bar_card">
                            <div className="input_box">
                              <h4>Github :</h4>
                              <Link className='al_input_link' target='_blank' to={userInformatin?.UserDetail?.github}>{userInformatin?.UserDetail?.github}</Link>
                            </div>
                          </div>
                        )
                      }


                      {
                        userInformatin?.Certification && (
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
                        )
                      }



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