import React from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthHeader from '../../components/auth/AuthHeader';
import ContributerSignUp from '../../components/auth/ContributerSignUp';
import ResearcherSignUp from '../../components/auth/ResearcherSignUp';
import UserSignUp from '../../components/auth/UserSignUp';
import ScrollToTop from '../../utils/RouteChange';
import PageNotFound from '../PageNotFound';

const SignUp = () => {
    const { type } = useParams();
    ScrollToTop();
    const handalSubmitSignUp = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        // Access the selected file using the name attribute
        const profilePictureFile = formData.get("profile_pic");
        // Check if a file was selected
        if (profilePictureFile) {
            console.log("Selected File:", profilePictureFile);

            // You can also access additional file properties, such as name, type, and size
            console.log("File Name:", profilePictureFile.name);
            console.log("File Type:", profilePictureFile.type);
            console.log("File Size (bytes):", profilePictureFile.size);
        } else {
            console.log("No file selected");
        }

        alert("Need to Work on It ");
    }
    if (type === 'user' || type === 'contributer' || type === 'researcher') {

        return (
            <>
                <AuthHeader />
                <section className="full_widht_auth_section">
                    <div className="container">
                        <div className="auth_area">
                            <form onSubmit={handalSubmitSignUp} action="#" method="post">
                                <h4>Sign Up</h4>
                                <p>Welcome back! Please enter your details.</p>

                                {
                                    type === 'user' && <UserSignUp />
                                }
                                {
                                    type === 'contributer' && <ContributerSignUp />
                                }
                                {
                                    type === 'researcher' && <ResearcherSignUp />
                                }

                                <button type="submit" className="auth_submit btn btn-dark btn-full">
                                    Sign Up
                                </button>
                                <p className="have_auth_msg">
                                    Already have an account?
                                    <Link to='/login'> &nbsp; Log In.</Link>
                                </p>
                            </form>
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