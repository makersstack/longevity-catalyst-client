import React from 'react';

const UserSignUp = ({ errorMsg }) => {
    return (
        <>
            <div className="auth_box padding_top-30">
                <label htmlFor="company">Full Name</label>
                <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="Full Name"
                />
            </div>
            <div className="auth_box">
                <label htmlFor="name">User Name</label>
                <input
                    className={errorMsg.name ? 'border-warring' : ''}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User Name"
                />
                {errorMsg.name && <div className='error-msg'>{errorMsg.name}</div>}
            </div>
            <div className="auth_box">
                <label htmlFor="Email">Email</label>
                <input className={errorMsg.Email ? 'border-warring' : ''} type="email" name="email" id="Email" placeholder="Email" />
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
                {/* <DargFileAttech /> */}
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
                <label htmlFor="company">Affiliation / Company / Institution</label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company"
                />
            </div>
        </>
    );
};

export default UserSignUp;