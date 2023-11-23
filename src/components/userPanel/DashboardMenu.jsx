import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/dashboardMenu.css';
import { avatersFor } from '../../constants/avaters';
import RanderNav from './RanderNav';

const DashboardMenu = ({isActiveMenu}) => {
    return (
        <div className={`dashboard_menu ${ isActiveMenu ? 'activemenu' : ''} `}>
           
            <div className="dashboard_menu_profile">
                <div className="profile_img">
                    <img src={avatersFor.user} alt="User" />
                </div>
                <div className="profile_text">
                    <Link to='/user/username'> Annette Black </Link>
                    <p>debra.holt@example.com</p>
                </div>
            </div>
           
            <div className="dashboard_nav_container">
                <RanderNav />
            </div>
        </div>
    );
};

export default DashboardMenu;