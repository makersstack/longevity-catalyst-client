import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupModal from '../../components/SignupModal';
import AuthHeader from '../../components/auth/AuthHeader';
import ScrollToTop from '../../utils/RouteChange';
import { checkAuth, setAuth, userLoginCheck } from '../../utils/fakeAuth';

const Login = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    const [getAuthF, setAuthF] = useState(checkAuth());

    useEffect(() => {
        if (getAuthF) {
            navigate('/user/dashboard');
        }
    }, [getAuthF]);



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
    const mes = {};
    const [errorMsg, setErrorMsg] = useState(mes);
    const formRef = useRef(null);

    useEffect(() => {
        if (Object.keys(errorMsg).length !== 0) {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [errorMsg]);


    const handalSubmitLogin = (e) => {
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

        if (isValid) {
            const response = userLoginCheck(formDataObject);
            if (response.status) {
                setAuth(formDataObject.username);
                navigate('/user/dashboard');

            } else {
                console.log(response);
                if (response.username) {
                    setErrorMsg(prevErrorMsg => ({
                        ...prevErrorMsg,
                        username: response.username,
                    }));
                    isValid = false;
                }
                if (response.password) {
                    setErrorMsg(prevErrorMsg => ({
                        ...prevErrorMsg,
                        password: response.password,
                    }));
                    isValid = false;
                }
            }
        }
    }
    return (
        <>
            {/* <!-- ST:- Auth header menu  --> */}
            <AuthHeader />


            {/* <!-- ST:- login form  --> */}
            <section className="full_widht_auth_section">
                <div className="container">
                    <div className="auth_area">
                        <form onSubmit={handalSubmitLogin} ref={formRef}>
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