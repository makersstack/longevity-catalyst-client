import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import ScrollToTop from '../../utils/RouteChange';
import { checkAuth } from '../../utils/fakeAuth';

const AllProject = () => {
    ScrollToTop();
    const navigate = useNavigate();
    const [getAuthF, setAuthF] = useState(checkAuth());
    
    useEffect(()=>{
        if (!getAuthF) {
            navigate('/login');
        }
    },[getAuthF]);

    return (
        <section className="full_widht_auth_section">
            <div className="container">
                <div className="dashboard">
                    <DashboardMenu />
                    <div className="dashboard_add_project">
                        {/* <!-- Add Project head --> */}
                        <div className="add_project_head">
                            <h3 className="title">All Projects</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllProject;