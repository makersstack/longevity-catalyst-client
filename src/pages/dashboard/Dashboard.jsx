import axios from 'axios';
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
    const [confirmationCode, setConfirmationCode] = useState('');
    const [isConfirmationSent, setIsConfirmationSent] = useState(false);

    const handleSendConfirmation = async () => {
        try {
            // Send a request to your server to resend the confirmation email
            const response = await axios.post('/api/resendConfirmation', { email: userInfo.email });

            // Check if the email was sent successfully
            if (response.data.success) {
                setIsConfirmationSent(true);
            } else {
                // Handle the case where the email could not be sent
                console.error('Error sending confirmation email:', response.data.message);
            }
        } catch (error) {
            console.error('Error sending confirmation email:', error.message);
        }
    };

    const handleConfirmEmail = async () => {
        try {
            // Send a request to your server to confirm the email with the provided code
            const response = await axios.post('/api/confirmEmail', {
                email: userInfo.email,
                confirmationCode,
            });

            // Handle the response accordingly
            if (response.data.success) {
                // Email confirmed successfully
                // You may want to redirect the user or show a success message
            } else {
                // Handle the case where the email confirmation failed
                console.error('Error confirming email:', response.data.message);
            }
        } catch (error) {
            console.error('Error confirming email:', error.message);
        }
    };
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
                                        <div className="mail_confiramation">
                                            <div className="form_control">
                                                <input
                                                    type="text"
                                                    name="mailconfiramation"
                                                    id="mailconfiramation"
                                                    value={confirmationCode}
                                                    onChange={(e) => setConfirmationCode(e.target.value)}
                                                />
                                                <button type="button" onClick={handleConfirmEmail} id="mailconfiramationBtn">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                        <p>
                                            We have sent an email to <span>{userInfo?.email}</span>. Follow the link provided in the email to complete your registration.
                                        </p>
                                        {isConfirmationSent ? (
                                            <p className="info_small">If you haven't received the email, you can click Resend Confirmation.</p>
                                        ) : (
                                            <p className="info_small">
                                                If you haven't received the email,{' '}
                                                <button type="button" onClick={handleSendConfirmation}>
                                                    Resend Confirmation
                                                </button>
                                            </p>
                                        )}
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