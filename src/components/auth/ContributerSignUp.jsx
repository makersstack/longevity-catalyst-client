/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import skillApi from '../../api/SkillApi';
import DargFileAttech from '../common/DargFileAttech';

const ContributerSignUp = ({ errorMsg, setProfilePic, setSkillValues }) => {
    const [skillCheckBox, setSkillCheckBox] = useState([]);
    
    useEffect(() => {
        const fetchSkills = async () => {
            const response = await skillApi.getAllSkills();
            const skills = response.data.data;

            // Set the fetched skills to state
            setSkillCheckBox(skills);
        };
        fetchSkills();
    }, []);

    // For pass the skills
    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setSkillValues(isChecked)
    };

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
                <input
                    className={errorMsg.password ? 'border-warring' : ''}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Type Your password"
                />
                {errorMsg.password && <div className='error-msg'>{errorMsg.password}</div>}
            </div>

            {
                skillCheckBox.length > 0 && (
                    <div className="auth_box">
                        <label>Skills</label>
                        {
                            skillCheckBox.map((checkData) => (
                                <label key={checkData.id} className={`plan basic-plan`} htmlFor={`ch-${checkData.id}-${checkData.id}`}>
                                    <input type="checkbox" name={`skillId_${checkData.id}`} id={`ch-${checkData.id}-${checkData.id}`} onChange={handleCheckboxChange} />
                                    <div className="plan-content">
                                        <div className="plan-details">
                                            <div className="plan-checked-icon">
                                                <span className=' check_icon '>
                                                    < HiCheck />
                                                </span>
                                            </div>
                                            <p>{checkData.skillName}</p>
                                        </div>
                                    </div>
                                </label>
                            ))
                        }
                    </div>
                )
            }

            <div className="auth_box">
                <label htmlFor="company">Company / Institution</label>
                <input
                    type="text"
                    name="company"
                    id="company"
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