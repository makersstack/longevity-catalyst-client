import React from 'react';
import DargFileAttech from '../common/DargFileAttech';

const UserSignUp = () => {
    return (
        <>
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
                <label htmlFor="propic">Profile Picture </label>
                <DargFileAttech />
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
        </>
    );
};

export default UserSignUp;