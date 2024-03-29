import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { projectApi, skillApi } from '../../api';
import categoryApi from '../../api/categoryApi';
import ListInput from '../../components/common/ListInput';
import RadioButton from '../../components/common/RadioButton';
import DatePickerInput from '../../components/ui/DatePickerInput';
import Loader from '../../components/ui/Loader';
import DashboardMenu from '../../components/userPanel/DashboardMenu';
import { ENUM_PROJECT_STATUS } from '../../constants/projectConst';
import { ProjectHardDeadlineOption, expectedTimeProjectOption, haveProjectBudgetOption, onsiteOption, projectExperienceOption, projectNatureOption, projectTypeOption, readyToStartOption } from '../../data/projectData';
import useAuth from '../../hooks/useAuth';
import useCheckedOptions from '../../hooks/useCheckedOptions';
import useLoading from '../../hooks/useLoading';
import ScrollToTop from '../../utils/routeChange';

const EditProject = () => {
    useEffect(() => {
        document.title = "Edit Project - Longevity Catalyst";
    }, []);


    const { setIsLoading } = useLoading();
    const { userInfo } = useAuth();
    const projectId = useParams().projectId;
    const [projectData, setProjectData] = useState({});

    useEffect(() => {
        const fetchSingleProject = async () => {
            try {
                setIsLoading(true);
                const response = await projectApi.getSingleProject(projectId);
                if (response && response.data && response.data.success) {
                    setProjectData(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSingleProject();

    }, [projectId, setIsLoading]);


    const navigate = useNavigate();
    ScrollToTop();
    const mes = {};
    const [errorMsg, setErrorMsg] = useState(mes);
    const formRef = useRef(null);

    const handleFormCancel = (event) => {
        event.preventDefault();
        navigate('/dashboard/home');
    }



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

        const { name, value } = event.target;
        setProjectData({
            ...projectData,
            [name]: value,
        });

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
            case 'primary_category':
                error = value.trim().length === 0 ? 'Primary Category is Required!' : '';
                break;
            default:
                break;
        }
        setErrorMsg(prevErrorMsg => ({
            ...prevErrorMsg,
            [fieldName]: error,
        }));
    }




    // Skill Selection

    const [skillOptions, setSkillOptions] = useState([]);
    const animatedComponents = makeAnimated();



    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const response = await skillApi.getAllSkills();
                const skOptionData = response?.data?.data || [];

                if (isMounted) {
                    const transformedData = skOptionData.map(skill => ({
                        value: skill.id,
                        label: skill.skillName
                    }));
                    setSkillOptions(transformedData);

                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Update isMounted flag on unmount
            // Any cleanup if needed (e.g., clearing timeouts/intervals)
        };
    }, [userInfo]);


    const [selectedValues, setSelectedValues] = useState([]);
    const [selectValue, setSelectValue] = useState([]);




    const handleSelectChange = (selectedOptions) => {
        setSelectedValues(selectedOptions);
    };

    useEffect(() => {
        setSelectValue(selectedValues.map((option) => option.value));
    }, [selectedValues]);


    useEffect(() => {
        if (projectData?.required_skill_list) {
            if (skillOptions && skillOptions.length > 0) {
                const getSkillids = JSON.parse(projectData?.required_skill_list);
                const filteredSkills = skillOptions.filter(skill => getSkillids.includes(skill.value));
                const defaultValuesFE = filteredSkills.map(skill => ({
                    value: skill.value,
                    label: skill.label
                }));
                setSelectedValues(defaultValuesFE);
            }
        }
    }, [projectData, skillOptions]);





    const [project_keywords, set_project_keywords] = useState({});
    // const [required_skill_list, set_required_skill_list] = useState({});
    // const [expected_cost, set_expected_cost] = useState({});
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

    const [projectBudgetOptions, setProjectBudgetOptions] = useState('');
    const [expectedCostBtn, setExpectedCostBtn] = useState(false);

    useEffect(() => {
        if (projectBudgetOptions === "I have a budget") {
            setExpectedCostBtn(true);
        } else {
            setExpectedCostBtn(false);
        }
    }, [projectBudgetOptions, projectData?.haveProjectBudget]);

    useEffect(() => {
        if (projectData?.haveProjectBudget === "I have a budget") {
            setExpectedCostBtn(true);
        } else {
            setExpectedCostBtn(false);
        }
    }, [projectData?.haveProjectBudget]);


    // set the default project data 
    const [project_keywords_default, set_project_keywords_default] = useState([]);
    // const [expected_cost_default, set_expected_cost_default] = useState([]);
    const [final_deliverable_details_default, set_final_deliverable_details_default] = useState([]);
    const [relevant_literature_link_default, set_relevant_literature_link_default] = useState([]);
    // radio options chnaged
    const { options: onsiteOptionDefault, updateCheckedValue: setOnsiteOptionDefault } = useCheckedOptions(
        onsiteOption
    )
    const { options: projectTypeOptionDefault, updateCheckedValue: setProjectTypeOptionDefault } = useCheckedOptions(
        projectTypeOption
    );
    const { options: projectNatureOptionDefault, updateCheckedValue: setProjectNatureOptionnDefault } = useCheckedOptions(
        projectNatureOption
    )

    const { options: projectProjectExperienceOptionDefault, updateCheckedValue: setProjectExperienceOptionDefault } = useCheckedOptions(
        projectExperienceOption
    )

    const { options: projectHardDeadlineOptionDefault, updateCheckedValue: setProjectHardDeadlineOptionDefault } = useCheckedOptions(
        ProjectHardDeadlineOption
    )
    const { options: expectedTimeProjectOptionDefault, updateCheckedValue: setexpectedTimeProjectOptionDefault } = useCheckedOptions(
        expectedTimeProjectOption
    )
    const { options: haveProjectBudgetOptionDefault, updateCheckedValue: sethaveProjectBudgetOptionDefault } = useCheckedOptions(
        haveProjectBudgetOption
    )
    const { options: readyToStartOptionDefault, updateCheckedValue: setreadyToStartOptionDefault } = useCheckedOptions(
        readyToStartOption
    )
    useEffect(() => {
        if (projectData?.project_keywords) {
            set_project_keywords_default(JSON.parse(projectData?.project_keywords));
        }

        // if (projectData?.expected_cost) {
        //     set_expected_cost_default(JSON.parse(projectData?.expected_cost));
        // }
        if (projectData?.final_deliverable_details) {
            set_final_deliverable_details_default(JSON.parse(projectData?.final_deliverable_details));
        }
        if (projectData?.relevant_literature_link) {
            set_relevant_literature_link_default(JSON.parse(projectData?.relevant_literature_link));
        }
        setOnsiteOptionDefault(projectData?.onsite_work);
        setProjectTypeOptionDefault(projectData?.projecType);
        setProjectNatureOptionnDefault(projectData?.projectNature);
        setProjectExperienceOptionDefault(projectData?.projectExperience);
        setProjectHardDeadlineOptionDefault(projectData?.hardDeadline);
        setexpectedTimeProjectOptionDefault(projectData?.expectedTimeProject);
        sethaveProjectBudgetOptionDefault(projectData?.haveProjectBudget);
        setreadyToStartOptionDefault(projectData?.readyToStart);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectData]);

    const handelProjectSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg({});
        const formData = new FormData(event.target);
        // After Submit Validation 
        formData.append('status', ENUM_PROJECT_STATUS.PUBLIC);
        // Pushing other data into form data 
        if (project_keywords.lists.length !== 0) {
            formData.append('project_keywords', JSON.stringify(project_keywords.lists));
        }

        formData.append('required_skill_list', JSON.stringify(selectValue));

        // if (expected_cost.lists.length !== 0) {
        //     formData.append('expected_cost', JSON.stringify(expected_cost.lists));
        // }

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
        if (formDataObject.primary_category.trim().length === 0) {
            setErrorMsg(prevErrorMsg => ({
                ...prevErrorMsg,
                primary_category: ' Primary Category is Required!',
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
                const response = await projectApi.updateProject(formDataObject, projectId);
                const getError = response?.error;
                if (getError) {
                    toast.error(getError.message);
                }
                if (response?.data?.success) {
                    setIsLoading(false);
                    navigate('/dashboard/project/all');
                    toast.success('Update successful!');
                } else {
                    toast.error('Unexpected error occurred');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handelDashMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    // fetching ui data 
    const [primaryCateOption, setprimaryCateOption] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await categoryApi.getAllCategories();
                const primary_category = response?.data?.data || [];
                setprimaryCateOption(primary_category);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


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
                                <h3 className="title">Edit Project  </h3>

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
                                            defaultValue={projectData.project_name}
                                        />
                                        {errorMsg.project_name && <div className='error-msg'>{errorMsg.project_name}</div>}
                                    </div>
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label htmlFor="user_name"> What is your name?<span>*</span> </label>
                                        <input className={errorMsg.user_name ? 'border-warring' : ''} type="text" id="user_name" placeholder="Name" disabled readOnly defaultValue={userInfo?.full_name} />
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
                                            defaultValue={userInfo?.email}
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
                                            defaultValue={projectData?.affiliation}
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
                                        defaultValue={projectData?.project_desc}
                                    >

                                    </textarea>
                                    {errorMsg.project_desc && <div className='error-msg'>{errorMsg.project_desc}</div>}
                                </div>
                                <div className="two_columns">
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label htmlFor="project_keywords">
                                            Provide up to (5) keywords engineers can use to find your
                                            project.<span>*</span>
                                        </label>
                                        <ListInput defaultValueArray={project_keywords_default} alName={'project_keywords'} getValue={project_keywords} setValue={set_project_keywords} onBlur={handleBlur} isLimit={true} max={5} placeholder="Enter a keyword and press Enter" />
                                        {errorMsg.project_keywords && <div className='error-msg'>{errorMsg.project_keywords}</div>}
                                    </div>

                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label>
                                            Will this project require any onsite work?
                                        </label>
                                        <div className="onsite_check">

                                            {
                                                onsiteOptionDefault.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                            }


                                        </div>
                                    </div>
                                </div>
                                <div className="two_columns">
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label htmlFor="primary_category">
                                            Primary Category:
                                            <span>*</span>
                                        </label>
                                        <select name="primary_category" id="primary_category" onChange={handleInputChange}>
                                            <option value={projectData?.Category?.id}>{projectData?.Category?.category_name}</option>
                                            {
                                                primaryCateOption.map(singleData => <option key={singleData.id} value={singleData.id}>{singleData.category_name}</option>)
                                            }

                                        </select>
                                        {errorMsg.primary_category && <div className='error-msg'>{errorMsg.primary_category}</div>}
                                    </div>


                                </div>
                                {/* <!-- Form Sub Title Text --> */}
                                <p className="form_subtitle extraTitleForBreaker">
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
                                            defaultValue={projectData?.address}
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
                                            onChange={handleInputChange}
                                            defaultValue={projectData?.address_line}
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
                                            defaultValue={projectData?.city_town}
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
                                            defaultValue={projectData?.state_region_province}
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
                                            defaultValue={projectData?.zip_code}
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
                                            defaultValue={projectData?.country}
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
                                            projectTypeOptionDefault.map(singleData => <RadioButton defaultCheckValue={projectData?.projecType} key={singleData.key} radionData={singleData} />)
                                        }
                                        {errorMsg.projecType && <div className='error-msg'>{errorMsg.projecType}</div>}

                                    </div>
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label > Describe the nature of your project. </label>

                                        {
                                            projectNatureOptionDefault.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                        }
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
                                        <label htmlFor="required_skill_list"
                                        >List the skills that this project will require.
                                        </label>
                                        <div>
                                            <Select
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                isMulti
                                                options={skillOptions}
                                                defaultValue={selectedValues}
                                                value={selectedValues}  // Use 'value' prop to control the selected values
                                                onChange={handleSelectChange}  // Handle selection changes
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="two_columns">
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label >
                                            How much experience will this project require? <span>*</span>
                                        </label>

                                        {
                                            projectProjectExperienceOptionDefault.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                        }
                                        {errorMsg.projectExperience && <div className='error-msg'>{errorMsg.projectExperience}</div>}

                                    </div>

                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label>
                                            Is there a hard deadline for this project ? <span>*</span>
                                        </label>

                                        {
                                            projectHardDeadlineOptionDefault.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
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
                                            expectedTimeProjectOptionDefault.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                        }

                                    </div>
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label >
                                            Do you have a budget for this project or will it rely on
                                            volunteer work / platform sponsorship?<span>*</span>
                                        </label>
                                        {
                                            haveProjectBudgetOptionDefault.map(singleData => <RadioButton key={singleData.key} radionData={singleData} onRadioChange={setProjectBudgetOptions} />)
                                        }
                                        {errorMsg.haveProjectBudget && <div className='error-msg'>{errorMsg.haveProjectBudget}</div>}

                                    </div>

                                </div>

                                <div className="two_columns">
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label >
                                            What will you be ready to start this project?
                                        </label>
                                        {
                                            readyToStartOptionDefault.map(singleData => <RadioButton key={singleData.key} radionData={singleData} />)
                                        }

                                    </div>

                                    {
                                        expectedCostBtn && (
                                            <div className="form_control">
                                                <label htmlFor="expected_cost"
                                                >What is your budget or the expected cost of this project ?
                                                </label>

                                                <input name="expected_cost" id="expected_cost" defaultValue={projectData?.expected_cost} placeholder="$0,000" />
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="two_columns">
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label htmlFor="final_deliverable_details">
                                            Please describe the final deliverable in as much detail as
                                            possible.
                                        </label>


                                        <ListInput defaultValueArray={final_deliverable_details_default} type={'textarea'} alName={'final_deliverable_details'} getValue={final_deliverable_details} setValue={set_final_deliverable_details} onBlur={handleBlur} dots={true} placeholder="Write and press enter to listed.." />


                                    </div>
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label htmlFor="relevant_link"> Provide a link to any relevant data. </label>
                                        <input onChange={handleInputChange} name="relevant_link" id="relevant_link" placeholder="https://" defaultValue={projectData?.relevant_link} />
                                    </div>
                                </div>
                                <div className="two_columns">
                                    {/* <!-- Single Input --> */}
                                    <div className="form_control">
                                        <label htmlFor="relevant_literature_link">
                                            Provide links to any relevant literature that may help your
                                            project match.
                                        </label>

                                        <ListInput defaultValueArray={relevant_literature_link_default} type={'textarea'} alName={'relevant_literature_link'} getValue={relevant_literature_link} setValue={set_relevant_literature_link} onBlur={handleBlur} dots={true} placeholder="Write and press enter to listed.." />
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
                                            defaultValue={projectData?.other_included}
                                            onChange={handleInputChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <hr className='inputhr' />
                                <div className="form_submit al_submit_button">
                                    <button className="btn btn-submit btn-light" onClick={handleFormCancel}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-submit btn-dark">
                                        Update
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

export default EditProject;