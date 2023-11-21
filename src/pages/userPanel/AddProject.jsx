import React, { useEffect, useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api';
import DatePickerInput from '../../components/DatePickerInput';
import Loader from '../../components/Loader';
import ListInput from '../../components/common/ListInput';
import RadioButton from '../../components/common/RadioButton';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import { useLoading } from '../../contex/LoadingProvider';
import { ProjectHardDeadlineOption, expectedTimeProjectOption, haveProjectBudgetOption, onsiteOption, projectExperienceOption, projectNatureOption, projectTypeOption, readyToStartOption } from '../../data/projectData';
import ScrollToTop from '../../utils/RouteChange';

const AddProject = () => {

    const { isLoading, setIsLoading } = useLoading();
    const navigate = useNavigate();
    ScrollToTop();
    const mes = {};
    const [errorMsg, setErrorMsg] = useState(mes);
    const formRef = useRef(null);

    // useEffect(() => {
    //     if (Object.keys(errorMsg).length !== 0) {
    //         if (formRef.current) {
    //             formRef.current.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     }
    // }, [errorMsg]);


    const handleLoadingState = () => {
        const body = document.querySelector('body');
        if (isLoading) {
            body.classList.add('loading_BG');
            // Add your custom code here for the loading state
        } else {
            body.classList.remove('loading_BG');
            // Add your custom code here for when loading is finished
        }
    };

    useEffect(() => {
        handleLoadingState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);


    const handleInputChange = (event) => {

        if ('alname' in event.target.dataset) {
            const name = event.target.dataset.alname;
            const value = project_keywords;
            validateField(name, value);
        } else {
            const { name, value, type, checked, files } = event.target;
            const newValue = type === 'checkbox' ? checked : type === 'file' ? files[0] : value;
            validateField(name, newValue);
        }



    };

    const validateField = (fieldName, value) => {
        let error = '';
        switch (fieldName) {
            case 'project_name':
                error = value.trim().length === 0 ? 'Project Title is required!' : '';
                break;
            case 'affiliation':
                error = value.trim().length === 0 ? 'Project affiliation is required!' : '';
                break;
            case 'project_desc':
                error = value.trim().length <= 40 ? 'Project Description must be at least 40 characters!' : '';
                break;
            case 'project_keywords':
                error = value.lists.length === 0 ? 'Project Keywords is Required!' : '';
                break;
            default:
                break;
        }
        setErrorMsg(prevErrorMsg => ({
            ...prevErrorMsg,
            [fieldName]: error,
        }));
    }

    const [project_keywords, set_project_keywords] = useState({});
    const [required_skill_list, set_required_skill_list] = useState({});
    const [expected_cost, set_expected_cost] = useState({});
    const [final_deliverable_details, set_final_deliverable_details] = useState({}); 
    const [relevant_literature_link, set_relevant_literature_link] = useState({}); 

    const handleBlur = (event) => {

        if ('alname' in event.target.dataset) {
            const name = event.target.dataset.alname;
            const value = project_keywords;
            validateField(name, value);
        } else {
            const { name, value } = event.target;
            validateField(name, value);
        }

    };
    //ED:- get onchange/onblure validation 


    const handelProjectSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg({});
        const formData = new FormData(event.target);
        // After Submit Validation 
        // Pushing other data into form data 
        if (project_keywords.lists.length !== 0) {
            formData.append('project_keywords', JSON.stringify(project_keywords.lists));
        }
        if (required_skill_list.lists.length !== 0) {
            formData.append('required_skill_list', JSON.stringify(required_skill_list.lists));
        }
        if (expected_cost.lists.length !== 0) {
            formData.append('expected_cost', JSON.stringify(expected_cost.lists));
        }
        if (final_deliverable_details.lists.length !== 0) {
            formData.append('final_deliverable_details', JSON.stringify(final_deliverable_details.lists));
        }
        if (relevant_literature_link.lists.length !== 0) {
            formData.append('relevant_literature_link', JSON.stringify(relevant_literature_link.lists));
        }

        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // validation 
        let isValid = true;
        if (formDataObject.project_name.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                project_name: 'Project Name is Required!',
            }));
            isValid = false;
        }
        if (formDataObject.affiliation.length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                affiliation: 'Affiliation is Required!',
            }));
            isValid = false;
        }
        if (formDataObject.project_desc.length < 40) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                project_desc: 'Project Description must be at least 40 characters!',
            }));
            isValid = false;
        }
        if (!('project_keywords' in formDataObject)) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                project_keywords: 'Project Keywords is Required!',
            }));
            console.log('get errror');
            isValid = false;
        }
        if (!('projecType' in formDataObject)) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                projecType: 'Project Type is Required !',
            }));
            isValid = false;
        }
        if (!('projectExperience' in formDataObject)) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                projectExperience: 'Project Experience is Required!',
            }));
            isValid = false;
        }
        if (!('hardDeadline' in formDataObject)) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                hardDeadline: 'Project hard deadline is Required!',
            }));
            isValid = false;
        }
        if (!('haveProjectBudget' in formDataObject)) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                haveProjectBudget: 'Project Budget is Required!',
            }));
            isValid = false;
        }

        if (!isValid) {
            if (formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }




        if (isValid) {
            try {
                setIsLoading(true);
                const promise = authApi.projectSubmit(formDataObject);
                await toast.promise(promise, {
                    loading: 'Submitting...',
                    success: (response) => {
                        if (response?.data?.success) {
                            setIsLoading(false);
                            navigate('/user/project/all');
                            return 'Submit Has bin successful!';
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
            } finally {
                setIsLoading(false);
            }
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
                        <form onSubmit={handelProjectSubmit} ref={formRef} className="add_project_form" encType="multipart/form-data">
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="project_name">
                                        What is the name of your project?<span>*</span>
                                    </label>
                                    <input
                                        className={errorMsg.project_name ? 'border-warring' : ''}
                                        type="text"
                                        name="project_name"
                                        id="project_name"
                                        placeholder="Project Name"
                                        onBlur={handleBlur}
                                        onChange={handleInputChange}
                                    />
                                    {errorMsg.project_name && <div className='error-msg'>{errorMsg.project_name}</div>}
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="user_name"> What is your name?<span>*</span> </label>
                                    <input className={errorMsg.user_name ? 'border-warring' : ''} type="text" id="user_name" placeholder="Name" disabled readOnly value='John Doe' />
                                    {errorMsg.user_name && <div className='error-msg'>{errorMsg.user_name}</div>}
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="user_email"> What is your email?<span>*</span> </label>
                                    <input
                                        className={errorMsg.user_email ? 'border-warring' : ''}
                                        type="email"
                                        id="user_email"
                                        placeholder="Email"
                                        disabled readOnly
                                        value="user@email.com"
                                    />
                                    {errorMsg.user_email && <div className='error-msg'>{errorMsg.user_email}</div>}
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="affiliation">
                                        What is your affiliation?<span>*</span>
                                    </label>
                                    <input
                                        className={errorMsg.affiliation ? 'border-warring' : ''}
                                        type="text"
                                        name="affiliation"
                                        id="affiliation"
                                        placeholder="Affiliation"
                                        onBlur={handleBlur}
                                        onChange={handleInputChange}
                                    />
                                    {errorMsg.affiliation && <div className='error-msg'>{errorMsg.affiliation}</div>}
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="project_desc">
                                    Provide a brief description of your project.<span>*</span>
                                </label>
                                <textarea
                                    className={errorMsg.project_desc ? 'border-warring' : ''}
                                    name="project_desc"
                                    id="project_desc"
                                    rows="2"
                                    placeholder="Description"
                                    onBlur={handleBlur}
                                    onChange={handleInputChange}
                                ></textarea>
                                {errorMsg.project_desc && <div className='error-msg'>{errorMsg.project_desc}</div>}
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="project_keywords">
                                        Provide up to (5) keywords engineers can use to find your
                                        project.<span>*</span>
                                    </label>
                                    <ListInput alName={'project_keywords'} getValue={project_keywords} setValue={set_project_keywords} onBlur={handleBlur} isLimit={true} max={5} placeholder="Enter a keyword and press Enter"/>
                                    {errorMsg.project_keywords && <div className='error-msg'>{errorMsg.project_keywords}</div>}
                                </div>

                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label>
                                        Will this project require any onsite work?
                                    </label>
                                    <div className="onsite_check">

                                        {
                                            onsiteOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                        }


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
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="address_line">Address Line 2 </label>
                                    <input
                                        type="text"
                                        name="address_line"
                                        id="address_line"
                                        placeholder="Apartment 4"
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

                                    {
                                        projectTypeOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                    }
                                    {errorMsg.projecType && <div className='error-msg'>{errorMsg.projecType}</div>}

                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label > Describe the nature of your project. </label>

                                    {
                                        projectNatureOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                    }
                                </div>
                            </div>

                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        How much experience will this project require? <span>*</span>
                                    </label>

                                    {
                                        projectExperienceOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                    }
                                    {errorMsg.projectExperience && <div className='error-msg'>{errorMsg.projectExperience}</div>}

                                </div>


                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="required_skill_list"
                                    >List the skills that this project will require.
                                    </label>

                                    <ListInput type={'textarea'} alName={'required_skill_list'} getValue={required_skill_list} setValue={set_required_skill_list} onBlur={handleBlur} dots={true} placeholder="Write and press enter to listed.."/>

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

                                    {
                                        ProjectHardDeadlineOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                    }
                                    {errorMsg.hardDeadline && <div className='error-msg'>{errorMsg.hardDeadline}</div>}

                                </div>
                            </div>

                            <div className="two_columns">

                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        How long do you expect this project to take ?
                                    </label>
                                    {
                                        expectedTimeProjectOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                    }

                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        Do you have a budget for this project or will it rely on
                                        volunteer work / platform sponsorship?<span>*</span>
                                    </label>

                                    {
                                        haveProjectBudgetOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                    }
                                    {errorMsg.haveProjectBudget && <div className='error-msg'>{errorMsg.haveProjectBudget}</div>}

                                </div>

                            </div>

                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="expected_cost"
                                    >What is your budget or the expected cost of this project ?
                                    </label>
                                 

                                    <ListInput type={'textarea'} alName={'expected_cost'} getValue={expected_cost} setValue={set_expected_cost} onBlur={handleBlur} dots={true} placeholder="Write and press enter to listed.."/>


                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label >
                                        What will you be ready to start this project?
                                    </label>
                                    {
                                        readyToStartOption.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                    }

                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="final_deliverable_details">
                                        Please describe the final deliverable in as much detail as
                                        possible.
                                    </label>
                                

                                    <ListInput type={'textarea'} alName={'final_deliverable_details'} getValue={final_deliverable_details} setValue={set_final_deliverable_details} onBlur={handleBlur} dots={true} placeholder="Write and press enter to listed.."/>


                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="relevant_link"> Provide a link to any relevant data. </label>
                                    <input name="relevant_link" id="relevant_link" placeholder="https://" />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="relevant_literature_link">
                                        Provide links to any relevant literature that may help your
                                        project match.
                                    </label>
                                   
                                    <ListInput type={'textarea'} alName={'relevant_literature_link'} getValue={relevant_literature_link} setValue={set_relevant_literature_link} onBlur={handleBlur} dots={true} placeholder="Write and press enter to listed.."/>
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="other_included">
                                        Anything else that should be included with your project’s
                                        description?
                                    </label>
                                    <textarea
                                        name="other_included"
                                        id="other_included"
                                        rows="2"
                                        placeholder="Answer here.."
                                    >
                                    </textarea>
                                </div>
                            </div>
                            <hr className='inputhr' />
                            <div className="form_submit al_submit_button">
                                <button type="reset" className="btn btn-submit btn-light">
                                    Cancel
                                </button>
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