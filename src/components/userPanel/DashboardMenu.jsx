import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/dashboardMenu.css';
import { avatersFor } from '../../constants/avaters';
import useAuth from '../../hooks/UseAuth';
import RanderNav from './RanderNav';

const DashboardMenu = ({ isActiveMenu }) => {
    const { userInfo, isLoggedIn } = useAuth();
    
    if (isLoggedIn) {
        // For User
        if (!userInfo) {
          return <div>Loading...</div>;
        }
      }
    
      const avatarSrc = isLoggedIn ? (userInfo?.profileImage || avatersFor.user) : null;
    return (
        <div className={`dashboard_menu ${isActiveMenu ? 'activemenu' : ''} `}>
            {/* <!-- Menu Profile --> */}
            <div className="dashboard_menu_profile">
                <div className="profile_img">
                    <img src={`${avatarSrc}`} alt={userInfo.full_name || "Annette Black"} />
                </div>
                <div className="profile_text">
                    <Link to={`/${userInfo.username}`}>{userInfo.full_name || "Annette Black"}</Link>
                    <p>{userInfo.email || ''}</p>
                </div>
            </div>
           
            <div className="dashboard_nav_container">
                <RanderNav />
            </div>
        </div>
    );
};

export default DashboardMenu;