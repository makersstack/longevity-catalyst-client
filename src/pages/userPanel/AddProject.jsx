import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { projectApi } from '../../api/ProjectApi';
import DatePickerInput from '../../components/DatePickerInput';
import Loader from '../../components/Loader';
import RadioButton from '../../components/common/RadioButton';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import { useLoading } from '../../contex/LoadingProvider';
import { ProjectHardDeadlineOption, expectedTimeProjectOption, haveProjectBudgetOption, initialProFormData, onsiteOption, projectExperienceOption, projectNatureOption, projectTypeOption, readyToStartOption } from '../../data/projectData';
import ScrollToTop from '../../utils/RouteChange';

const AddProject = () => {

    const { isLoading, setIsLoading } = useLoading();
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/user/dashboard';

    ScrollToTop();

    const [formData, setFormData] = useState(initialProFormData);

    const [errors, setErrors] = useState({});
    const handleRadioChange = (fieldName, newValue) => {
        setFormData({
            ...formData,
            [fieldName]: newValue,
        });

        validateField(fieldName, newValue);
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked, files } = event.target;

        const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });

        validateField(name, newValue);
    };

    const validateField = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
            case 'projectTitle':
                error = value.trim().length === 0 ? 'Project Title is required' : '';
                break;
            case 'affiliation':
                error = value.trim().length === 0 ? 'Project affiliation is required' : '';
                break;
            case 'projectDescription':
                error = value.trim().length <= 5 ? 'Project Description must be at least 250 characters' : '';
                break;
            default:
                break;
        }
        setErrors({
            ...errors,
            [fieldName]: error,
        });
    }

    const handleBlur = (event) => {
        const { name, value } = event.target;
        validateField(name, value);
    };

    const handelProjectSubmit = async (event) => {
        event.preventDefault();

        if (!formData.projectTitle || !formData.affiliation || !formData.projectDescription) {
            toast.error('Please fill in all required fields.');

            setFormData(initialProFormData);
            return;
        }

        const hasErrors = Object.values(errors).some((error) => error !== '');

        
        if (!hasErrors) {
            try {
                console.log(formData);

                setIsLoading(false);
                const promise = projectApi.createProject(formData);
                await toast.promise(promise, {
                    loading: 'Post...',
                    success: (response) => {
                        if (response?.data?.success) {
                            setIsLoading(false);
                            navigate(from, { replace: true });
                            return 'Sign In Successfully Done !';
                        } else {
                            return 'Unexpected error occurred';
                        }
                    },
                    error: (error) => {
                        if (error.response) {
                            return "Error!"
                        }
                    }
                })
                // toast.success("Post Has bin successful!");
            } catch (error) {
                setIsLoading(false);
            }
        } else {
            toast.error('Please fill in all required fields 2.');
        }
    }


    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    return (
        <section className="full_widht_auth_section">
            {isLoading && <Loader />}
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
                            <h3 className="title">Add Project</h3>
                        </div>
                        <form onSubmit={handelProjectSubmit} className="add_project_form">
                            <div className="two_columns">
                                <div className="form_control">
                                    <label htmlFor="projectTitle">
                                        What is the name of your project?<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={errors.projectTitle ? 'border-warring' : ''}
                                        name="projectTitle"
                                        id="projectTitle"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder="Project Name"
                                    />
                                    {errors.projectTitle && <p className='error-msg'>{errors.projectTitle}</p>}
                                </div>
                                <div className="form_control">
                                    <label htmlFor="user_name"> What is your name?<span>*</span> </label>
                                    <input type="text" id="user_name" placeholder="Name" readOnly />
                                </div>
                            </div>
                            <div className="two_columns">
                                <div className="form_control">
                                    <label htmlFor="user_email"> What is your email?<span>*</span> </label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        placeholder="Email"
                                        disabled
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="affiliation">
                                        What is your affiliation?<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={errors.affiliation ? 'border-warring' : ''}
                                        name="affiliation"
                                        id="affiliation"
                                        placeholder="Affiliation"
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.affiliation && <p className='error-msg'>{errors.affiliation}</p>}
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="projectDescription">
                                    Provide a brief description of your project.<span>*</span>
                                </label>
                                <textarea
                                    name="projectDescription"
                                    className={errors.projectDescription ? 'border-warring' : ''}
                                    id="projectDescription"
                                    rows="2"
                                    placeholder="Description"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {errors.projectDescription && <p className='error-msg'>{errors.projectDescription}</p>}
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="keywords">
                                        Provide up to (5) keywords engineers can use to find your
                                        project.<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="keywords"
                                        id="keywords"
                                        placeholder="keywords"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label>
                                        Will this project require any onsite work?
                                    </label>
                                    <div className="onsite_check">
                                        {onsiteOption.map((singleData) => (
                                            <RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Form Sub Title Text --> */}
                            <p className="form_subtitle">
                                Please provide your affiliation's address.
                            </p>
                            {/* <!-- Single Input --> */}
                            <div className="two_columns">
                                <div className="form_control">
                                    <label htmlFor="address"> Address </label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="65 Hansen Way"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="addressLine">Address Line 2 </label>
                                    <input
                                        type="text"
                                        name="addressLine"
                                        id="addressLine"
                                        placeholder="Apartment 4"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="city_town">City / Town </label>
                                    <input
                                        type="text"
                                        name="city_town"
                                        id="city_town"
                                        placeholder="Palo Alto"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="state_region_province">State / Region / Province </label>
                                    <input
                                        type="text"
                                        name="state_region_province"
                                        id="testate_region_provincext"
                                        placeholder="California"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="zip_code">Zip / Post Code </label>
                                    <input
                                        type="number"
                                        name="zip_code"
                                        id="zip_code"
                                        placeholder="94304"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="country">Country </label>
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        placeholder="United States"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        Is this an individual or team project?
                                        <span>*</span>
                                    </label>
                                    {projectTypeOption.map((singleData) => (
                                        <RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                    ))}
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label > Describe the nature of your project. </label>
                                    {projectNatureOption.map((singleData) => (<RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                    ))}

                                </div>
                            </div>

                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        How much experience will this project require? <span>*</span>
                                    </label>
                                    {projectExperienceOption.map((singleData) => (<RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                    ))}
                                </div>

                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="required_skill_list"
                                    >List the skills that this project will require.
                                    </label>
                                    <textarea
                                        name="required_skill_list"
                                        id="required_skill_list"
                                        rows="2"
                                        placeholder="Answer here.."
                                        onChange={handleInputChange}
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="p_deadline"> What is your project deadline? </label>
                                    <DatePickerInput id='p_deadline' name='p_deadline' />
                                </div>

                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label>
                                        Is there a hard deadline for this project ? <span>*</span>
                                    </label>
                                    {ProjectHardDeadlineOption.map((singleData) => (
                                        <RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                    ))}
                                </div>
                            </div>


                            <div className="two_columns">

                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        How long do you expect this project to take ?
                                    </label>
                                    {expectedTimeProjectOption.map((singleData) => (
                                        <RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                    ))}
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        Do you have a budget for this project or will it rely on
                                        volunteer work / platform sponsorship?<span>*</span>
                                    </label>

                                    {haveProjectBudgetOption.map((singleData) => (
                                        <RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                    ))}
                                </div>

                            </div>

                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="expected_cost"
                                    >What is your budget or the expected cost of this project ?
                                    </label>
                                    <textarea
                                        name="answer"
                                        id="expected_cost"
                                        rows="2"
                                        placeholder="Answer here.."
                                        onChange={handleInputChange}
                                    >
                                    </textarea>
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        What will you be ready to start this project?
                                    </label>
                                    {readyToStartOption.map((singleData) => (
                                        <RadioButton key={singleData.key} radionData={singleData} onRadioChange={(newValue) => handleRadioChange(singleData.inputName, newValue)} />
                                    ))}
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="final_deliverable_details">
                                        Please describe the final deliverable in as much detail as
                                        possible.
                                    </label>
                                    <textarea
                                        name="final_deliverable_details"
                                        id="final_deliverable_details"
                                        rows="2"
                                        placeholder="Answer here.."
                                        onChange={handleInputChange}
                                    >
                                    </textarea>
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="relevant_link"> Provide a link to any relevant data. </label>
                                    <input name="relevant_link" id="relevant_link" placeholder="https://" onChange={handleInputChange} />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="relevant_literature_link">
                                        Provide links to any relevant literature that may help your
                                        project match.
                                    </label>
                                    <textarea
                                        name="relevant_literature_link"
                                        id="relevant_literature_link"
                                        rows="2"
                                        placeholder="Answer here.."
                                        onChange={handleInputChange}
                                    >
                                    </textarea>
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="other_included">
                                        Anything else that should be included with your project's
                                        description?
                                    </label>
                                    <textarea
                                        name="other_included"
                                        id="other_included"
                                        rows="2"
                                        placeholder="Answer here.."
                                        onChange={handleInputChange}
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <div className="form_submit al_submit_button">
                                <button type="submit" className="btn btn-submit btn-dark">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AddProject;