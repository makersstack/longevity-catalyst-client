import React from 'react';
import { HiCheck } from 'react-icons/hi2';

const ContributerSignUp = () => {
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
                <label>Skills</label>
                <label className="plan basic-plan" htmlFor="sk-opt1">
                    <input type="checkbox" name="skill" id="sk-opt1" />
                    <div className="plan-content">
                        <div className="plan-details">
                            <div className="plan-checked-icon">
                                <span className=' check_icon '>
                                    < HiCheck />
                                </span>
                            </div>
                            <p>Python</p>
                        </div>
                    </div>
                </label>
                <label className="plan basic-plan" htmlFor="sk-opt2">
                    <input type="checkbox" defaultChecked={true} name="skill" id="sk-opt2" />
                    <div className="plan-content">
                        <div className="plan-details">
                            <div className="plan-checked-icon">
                                <span className=' check_icon '>
                                    < HiCheck />
                                </span>

                            </div>
                            <p>Machine learning</p>
                        </div>
                    </div>
                </label>
                <label className="plan basic-plan" htmlFor="sk-opt3">
                    <input type="checkbox" name="skill" id="sk-opt3" />
                    <div className="plan-content">
                        <div className="plan-details">
                            <div className="plan-checked-icon">
                                <span className=' check_icon '>
                                    < HiCheck />
                                </span>
                            </div>
                            <p>Molecular modeling</p>
                        </div>
                    </div>
                </label>
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
                <label htmlFor="propic">Profile Picture</label>
                <label htmlFor="img_up" className="drag_imge_input">
                    <input type="file" name='profile_pic' id="img_up" />
                    <img src="assets/img/Featured-icon.svg" alt="" />
                    <p><span>Click to upload</span> or drag and drop</p>
                    <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </label>
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