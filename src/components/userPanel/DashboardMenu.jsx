import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/dashboardMenu.css';
import { avatersFor } from '../../constants/avaters';
import useAuth from '../../hooks/useAuth';
import ImageTagWithFallback from '../common/ImageTagWithFallback';
import Tooltip from '../ui/Tooltip';
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
                <Link to={`/${userInfo.username}`} className='profile_img'>
                    <ImageTagWithFallback src={avatarSrc} fallbackSrc={avatersFor.user} alt={userInfo.full_name || "Annette Black"} />
                </Link>
                <div className="dashboard_menu_profile_title">
                    <Link to={`/${userInfo?.username}`} className='profile_text truncate-text'>
                        {userInfo?.full_name}
                    </Link>
                    <Tooltip text={userInfo?.email}>
                        <p className='truncate-text'>{userInfo?.email}</p>
                    </Tooltip>
                </div>
            </div>

            <div className="dashboard_nav_container">
                <RanderNav />
            </div>
        </div>
    );
};

export default DashboardMenu;