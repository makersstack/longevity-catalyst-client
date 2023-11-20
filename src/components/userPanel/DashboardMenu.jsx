import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/dashboardMenu.css';
import { baseUrl } from '../../globals';
import RanderNav from './RanderNav';

const DashboardMenu = ({isActiveMenu}) => {
    return (
        <div className={`dashboard_menu ${ isActiveMenu ? 'activemenu' : ''} `}>
            {/* <!-- Menu Profile --> */}
            <div className="dashboard_menu_profile">
                <div className="profile_img">
                    <img src={`${baseUrl}assets/img/demo-user-3.png`} alt="profile_img" />
                </div>
                <div className="profile_text">
                    <Link to='/user/username'> Annette Black </Link>
                    <p>debra.holt@example.com</p>
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