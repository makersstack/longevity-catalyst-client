import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { authApi } from '../../api';
import CheckBoxButton from '../../components/common/CheckBoxButton';
import DargFileAttech from '../../components/common/DargFileAttech';
import ImageTagWithFallback from '../../components/common/ImageTagWithFallback';
import TextEditor from '../../components/common/TextEditor';
import Loader from '../../components/ui/Loader';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import { avatersFor } from '../../constants/avaters';
import useAuth from '../../hooks/useAuth';
import useLoading from '../../hooks/useLoading';
import ScrollToTop from '../../utils/routeChange';

const EditUserProfile = () => {
    const { setIsLoading } = useLoading();
    useEffect(() => {
        document.title = "Update Profile - Longevity Catalyst";
    }, []);

    ScrollToTop();

    const { userInfo, setUserInfo } = useAuth();
    const SkillCheckBox = [
        { id: 1, inputName: 'python', labelText: 'Python', planClass: 'input-plan' },
        { id: 2, inputName: 'machine-learning', labelText: 'Machine learning', planClass: 'input-plan' },
        { id: 3, inputName: 'molecular-modeling', labelText: 'Molecular modeling', planClass: 'input-plan' },

    ];

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const mes = {};
    const [errorMsg, setErrorMsg] = useState(mes);
    const formRef = useRef(null);
    const [resetPreview, setResetPreview] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(errorMsg).length !== 0) {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }

    }, [errorMsg]);

    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }


    const [bioText, setBioText] = useState('');
    const [profilePic, setProfilePic] = useState({});


    const handelProfileSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setErrorMsg({});
        const formData = new FormData(e.target);
        formData.append('bio', bioText);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // validation 
        let isValid = true;
        if (formDataObject.full_name.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                full_name: 'Full Name is Required',
            }));
            isValid = false;
        }

        // Start proccsing image 
        const profilePictureFile = formData.get("profileImage");

        if (profilePictureFile.name.length !== 0) {
            setProfilePic(profilePictureFile);
        }
        let isImageValid = false;
        if (profilePic.name) {
            // image validation 

            if (!['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(profilePic.type)) {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    profileImage: 'Please Select PNG/JPG/GIF/SVG file !',
                }));
                isValid = false;
            }
            else if (profilePic.size > 1048576) {
                setErrorMsg(prevErrorMsg => ({
                    ...prevErrorMsg,
                    profileImage: 'Max 1MB file can Upload !',
                }));
                isValid = false;
            }
            else {
                isImageValid = true;
            }
        }
        if (isImageValid) {
            formDataObject.profileImage = profilePic;
            formData.append('profileImage', profilePic);
        }
        else {
            formDataObject.profileImage = '';
        }
        delete formDataObject.profileImage;


        if (isValid) {
            setIsLoading(true);
            const response = await authApi.updateUser(userInfo.username, formData);
            const getError = response.error;
            if (getError) {
                toast.error(getError.data.message);
            }
            else {
                const { data } = response;
                if (data.success) {
                    toast.success(data.message);
                    setUserInfo(response.data.data);
                    setResetPreview(true);
                } else {
                    toast.error("Something went wrong");
                }
            }
            setResetPreview(false);
            setIsLoading(false);
        }
    }

    return (
        <>
            <Loader />
            <section className="full_widht_auth_section">
                <div className="container">
                    <div className="dashboard">
                        {/* <!-- Dashboard Menu --> */}
                        <DashboardMenu isActiveMenu={isActiveMenu} />
                        {/* <!-- Add Project --> */}
                        <div className="dashboard_add_project">
                            {/* <!-- Add Project head --> */}
                            <div className="add_project_head">
                                <button className='dasMenuBtn' onClick={handelDashMenu}>
                                    <AiOutlineMenuUnfold />
                                </button>
                                <h3 className="title">Update Profile</h3>
                            </div>

                            <form onSubmit={handelProfileSubmit} ref={formRef} encType="multipart/form-data" className="add_project_form">

                                {/* <!-- Single Input --> */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="full_name">
                                            Full Name
                                        </label>
                                    </div>
                                    <div className='list_input'>
                                        <input
                                            className={errorMsg.full_name ? 'border-warring' : ''}
                                            type="text"
                                            name="full_name"
                                            id="full_name"
                                            placeholder="Full Name"
                                            defaultValue={userInfo?.full_name}
                                        />
                                        {errorMsg.full_name && <div className='error-msg'>{errorMsg.full_name}</div>}
                                    </div>
                                </div>
                                <hr className='inputhr' />
                                {/* <!-- Single Input --> */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="email">
                                            Email address
                                        </label>
                                    </div>
                                    <div className='list_input'>
                                        <input
                                            className={errorMsg.email ? 'border-warring' : ''}
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email address"
                                            readOnly
                                            disabled
                                            value={userInfo?.email}
                                        />
                                        {errorMsg.email && <div className='error-msg'>{errorMsg.email}</div>}
                                    </div>
                                </div>
                                <hr className='inputhr' />
                                {/* Single Input  */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="skill">
                                            Skills
                                        </label>
                                    </div>
                                    <div className='list_input'>
                                        {
                                            SkillCheckBox.map(sk => <CheckBoxButton key={sk.id} checkData={sk} />)
                                        }
                                        {errorMsg.skill && <div className='error-msg'>{errorMsg.skill}</div>}
                                    </div>

                                </div>
                                {/* Single Input  */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="bio">
                                            Bio
                                        </label>
                                        <small>Write a short introduction.</small>
                                    </div>
                                    <div className='list_input'>
                                        <TextEditor defaultContent={userInfo?.bio} setBioText={setBioText} />
                                        <p className='input_hint'>275 characters left</p>
                                    </div>
                                    {errorMsg.bio && <div className='error-msg'>{errorMsg.bio}</div>}
                                </div>
                                {/* Single Input  */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="pro_pic">
                                            Profile Picture
                                        </label>
                                        <small>This will be displayed on your profile.</small>
                                    </div>
                                    <div className='list_input upload_avater_withOld'>
                                        <div className="show_old_avater">
                                            <ImageTagWithFallback src={userInfo?.profileImage} fallbackSrc={avatersFor.user} alt={"userProfile"} />
                                        </div>
                                        <DargFileAttech errorMsg={errorMsg} resetPreview={resetPreview} setProfilePic={setProfilePic} />
                                    </div>
                                    {errorMsg.pro_pic && <div className='error-msg'>{errorMsg.pro_pic}</div>}
                                </div>

                                {/* <!-- Single Input --> */}
                                <div className="form_control list_input_box">
                                    <div className='list_lebel'>
                                        <label htmlFor="company">
                                            Company
                                        </label>
                                    </div>
                                    <div className='list_input'>
                                        <input
                                            className={errorMsg.github ? 'border-warring' : ''}
                                            type="text"
                                            name="company"
                                            id="company"
                                            placeholder="http://gitthub.com"
                                            defaultValue={userInfo?.company}
                                        />
                                        {errorMsg.github && <div className='error-msg'>{errorMsg.github}</div>}
                                    </div>
                                </div>
                                <hr className='inputhr' />

                                <div className="form_submit al_submit_button">
                                    <button type="reset" className="btn btn-submit btn-light">
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

export default EditUserProfile;