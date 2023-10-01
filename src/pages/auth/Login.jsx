import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupModal from '../../components/SignupModal';
import AuthHeader from '../../components/auth/AuthHeader';
import ScrollToTop from '../../utils/RouteChange';

const Login = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    const handleCreateAccountClick = (selectedRole) => {
      if (selectedRole === 'researcher') {
        navigate('/sign-up/researcher');
      } else if (selectedRole === 'contributor') {
        navigate('/sign-up/contributor');
      } else if (selectedRole === 'user') {
        navigate('/sign-up/user');
      }
      closeModal();
    };
  

    ScrollToTop();

    const handalSubmitLogin = (e) => {
        e.preventDefault();
    }
    return (
        <>
            {/* <!-- ST:- Auth header menu  --> */}
            <AuthHeader />


            {/* <!-- ST:- login form  --> */}
            <section className="full_widht_auth_section">
                <div className="container">
                    <div className="auth_area">
                        <form onSubmit={handalSubmitLogin} >
                            <h4>Log In</h4>
                            <p>Welcome back! Please enter your details.</p>
                            <div className="auth_box padding_top-30">
                                <label htmlFor="username">Username*</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="auth_box">
                                <label htmlFor="password">Password*</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Type Your password"
                                />
                            </div>
                            <p>Must be at least 8 characters.</p>
                            <button type="submit" className="auth_submit btn btn-dark btn-full">
                                Log In
                            </button>
                            <p className="have_auth_msg">
                                Not a Member?
                                <button onClick={openModal}> &nbsp; Sign Up</button>
                                <SignupModal open={modalOpen} onClose={closeModal} onSignUp={handleCreateAccountClick} />
                            </p>
                        </form>
                    </div>
                </div>
            </section>
            {/* <!-- ED:- login form  --> */}
        </>
    );
};

export default Login;