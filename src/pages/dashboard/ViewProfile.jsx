import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import '../../assets/styles/dashboard.css';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import ScrollToTop from '../../utils/routeChange';

const ViewProfile = () => {
    ScrollToTop();

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    return (
        <section className="full_widht_auth_section">
            <div className="container">
                <div className="dashboard">
                    <DashboardMenu isActiveMenu={isActiveMenu} />
                    <div className="dashboard_add_project">
                        {/* <!-- Add Project head --> */}
                        <div className="add_project_head">
                            <button className='dasMenuBtn' onClick={handelDashMenu}>
                                <AiOutlineMenuUnfold />
                            </button>
                            <h3 className="title">View Profile</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewProfile