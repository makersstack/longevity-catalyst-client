import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi2';
import { NavLink, useNavigate } from 'react-router-dom';
import { menuDataForContributor, menuDataForUser } from '../../data/dashboardData';
import useAuth from '../../hooks/useAuth';
import { getMenuDataForRole } from '../../services/menu.service';

const RanderNav = () => {
  const { handleLogout, userInfo } = useAuth();
  const navigate = useNavigate();
  const [isOpenState, setIsOpenState] = useState({});

  const toggleDropdown = (itemId) => {
    setIsOpenState((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };
  
  const menuData = getMenuDataForRole(userInfo, menuDataForContributor, menuDataForUser);

  const LogOuthandel = () => {
    handleLogout();
    navigate('/login');
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
