import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { authApi } from '../../api';
import '../../assets/styles/authPages.css';
import AuthHeader from '../../components/auth/AuthHeader';
import ContributerSignUp from '../../components/auth/ContributerSignUp';
import ResearcherSignUp from '../../components/auth/ResearcherSignUp';
import UserSignUp from '../../components/auth/UserSignUp';
import Loader from '../../components/ui/Loader';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';
import ScrollToTop from '../../utils/routeChange';
import { validatePassword } from '../../utils/utilitis';
import PageNotFound from '../PageNotFound';

const SignUp = () => {
    const { type } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const { setIsLoading } = useLoading();
    const [profilePic, setProfilePic] = useState({});

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/user/dashboard');
        }
    }, [navigate, isLoggedIn]);

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

    // eslint-disable-next-line no-unused-vars
    const [skillValue, setSkillValues] = useState([]);


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

        if (formDataObject.full_name.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                full_name: 'Full Name is Required',
            }));
            isValid = false;
        }

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
                username: 'Username is Required',
            }));
            isValid = false;
        }
        const passwordError = validatePassword(formDataObject.password);
        if (passwordError) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                password: passwordError,
            }));
            isValid = false;
        }

        if (formDataObject.role.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                role: 'User Role is Required',
            }));
            isValid = false;
        }

        // Start proccsing image 
        const profilePictureFile = formData.get("profileImage");

        if (profilePictureFile.name.length !== 0) {
            setProfilePic(profilePictureFile);
        }
        let isImageValid = false;
        if (profilePic.name) {

            if (!['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(profilePic.type)) {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    profileImage: 'Please Select PNG/JPG/GIF/SVG file !',
                }));
                isValid = false;
            }
            else if (profilePic.size > 1048576) {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    profileImage: 'Max 1MB file can Upload !',
                }));
                isValid = false;
            }
            else {
                isImageValid = true;
            }
        }
        if (isImageValid) {
            formDataObject.profileImage = profilePic;
            formData.append('profileImage', profilePic);
        }
        else {
            formDataObject.profileImage = '';
        }
        delete formDataObject.profileImage;

        if (isValid) {
            try {
                setIsLoading(true);
                const response = await authApi.signup(formData);
                const getError = response.error;
                if (getError) {
                    toast.error(getError.data.message);
                } else {
                    if (response.data.success) {
                        navigate('/login');
                        toast.success("Sign Up Successfully Done !");
                    } else {
                        toast.error("Something went wrong");
                    }
                }
            } catch (error) {
                console.error('Error during signup:', error);
                toast.error("An error occurred during sign up.");
            } finally {
                setIsLoading(false);
            }
        } 

    }


    if (type === 'user' || type === 'contributor' || type === 'researcher') {
        return (
            <>
                <Loader />
                <AuthHeader />
                <section className="full_widht_auth_section">
                    <div className="container">
                        <div className="auth_area">
                            <form onSubmit={handalSubmitSignUp} ref={formRef} encType="multipart/form-data">
                                <h4>Sign Up as a {type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                                <p>Welcome back! Please enter your details.</p>
                                <input type="hidden" name="role" value={type} />

                                {
                                    type === 'user' && <UserSignUp setProfilePic={setProfilePic} errorMsg={errorMsg} />
                                }
                                {
                                    type === 'contributor' && <ContributerSignUp setProfilePic={setProfilePic} errorMsg={errorMsg} setSkillValues={setSkillValues} />
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
            <PageNotFound showInfoText="404 Page Not Found" />
        );
    }

};

export default SignUp;