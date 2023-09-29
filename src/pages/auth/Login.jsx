import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from '../../utils/RouteChange';

const Login = () => {
    ScrollToTop();

    const handalSubmitLogin = (e) => {
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
                                <Link to="/sign-up/user"> &nbsp; Sign Up</Link>
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