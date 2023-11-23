import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { NavLink, Navigate } from 'react-router-dom';
import { menuData } from '../../data/dashboardData';
import useAuth from '../../hooks/UseAuth';

const RanderNav = () => {
  const { handleLogout } = useAuth();
  
  const [isOpenState, setIsOpenState] = useState({});

  const toggleDropdown = (itemId) => {
    setIsOpenState((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const LogOuthandel = () => {
    handleLogout();
    return <Navigate to="/login" />
  }
  return (
    <div className='dashboard_nav'>
      <ul>
        {menuData.map((item) => (
          <React.Fragment key={item.id}>
            {item.submenu ? (
              <li className="dropdown_menu">
                <button onClick={() => toggleDropdown(item.id)}>
                  <span className='menu_with_chev'>
                    <span className='al_menu_icon'>{item.icon}</span>
                    <span>{item.title}</span>
                  </span>
                  <HiChevronDown />
                </button>
                {isOpenState[item.id] && (
                  <ul className="submenu">
                    {item.submenu.map((subLink) => (
                      <li key={subLink.id}>
                        <NavLink to={subLink.route}>{subLink.title}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
               <li>
                <NavLink to={item.route} onClick={item.title === 'Logout' ? LogOuthandel : undefined}>
                  <span className='al_menu_icon'>{item.icon}</span>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default RanderNav;
