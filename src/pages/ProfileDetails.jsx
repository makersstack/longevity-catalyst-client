import React, { useEffect, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaBell, FaWifi } from 'react-icons/fa';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';
import { IoEyeOutline, IoHomeOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import { projectApi } from '../api';
import '../assets/styles/profileShow.css';
import TopFilterButtons from '../components/filter/TopFilterButtons';
import ProjectCard from '../components/project/ProjectCard';
import ProjectCardSkeleton from '../components/project/ProjectCardSkeleton';
import { avatersFor } from '../constants/avaters';
import { topFilterOptionsPage1 } from '../data/filterData';
import useAuth from '../hooks/UseAuth';
import ScrollToTop from '../utils/RouteChange';
import dateTimeHel from '../utils/dateTimeHel';
import PageNotFound from './PageNotFound';

const ProfileDetails = () => {
  const [userInformatin, setUserInformatin] = useState([]);
  useEffect(() => {
    if (userInformatin.full_name) {
      document.title = `${userInformatin.full_name} - Longevity Catalyst`;
    }else{
      document.title = "Profile - Longevity Catalyst";
    }
    
  }, [userInformatin]);
  ScrollToTop();
  const { isLoggedIn } = useAuth();
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

  useEffect(() => {
    const fetchLatestProjects = async () => {
      setIsLoading(true);

      const paginationOptions = {
        page,
        limit: 5,
      };
      const response = await projectApi.getAllProjectsByUsername(username, filters, paginationOptions);
      const getError = response?.error;
      if (getError) {
        if (getError.status === 404) {
          setIsUserFound(true);
        }
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
          setUserInformatin(resData?.data?.userData);
        }
      }



      setIsLoading(false);
    }
    fetchLatestProjects();
  }, [username, filters, page]);
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


  const avatarSrc = isLoggedIn ? (userInformatin?.profileImage || avatersFor.user) : null;
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
                            <img src={avatarSrc} alt="user" />
                          </div>
                          <div className="info_block">
                            <h3 className='userProfile_title'>{userInformatin.full_name}</h3>
                            <div className="user_title">As an {userInformatin?.role}</div>
                            <span className="follow_st">
                              <Link to="/">500 follower</Link>. &nbsp;
                              <Link to="/">200 following</Link>
                            </span>
                            <div className="profile_buttons">
                              <button type='button' className="btn btn-dark no-shadow">
                                <FaBell />
                                Notify
                              </button>
                              <button type='button' className="btn btn-gray">
                                <FaWifi />
                                Follow
                              </button>
                              <button type='button' className="btn_more_bar">
                                <HiDotsVertical />
                              </button>
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
                          <Link to='/dashboard/profile/update' className="btn btn-gray btn-sm">Edit</Link>
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
                            <li>
                              <div className="icon_box">
                                <FiBriefcase />
                              </div>
                              <p>
                                <span> Work At </span>
                                <b>{userInformatin?.company}</b>
                              </p>
                            </li>
                            <li>
                              <div className="icon_box">
                                <FiCalendar />
                              </div>
                              <p>
                                <span>Joined</span>
                                <b>{ dateTimeHel.formatDateToString(userInformatin?.createdAt,{day:false})}</b>
                                {/* <b>January 2010</b> */}
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