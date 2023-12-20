import React, { useEffect, useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import '../../assets/styles/dashboard.css';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import useAuth from '../../hooks/UseAuth';
import ScrollToTop from '../../utils/RouteChange';

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
    // const handelUpdateProfile = () => {
    //     navigate("/dashboard/profile/update");
    // }
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
                            <div className="confiramation_options">
                                <div className="single_confiramation">
                                    <div className="email_confirmation">
                                        <img src="/assets/img/emailIcon.svg" alt="emailIcon" />
                                        <h4>Confirm Your Email</h4>
                                        <p>We have sent email to <span>{userInfo?.email}</span>, to confirm the validity of our email address. After receicing the email follow the link provided to complete you registration</p>
                                        {/* <button className='btn btn-dark'>Verify</button> */}
                                        <p className='info_small'>If you not got any mail <button type='button'>Resend Confirmation mail</button></p>
                                    </div>
                                </div>
                                {/* <div className="single_confiramation">
                                    <div className="email_confirmation">
                                        <img src="/assets/img/profile_update.svg" alt="profileUpdate" />
                                        <h4>Update your profile info</h4>
                                        <button onClick={handelUpdateProfile} className='btn btn-dark'>Update</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;