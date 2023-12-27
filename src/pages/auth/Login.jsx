/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { authApi } from '../../api';
import '../../assets/styles/authPages.css';
import AuthHeader from '../../components/auth/AuthHeader';
import Loader from '../../components/ui/Loader';
import SignupModal from '../../components/ui/SignupModal';
import useAuth from '../../hooks/UseAuth';
import useLoading from '../../hooks/useLoading';
import ScrollToTop from '../../utils/RouteChange';
const Login = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const { setIsLoading } = useLoading();
    const navigate = useNavigate();
    const { handleLoginSuccess } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/user/dashboard';
    const mes = {};
    const [errorMsg, setErrorMsg] = useState(mes);
    const formRef = useRef(null);
    const rideEmsg = new URLSearchParams(location.search).get('emsg');

    ScrollToTop();

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

    useEffect(() => {
        if (Object.keys(errorMsg).length !== 0) {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [errorMsg]);


    const handalSubmitLogin = async (e) => {
        e.preventDefault();
        setErrorMsg({});

        const formData = new FormData(e.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        // setUserData(formDataObject);
        let isValid = true;
        if (formDataObject.username.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                username: 'Username is Required',
            }));
            isValid = false;
        }
        if (formDataObject.password.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                password: 'Password is Required',
            }));
            isValid = false;
        }
        formDataObject.identifier = formDataObject.username;

        if (isValid) {
            try {
                setIsLoading(true);
                const response = await authApi.login(formDataObject, {
                    withCredentials: true
                });
                const getError = response?.error;

                if (getError) {
                    toast.error(getError.data.message);
                } else {
                    if (response?.data?.success) {
                        handleLoginSuccess({ accessToken: response.data.data.accessToken });

                        navigate(from, { replace: true });
                        toast.success("Sign In Successfully Done !");
                    } else {
                        toast.error("Something went wrong");
                    }
                }
            } catch (error) {
                console.error('An error occurred:', error);
            } finally {
                setIsLoading(false);
            }
        }

    }

    return (
        <>
            <Loader />
            {/* <!-- ST:- Auth header menu  --> */}
            <AuthHeader />


            {/* <!-- ST:- login form  --> */}
            <section className="full_widht_auth_section">
                <div className="container">
                    <div className="auth_area">
                        <form onSubmit={handalSubmitLogin} ref={formRef}>
                            {rideEmsg && <div className='info_box-msg'>{rideEmsg}</div>}
                            <h4>Log In</h4>
                            <p>Welcome back! Please enter your details.</p>
                            <div className="auth_box padding_top-30">
                                <label htmlFor="username">Username*</label>
                                <input
                                    className={errorMsg.username ? 'border-warring' : ''}
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Username"

                                />
                                {errorMsg.username && <div className='error-msg'>{errorMsg.username}</div>}
                            </div>
                            <div className="auth_box">
                                <label htmlFor="password">Password*</label>
                                <input
                                    className={errorMsg.password ? 'border-warring' : ''}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Type Your password"

                                />
                                {errorMsg.password && <div className='error-msg'>{errorMsg.password}</div>}
                            </div>
                            <p>Must be at least 8 characters.</p>
                            <button type="submit" className="auth_submit btn btn-dark btn-full">
                                Log In
                            </button>

                        </form>
                        <p className="have_auth_msg">
                            Not a Member?
                            <button onClick={openModal}> &nbsp; Sign Up</button>
                            <SignupModal open={modalOpen} onClose={closeModal} onSignUp={handleCreateAccountClick} />

                        </p>
                    </div>
                </div>
            </section>
            {/* <!-- ED:- login form  --> */}
        </>
    );
};

export default Login;