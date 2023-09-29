import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../utils/RouteChange';

const UserSignUp = () => {
    ScrollToTop();
    const handalSubmitSignUp = (e) => {
        e.preventDefault();
        alert("Need to Work on It ");
    }
    return (
        <>
            {/* <!-- ST:- Auth header menu  --> */}
            <section className="full_with_other_menu">
                <div className="container">
                    <div className="others_menu">
                        <ul>
                            <li>
                                <Link to='/'> [i] Home</Link>
                            </li>
                            <li>

                                <Link to='/about'> [i] About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- ED:- Auth header menu  --> */}
            {/* <!-- ST:- sign up form  --> */}
            <section className="full_widht_auth_section">
                <div className="container">
                    <div className="auth_area">
                        <form onSubmit={handalSubmitSignUp} action="#" method="post">
                            <h4>Sign Up</h4>
                            <p>Welcome back! Please enter your details.</p>
                            <div className="auth_box padding_top-30">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className="auth_box">
                                <label htmlFor="Email">Email</label>
                                <input type="email" name="Email" id="Email" placeholder="Email" />
                            </div>
                            <div className="auth_box">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Type Your password"
                                />
                            </div>

                            <div className="auth_box">
                                <label htmlFor="propic">Profile Picture</label>
                                <label htmlFor="img_up" className="drag_imge_input">
                                    <input type="file" id="img_up" />
                                    <img src="assets/img/Featured-icon.svg" alt="" />
                                    <p><span>Click to upload</span> or drag and drop</p>
                                    <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                                </label>
                            </div>

                            <div className="auth_box">
                                <label htmlFor="bio">Bio</label>
                                <textarea
                                    name="bio"
                                    id="bio"
                                    rows="6"
                                    placeholder="I'm a Product Designer based in Dhaka, Bangladesh. I specialize in UX/UI design, brand strategy, and Webflow development.
                  "
                                ></textarea>
                                <p>275 characters left</p>
                            </div>

                            <div className="auth_box">
                                <label htmlFor="compay">Affiliation / Company / Institution</label>
                                <input
                                    type="text"
                                    name="compay"
                                    id="compay"
                                    placeholder="Company"
                                />
                            </div>

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
            {/* <!-- ED:- sign up form  --> */}
        </>
    );
};

export default UserSignUp;