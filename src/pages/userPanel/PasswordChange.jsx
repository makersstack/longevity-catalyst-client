import React from 'react';
import DashboardMenu from '../../components/userPanel/DashboardMenu';

const PasswordChange = () => {
    return (
        <section className="full_widht_auth_section">
            <div className="container">
                <div className="dashboard">
                    <DashboardMenu />
                    <div className="dashboard_add_project">
                        {/* <!-- Add Project head --> */}
                        <div className="add_project_head">
                            <h3 className="title">Change Password</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PasswordChange;