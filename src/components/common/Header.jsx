import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaChevronDown, FaRegUser } from 'react-icons/fa';
import { HiOutlineCog } from 'react-icons/hi';
import { IoIosNotifications } from "react-icons/io";
import { LuBarChart2 } from 'react-icons/lu';
import { PiSignOut } from 'react-icons/pi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/header.css';
import { avatersFor } from '../../constants/avaters';
import { ENUM_USER_ROLE } from '../../constants/role';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';
import HeaderSearch from '../ui/HeaderSearch';
import SignupModal from '../ui/SignupModal';
import ImageTagWithFallback from './ImageTagWithFallback';

const Header = () => {
  // For Auth
  const { handleLogout, isLoggedIn, userInfo } = useAuth();
  const { setIsLoading } = useLoading();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutButton = () => {
    handleLogout();
    navigate('/login');
  }
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCreateAccountClick = (selectedRole) => {
    if (selectedRole === 'researcher') {
      navigate('/sign-up/researcher');
    } else if (selectedRole === 'contributor') {
      navigate('/sign-up/contributor');
    } else if (selectedRole === 'user') {
      navigate('/sign-up/user');
    }
    closeModal();
  };

  const [isOpenSearchBox, setOpenSearchBox] = useState(false);
  const handelSearchBox = () => {
    setOpenSearchBox(!isOpenSearchBox);
  }


  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  const handleNotification = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  const closeNotification = () => {
    setNotificationOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        closeNotification();
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
      // outsite click of search button
      const headerSearchElement = document.querySelector('.header_search');
      const isSearchButton = event.target.classList.contains('res-search-btn');
      const isChildOfButton = event.target.closest('.res-search-btn');
      if (
        headerSearchElement &&
        !headerSearchElement.contains(event.target) &&
        !event.target.classList.contains('header_search') &&
        !(isSearchButton || isChildOfButton)
      ) {
        setOpenSearchBox(false);
      }
      // -- 
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const location = useLocation();

  const getLinkText = () => {
    if (location.pathname.startsWith('/dashboard/')) {
      return 'Home';
    } else {
      return 'Dashboard';
    }
  };

  useEffect(() => {
    closeDropdown();
  }, [location.pathname]);

  useEffect(() => {
    if (isLoggedIn && !userInfo) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn, setIsLoading, userInfo]);

  const avatarSrc = isLoggedIn ? (userInfo?.profileImage || avatersFor.user) : null;

  const hideButton = location.pathname === '/dashboard/project/add';

  return (
    <header>
      <div className='container'>
        <div className='header_wrapper'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={`header_search ${isOpenSearchBox ? 'active_header_search' : ''}`}>
            <HeaderSearch />
          </div>

          <div className="header_buttons">
            {
              isLoggedIn && (
                <div ref={notificationRef} className='notification_area'>
                  <button type='button' className='btn btn_notification' onClick={handleNotification}>
                    <IoIosNotifications />
                    <span>0</span>
                  </button>
                  {isNotificationOpen && (
                    <div className="notification_menu">
                      <div className="notification_content">
                        <div className="notification_head">
                          <h3><IoIosNotifications /> Notifications <span>(0)</span></h3>
                        </div>
                        <div className="notification_body">
                          <div className="notification_item" onClick={closeNotification}>
                            <div className="notification_item_icon">
                              <img src={avatarSrc} alt="notification_icon" />
                            </div>
                            <div className="notification_item_text">
                              <p><strong>Lorem ipsum,</strong> dolor sit amet consectetur adipisicing.</p>
                              <div className="notification_dateTime">
                                <p>1d</p>
                              </div>
                            </div>
                          </div>
                          <div className="notification_item" onClick={closeNotification}>
                            <div className="notification_item_icon">
                              <img src={avatarSrc} alt="notification_icon" />
                            </div>
                            <div className="notification_item_text">
                              <p><strong>Lorem ipsum,</strong> dolor sit amet consectetur adipisicing.</p>
                              <div className="notification_dateTime">
                                <p>1 week</p>
                              </div>
                            </div>
                          </div>
                          <div className="notification_item" onClick={closeNotification}>
                            <div className="notification_item_icon">
                              <img src={avatarSrc} alt="notification_icon" />
                            </div>
                            <div className="notification_item_text">
                              <p><strong>Lorem ipsum,</strong> dolor sit amet consectetur adipisicing.</p>
                              <div className="notification_dateTime">
                                <p>1 month</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className='idicator_icondiv'></span>
                      </div>
                    </div>
                  )}
                </div>

              )
            }

            <button className='dropdown-button res-search-btn' onClick={handelSearchBox}>
              <BiSearch />
            </button>
            {
              isLoggedIn ? <>
                {
                  userInfo?.role !== ENUM_USER_ROLE.REGULARUSER && !hideButton && (
                    <Link to={'/dashboard/project/add'} className='btn btn-dark'>
                      Add Project
                    </Link>
                  )
                }
                <Link to={location.pathname.startsWith('/dashboard/') ? '/' : '/dashboard/home'} className='btn btn-dark'>
                  {getLinkText()}
                </Link>
                <div className="user-dropdown" ref={dropdownRef}>
                  <button className="profile-image" onClick={toggleDropdown}>
                    <ImageTagWithFallback src={avatarSrc} fallbackSrc={avatersFor.user} alt={userInfo?.username} />
                  </button>

                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      <div className="user_dropdown_menu">
                        <div className="user_dropdown_menu_itme">
                          <Link to='/dashboard/home' >
                            <span className='al_menu_icon'> <LuBarChart2 /></span>
                            <span>Dashboard</span>
                          </Link>
                          {
                            userInfo.role !== ENUM_USER_ROLE.REGULARUSER && (
                              <Link to='/dashboard/project/add' >
                                <span className='al_menu_icon'> <LuBarChart2 /></span>
                                <span>Add Project</span>
                              </Link>
                            )
                          }

                          <Link to={`/${userInfo?.username}`}>
                            <span className='al_menu_icon'> <FaRegUser /> </span>
                            <span>Profile</span>
                          </Link>
                          <Link to='/dashboard/password/change' >
                            <span className='al_menu_icon'> <HiOutlineCog /> </span>

                            <span>Settings</span>
                          </Link>
                          <Link to='/login' onClick={handleLogoutButton}>
                            <span className='al_menu_icon'> <PiSignOut /> </span>
                            <span>Log Out</span>
                          </Link>
                        </div>

                        <div className="idicator_icondiv"></div>
                      </div>
                    </div>
                  )}
                </div>
              </>
                :
                <>
                  <Link to='/login' className='btn btn-dark'>
                    Login
                  </Link>
                  <div className="custom-dropdown">
                    <button className="dropdown-button" onClick={openModal}>
                      <FaRegUser />
                      <FaChevronDown />
                    </button>

                    <SignupModal open={modalOpen} onClose={closeModal} onSignUp={handleCreateAccountClick} />
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;