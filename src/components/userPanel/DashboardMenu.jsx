import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/dashboardMenu.css';
import useAuth from '../../hooks/UseAuth';
import RanderNav from './RanderNav';

const DashboardMenu = ({ isActiveMenu }) => {
    const { userInfo } = useAuth();

    return (
        <div className={`dashboard_menu ${isActiveMenu ? 'activemenu' : ''} `}>
            {/* <!-- Menu Profile --> */}
            <div className="dashboard_menu_profile">
                <div className="profile_img">
                    <img src={`${userInfo.profileImage}`} alt={userInfo.full_name || "Annette Black"} />
                </div>
                <div className="profile_text">
                    <Link to={`/${userInfo.username}`}>{userInfo.full_name || "Annette Black"}</Link>
                    <p>{userInfo.email || ''}</p>
                </div>
            </div>
            {/* <!-- Navigation --> */}
            <div className="dashboard_nav_container">
                <RanderNav />
            </div>
        </div>
    );
};

export default DashboardMenu;