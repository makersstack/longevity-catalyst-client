import React from 'react';
import DargFileAttech from '../common/DargFileAttech';

const UserSignUp = ({ errorMsg }) => {
    return (
        <>
            <div className="auth_box padding_top-30">
                <label htmlFor="name">Full Name</label>
                <input
                    className={errorMsg.name ? 'border-warring' : ''}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                />
                {errorMsg.name && <div className='error-msg'>{errorMsg.name}</div>}
            </div>
            <div className="auth_box">
                <label htmlFor="Email">Email</label>
                <input className={errorMsg.Email ? 'border-warring' : ''} type="email" name="Email" id="Email" placeholder="Email" />
                {errorMsg.Email && <div className='error-msg'>{errorMsg.Email}</div>}
            </div>
            <div className="auth_box">
                <label htmlFor="password">Password</label>
                <input
                    className={errorMsg.password ? 'border-warring' : ''}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Type Your password"
                />
                {errorMsg.password && <div className='error-msg'>{errorMsg.password}</div>}
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