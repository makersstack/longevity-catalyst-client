import React from 'react';
import DashboardMenu from '../../components/userPanel/DashboardMenu';

const AllProject = () => {
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