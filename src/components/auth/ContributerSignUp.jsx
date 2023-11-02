import React from 'react';
import CheckBoxButton from '../common/CheckBoxButton';
import DargFileAttech from '../common/DargFileAttech';

const ContributerSignUp = ({ errorMsg, setProfilePic }) => {

    const SkillCheckBox = [
        { id: 1, inputName: 'python', labelText: 'Python' },
        { id: 2, inputName: 'machine-learning', labelText: 'Machine learning' },
        { id: 3, inputName: 'molecular-modeling', labelText: 'Molecular modeling' },

    ];

    return (
        <>
            <div className="auth_box padding_top-30">
                <label htmlFor="company">Full Name</label>
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
                <label htmlFor="name">Username</label>
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
                <label>Skills</label>


                {
                    SkillCheckBox.map(sk => <CheckBoxButton key={sk.id} checkData={sk} />)
                }

            </div>

            <div className="auth_box">
                <label htmlFor="compay">Company / Institution</label>
                <input
                    type="text"
                    name="compay"
                    id="compay"
                    placeholder="Company"
                />
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
                <label htmlFor="propic">Profile Picture </label>
                <DargFileAttech errorMsg={errorMsg} setProfilePic={setProfilePic} />
            </div>

            <div className="auth_box">
                <label htmlFor="github">Github Profile</label>
                <input
                    type="text"
                    name="github"
                    id="github"
                    placeholder="https://github.com/alifur-rahman/"
                />
            </div>


        </>
    );
};

export default ContributerSignUp;