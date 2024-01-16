import React, { useState } from 'react';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import DargFileAttech from '../common/DargFileAttech';

const UserSignUp = ({ errorMsg, setProfilePic }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = (type) => {
        switch (type) {
            case 'Password':
                setShowPassword(prevState => !prevState);
                break;
            default:
                break;
        }
    };
    const [showBioChar, setShowBioChar] = useState(275);
    const [showBioCharMsg, setShowBioCharMsg] = useState(`${showBioChar} characters left`);

    const handelBioKeyUping = (e) => {
        const { value } = e.target;
        const bioLength = value.length;
        setShowBioChar(275 - bioLength);
        if(showBioChar < 0){
            setShowBioCharMsg(`<span class="error-msg">Over Characters. Max 275 Characters</span>`);
        }else{
            setShowBioCharMsg(`${showBioChar} characters left`);
        }
    }


    return (
        <>
            <div className="auth_box padding_top-30">
                <label htmlFor="full_name">Full Name</label>
                <input
                    className={errorMsg.full_name ? 'border-warring' : ''}
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="Full Name"
                />
                {errorMsg.full_name && <div className='error-msg'>{errorMsg.full_name}</div>}
            </div>
            <div className="auth_box">
                <label htmlFor="username">Username</label>
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
                <label htmlFor="email">Email</label>
                <input className={errorMsg.email ? 'border-warring' : ''} type="email" name="email" id="email" placeholder="Email" />
                {errorMsg.email && <div className='error-msg'>{errorMsg.email}</div>}
            </div>
            <div className="auth_box">
                <label htmlFor="password">Password</label>
                <div className="list_input_pass">
                    <input
                        className={errorMsg.password ? 'border-warring' : ''}
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        id="password"
                        placeholder="Type Your password"
                        autoComplete='true'
                    />
                    <button type='button' className='password-toggle-btn' onClick={() => togglePasswordVisibility('Password')}>
                        {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
                    </button>
                    {errorMsg.password && <div className='error-msg'>{errorMsg.password}</div>}
                </div>
            </div>


            <div className="auth_box">
                <label htmlFor="propic">Profile Picture </label>
                <DargFileAttech errorMsg={errorMsg} setProfilePic={setProfilePic} />
            </div>

            <div className="auth_box">
                <label htmlFor="bio">Bio</label>
                <textarea
                    name="bio"
                    onChange={handelBioKeyUping}
                    id="bio"
                    rows="6"
                    placeholder="I'm a Product Designer based in Dhaka, Bangladesh. I specialize in UX/UI design, brand strategy, and Webflow development.
                      "
                ></textarea>
                {errorMsg.bio && <div className='error-msg'>{errorMsg.bio}</div>}
                <div dangerouslySetInnerHTML={{ __html: showBioCharMsg }} />
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