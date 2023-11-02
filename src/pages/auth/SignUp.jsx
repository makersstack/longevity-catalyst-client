import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { authApi } from '../../api';
import '../../assets/styles/authPages.css';
import AuthHeader from '../../components/auth/AuthHeader';
import ContributerSignUp from '../../components/auth/ContributerSignUp';
import ResearcherSignUp from '../../components/auth/ResearcherSignUp';
import UserSignUp from '../../components/auth/UserSignUp';
import ScrollToTop from '../../utils/RouteChange';
import { checkAuth } from '../../utils/fakeAuth';
import PageNotFound from '../PageNotFound';


const SignUp = () => {
    const { type } = useParams();
    const navigate = useNavigate();

    const [getAuthF, setAuthF] = useState(checkAuth());
    const [profilePic, setProfilePic] = useState({});

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
        console.log(formData);

        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // validation 
        let isValid = true;
        if (formDataObject.full_name.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                full_name: 'Full Name is Required',
            }));
            isValid = false;
        }

        if (formDataObject.Email.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                Email: 'Email is Required',
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

        if (formDataObject.user_role.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                user_role: 'User Role is Required',
            }));
            isValid = false;
        }

        // Start proccsing image 
        const profilePictureFile = formData.get("profile_pic");
        if (profilePictureFile.name.length !== 0) {
            setProfilePic(profilePictureFile);
        }
        let isImageValid = false;
        if (profilePic.name) {
            // image validation 
            if (profilePic.size > 1048576) {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    profile_pic: 'Max 1MB file can Upload !',
                }));
                isValid = false;
            }
            else if (!['image/jpeg', 'image/png', 'image/gif'].includes(profilePic.type)) {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    profile_pic: 'Please Select PNG or JPG !',
                }));
                isValid = false;
            } else {
                isImageValid = true;
            }
        }
        if (isImageValid) {
            formDataObject.user_image = profilePic;
        }
        else {
            formDataObject.user_image = '';
        }
        delete formDataObject.profile_pic;



        // end proccsing image 

        // After validation ok then work it 
        if (isValid) {

            const responseApi = await authApi.signup(formDataObject);

            if (responseApi.status) {
                console.log("Well, Data is successfylly updated");
            }
            console.log(formDataObject);
        }


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
                                <input type="hidden" name="user_role" value={type} />

                                {
                                    type === 'user' && <UserSignUp setProfilePic={setProfilePic} errorMsg={errorMsg} />
                                }
                                {
                                    type === 'contributor' && <ContributerSignUp setProfilePic={setProfilePic} errorMsg={errorMsg} />
                                }
                                {
                                    type === 'researcher' && <ResearcherSignUp setProfilePic={setProfilePic} errorMsg={errorMsg} />
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