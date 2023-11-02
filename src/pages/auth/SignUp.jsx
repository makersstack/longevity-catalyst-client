import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { authApi } from '../../api';
import '../../assets/styles/authPages.css';
import AuthHeader from '../../components/auth/AuthHeader';
import ContributerSignUp from '../../components/auth/ContributerSignUp';
import ResearcherSignUp from '../../components/auth/ResearcherSignUp';
import UserSignUp from '../../components/auth/UserSignUp';
import ScrollToTop from '../../utils/RouteChange';
import { checkAuth, setUserData } from '../../utils/fakeAuth';
import PageNotFound from '../PageNotFound';


const SignUp = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    const [getAuthF, setAuthF] = useState(checkAuth());

    console.log(setAuthF);

    useEffect(() => {
        if (getAuthF) {
            navigate('/user/dashboard');
        }
    }, [getAuthF]);

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

    const handalSubmitSignUp = async (e) => {
        e.preventDefault();

        setErrorMsg({});
        const formData = new FormData(e.target);
        const formDataObject = {};

        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // validation 
        let isValid = true;
        if (formDataObject.email.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                email: 'Email is Required',
            }));
            isValid = false;
        }

        if (formDataObject.username.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                username: 'Full Name is Required',
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

        // Access the selected file using the name attribute
        const profilePictureFile = formData.get("profile_pic");
        // Check if a file was selected
        // if (profilePictureFile) {
        //     console.log("Selected File:", profilePictureFile);
        //     // You can also access additional file properties, such as name, type, and size
        //     console.log("File Name:", profilePictureFile.name);
        //     console.log("File Type:", profilePictureFile.type);
        //     console.log("File Size (bytes):", profilePictureFile.size);
        // } else {
        //     console.log("No file selected");
        // }

        if (isValid) {
            const response = setUserData(formDataObject);

            if (response.status) {
                navigate('/login');

            } else {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    email: response.message,
                }));
                isValid = false;
            }
        }

        const responseApi = await authApi.signup(formDataObject);

        if(responseApi.status){
            console.log("Well, Data is successfylly updated");
        }
        console.log(formDataObject);
    }

    if (type === 'user' || type === 'contributor' || type === 'researcher') {
        return (
            <>
                <AuthHeader />
                <section className="full_widht_auth_section">
                    <div className="container">
                        <div className="auth_area">
                            <form onSubmit={handalSubmitSignUp} ref={formRef}>
                                <h4>Sign Up</h4>
                                <p>Welcome back! Please enter your details.</p>
                                {
                                    type === 'user' && <UserSignUp errorMsg={errorMsg} />
                                }
                                {
                                    type === 'contributor' && <ContributerSignUp errorMsg={errorMsg} />
                                }
                                {
                                    type === 'researcher' && <ResearcherSignUp errorMsg={errorMsg} />
                                }

                                <button type="submit" className="auth_submit btn btn-dark btn-full">
                                    Sign Up
                                </button>

                            </form>
                            <p className="have_auth_msg">
                                Already have an account?
                                <Link to='/login'> &nbsp; Log In.</Link>
                            </p>
                        </div>
                    </div>
                </section>

            </>
        );
    } else {
        return (
            <PageNotFound />
        );
    }

};

export default SignUp;