/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api';
import Loader from '../../components/ui/Loader';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import useAuth from '../../hooks/UseAuth';
import useLoading from '../../hooks/useLoading';
import ScrollToTop from '../../utils/RouteChange';

const PasswordChange = () => {
    const navigate = useNavigate();
    const { handleLogout } = useAuth();
    const { setIsLoading } = useLoading();
    useEffect(() => {
        document.title = "Change Password - Longevity Catalyst";
    }, []);

    ScrollToTop();

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const mes = {};
    const [errorMsg, setErrorMsg] = useState(mes);
    const formRef = useRef(null);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const togglePasswordVisibility = (type) => {
        switch (type) {
            case 'oldPassword':
                setShowOldPassword(prevState => !prevState);
                break;
            case 'newPassword':
                setShowNewPassword(prevState => !prevState);
                break;
            case 'confirmPassword':
                setShowConfirmPassword(prevState => !prevState);
                break;
            default:
                break;
        }
    };

    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    useEffect(() => {
        if (Object.keys(errorMsg).length !== 0) {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }

    }, [errorMsg]);

    const handelChangePassword = async (e) => {
        e.preventDefault();
        setErrorMsg({});
        const formData = new FormData(e.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        // validation 
        let isValid = true;
        if (formDataObject.oldPassword.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                oldPassword: 'Current Password is Required',
            }));
            isValid = false;
        }
        if (formDataObject.newPassword.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                newPassword: 'New Password is Required',
            }));
            isValid = false;
        }
        if (formDataObject.confirmPassword.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                confirmPassword: 'Confirm Password is Required',
            }));
            isValid = false;
        } else {
            if (formDataObject.newPassword !== formDataObject.confirmPassword) {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    confirmPassword: 'Confirm Password does not match',
                }));
                isValid = false;
            }
        }

        if (isValid) {
            try {
                setIsLoading(true);
                const response = await authApi.changlePassword(formDataObject);

                const getError = response.error;

                if (getError) {
                    toast.error(getError.data.message);
                } else if (response?.data?.success) {
                    toast.success('Password Updated');
                    handleLogout();
                } else if (response?.error?.status === 400) {
                    toast.warning('Old password is incorrect');
                }
            } catch (error) {
                toast.error('Password is incorrect');
            } finally {
                setIsLoading(false);
            }
            setIsLoading(false);
        }
    }

    const handelChangePasswordCancle = () => {
        navigate('/dashboard/home');
    }

    return (
        <>
            <Loader />
            <section className="full_widht_auth_section">
                <div className="container">
                    <div className="dashboard">
                        <DashboardMenu isActiveMenu={isActiveMenu} />
                        <div className="dashboard_add_project">
                            {/* <!-- Add Project head --> */}
                            <div className="add_project_head">
                                <button className='dasMenuBtn' onClick={handelDashMenu}>
                                    <AiOutlineMenuUnfold />
                                </button>
                                <h3 className="title">Change Password</h3>
                            </div>

                            <form onSubmit={handelChangePassword} ref={formRef} className="add_project_form">

                                {/* <!-- Single Input --> */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="oldPassword">
                                            Current Password
                                            <span>*</span>
                                        </label>
                                    </div>
                                    <div className='list_input list_input_pass'>
                                        <input
                                            className={errorMsg.oldPassword ? 'border-warring' : ''}
                                            type={showOldPassword ? 'text' : 'password'}
                                            name="oldPassword"
                                            id="oldPassword"
                                            autoComplete='off'
                                            placeholder="Type Current Password"
                                        />
                                        <button type='button' className='password-toggle-btn' onClick={() => togglePasswordVisibility('oldPassword')}>
                                            {showOldPassword ? <RiEyeCloseFill /> : <RiEyeFill />} {/* Show/hide eye icons */}
                                        </button>
                                        {errorMsg.oldPassword && <div className='error-msg'>{errorMsg.oldPassword}</div>}
                                    </div>
                                </div>
                                <hr className='inputhr' />
                                {/* <!-- Single Input --> */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="newPassword">
                                            New Password
                                            <span>*</span>
                                        </label>
                                    </div>
                                    <div className='list_input list_input_pass'>
                                        <input
                                            className={errorMsg.newPassword ? 'border-warring' : ''}
                                            type={showNewPassword ? 'text' : 'password'}
                                            name="newPassword"
                                            id="newPassword"
                                            placeholder="Type New Password"
                                        />
                                        <button type='button' className='password-toggle-btn' onClick={() => togglePasswordVisibility('newPassword')}>
                                            {showNewPassword ? <RiEyeCloseFill /> : <RiEyeFill />} {/* Show/hide eye icons */}
                                        </button>
                                        {errorMsg.newPassword && <div className='error-msg'>{errorMsg.newPassword}</div>}
                                    </div>
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="confirmPassword">
                                            Confirm Password
                                            <span>*</span>
                                        </label>
                                    </div>
                                    <div className='list_input list_input_pass'>
                                        <input
                                            className={errorMsg.confirmPassword ? 'border-warring' : ''}
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            placeholder="Type Confirm Password"
                                        />
                                        <button type='button' className='password-toggle-btn' onClick={() => togglePasswordVisibility('confirmPassword')}>
                                            {showConfirmPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
                                        </button>
                                        {errorMsg.confirmPassword && <div className='error-msg'>{errorMsg.confirmPassword}</div>}
                                    </div>
                                </div>

                                <hr className='inputhr' />

                                <div className="form_submit al_submit_button">
                                    <button type="reset" className="btn btn-submit btn-light" onClick={handelChangePasswordCancle}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-submit btn-dark">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PasswordChange;