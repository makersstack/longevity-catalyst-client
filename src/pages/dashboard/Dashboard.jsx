import React, { useEffect, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import '../../assets/styles/dashboard.css';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import useAuth from '../../hooks/useAuth';
import ScrollToTop from '../../utils/routeChange';

const Dashboard = () => {
    const { userInfo } = useAuth();
    // const navigate = useNavigate();
    useEffect(() => {
        document.title = "Dashboard - Longevity Catalyst";
    }, []);
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
                            <h3 className="title">User Dashboard</h3>
                        </div>
                        <div className="main_dashboard_content">
                           <h4>Welcome {userInfo?.full_name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;