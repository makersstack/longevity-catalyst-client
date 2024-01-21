import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/dashboardMenu.css';
import { avatersFor } from '../../constants/avaters';
import useAuth from '../../hooks/useAuth';
import Tooltip from '../comment/Tooltip';
import ImageTagWithFallback from '../common/ImageTagWithFallback';
import RanderNav from './RanderNav';

const DashboardMenu = ({ isActiveMenu }) => {
    const navigation = useNavigate();
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
                <button className='profile_img' onClick={() => navigation(`/${userInfo.username}`)}>
                    <ImageTagWithFallback src={avatarSrc} fallbackSrc={avatersFor.user} alt={userInfo.full_name || "Annette Black"} />

                </button>
                <div className="">
                    <button className='profile_text truncate-text' onClick={() => navigation(`/${userInfo?.username}`)}>
                        {userInfo.full_name || "Annette Black"}
                    </button>
                    {
                        userInfo?.email && (
                            <Tooltip text={userInfo?.email}>
                                <p className='truncate-text'>{userInfo?.email}</p>
                            </Tooltip>
                        )
                    }

                </div>
            </div>

            <div className="dashboard_nav_container">
                <RanderNav />
            </div>
        </div>
    );
};

export default DashboardMenu;