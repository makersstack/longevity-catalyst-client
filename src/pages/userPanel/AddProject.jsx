import React, { useState } from 'react';
import RadioButton from '../../components/common/RadioButton';
import DashboardMenu from '../../components/userPanel/DashboardMenu';

const AddProject = () => {

    const onsiteOption = [
        {
            value: 'on',
            label: 'on'
        },
        {
            value: 'off',
            label: 'off'
        }
    ];
    const [selectedValue, setSelectedValue] = useState('');
    const handleRadioChange = (value) =>{
        setSelectedValue(value);
        console.log(value);
    }
    return (
        <section className="full_widht_auth_section">
            <div className="container">
                <div className="dashboard">
                    {/* <!-- Dashboard Menu --> */}
                    <DashboardMenu />
                    {/* <!-- Add Project --> */}
                    <div className="dashboard_add_project">
                        {/* <!-- Add Project head --> */}
                        <div className="add_project_head">
                            <h3 className="title">Add Project</h3>
                        </div>
                        <form action="#" className="add_project_form">
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">
                                        What is the name of your project?<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="Project Name"
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#"> What is your name?<span>*</span> </label>
                                    <input type="text" name="text" id="text" placeholder="Name" />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#"> What is your email?<span>*</span> </label>
                                    <input
                                        type="email"
                                        name="text"
                                        id="text"
                                        placeholder="Email"
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">
                                        What is your affiliation?<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="Affiliation"
                                    />
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    Provide a brief description of your project.<span>*</span>
                                </label>
                                <textarea
                                    name="desc"
                                    id="desc"
                                    rows="2"
                                    placeholder="Description"
                                ></textarea>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">
                                        Provide up to (5) keywords engineers can use to find your
                                        project.<span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="keywords"
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">
                                        Will this project require any onsite work?
                                    </label>
                                    <div className="onsite_check">

                                        {
                                             <RadioButton options={onsiteOption}  onRadioChange={handleRadioChange} selectedValue={selectedValue}/>
                                        }

                                        <div className="radio_control">
                                            <label htmlFor="radioYes">Yes</label>
                                            <input type="radio" name="radio" id="radioYes" />
                                        </div>
                                        <div className="radio_control">
                                            <label htmlFor="radioNo">No</label>
                                            <input type="radio" name="radio" id="radioNo" />
                                        </div>
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
                                    <label htmlFor="#"> Address </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="65 Hansen Way"
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">Address Line 2 </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="Apartment 4"
                                    />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">City / Town </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="Palo Alto"
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">State / Region / Province </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="California"
                                    />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">Zip / Post Code </label>
                                    <input
                                        type="number"
                                        name="text"
                                        id="text"
                                        placeholder="94304"
                                    />
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">Country </label>
                                    <input
                                        type="text"
                                        name="text"
                                        id="text"
                                        placeholder="United States"
                                    />
                                </div>
                            </div>
                            <div className="two_columns">
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#">
                                        Is this an individual or team project?
                                        <span>*</span>
                                    </label>
                                    <div className="onsite_check">
                                        <div className="radio_control">
                                            <label htmlFor="radioIndividual">Individual</label>
                                            <input type="radio" name="radio" id="radioIndividual" />
                                        </div>
                                        <div className="radio_control">
                                            <label htmlFor="radioTeam">Team</label>
                                            <input type="radio" name="radio" id="radioTeam" />
                                        </div>
                                        <div className="radio_control">
                                            <label htmlFor="radioOther">Other</label>
                                            <input type="radio" name="radio" id="radioOther" />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Single Input --> */}
                                <div className="form_control">
                                    <label htmlFor="#"> Describe the nature of your project. </label>
                                    <div className="onsite_check">
                                        <div className="radio_control">
                                            <label htmlFor="radioProg">General Programming</label>
                                            <input type="radio" name="radio" id="radioProg" />
                                        </div>
                                        <div className="radio_control">
                                            <label htmlFor="radioData">Data Analysis</label>
                                            <input type="radio" name="radio" id="radioData" />
                                        </div>
                                        <div className="radio_control">
                                            <label htmlFor="radioLab">Wet Lab</label>
                                            <input type="radio" name="radio" id="radioLab" />
                                        </div>
                                        <div className="radio_control">
                                            <label htmlFor="radioEOther">Other</label>
                                            <input type="radio" name="radio" id="radioEOther" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    Is there a hard deadline for this project ? <span>*</span>
                                </label>
                                <div className="onsite_check">
                                    <div className="radio_control">
                                        <label htmlFor="radioYes">Yes</label>
                                        <input type="radio" name="radio" id="radioYes" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo">No</label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#"> What is your project deadline? </label>
                                <div className="date_picker">
                                    <input type="text" />
                                    <button>Data Picker</button>
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    How long do you expect this project to take ?
                                </label>
                                <div className="onsite_check">
                                    <div className="radio_control">
                                        <label htmlFor="radioYes">Less than 1 week</label>
                                        <input type="radio" name="radio" id="radioYes" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo">Less than 1 month</label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo">Less than 3 months</label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo">Greater than 3 months</label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo">Other</label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    Do you have a budget for this project or will it rely on
                                    volunteer work / platform sponsorship?<span>*</span>
                                </label>
                                <div className="onsite_check">
                                    <div className="radio_control">
                                        <label htmlFor="radioYes">I have a budget</label>
                                        <input type="radio" name="radio" id="radioYes" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo">
                                            I will require a volunteer / sponsorship
                                        </label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#"
                                >What is your budget or the expected cost of this project ?
                                </label>
                                <textarea
                                    name="answer"
                                    id="answer"
                                    rows="2"
                                    placeholder="Answer here.."
                                >
                                </textarea>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    What will you be ready to start this project?
                                </label>
                                <div className="onsite_check">
                                    <div className="radio_control">
                                        <label htmlFor="radioYes">Immediately</label>
                                        <input type="radio" name="radio" id="radioYes" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo"> Within 1 week </label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                    <div className="radio_control">
                                        <label htmlFor="radioNo">Other</label>
                                        <input type="radio" name="radio" id="radioNo" />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    Please describe the final deliverable in as much detail as
                                    possible.
                                </label>
                                <textarea
                                    name="answer"
                                    id="answer"
                                    rows="2"
                                    placeholder="Answer here.."
                                >
                                </textarea>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#"> Provide a link to any relevant data. </label>
                                <input name="answer" id="answer" placeholder="https://" />
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    Provide links to any relevant literature that may help your
                                    project match.
                                </label>
                                <textarea
                                    name="answer"
                                    id="answer"
                                    rows="2"
                                    placeholder="Answer here.."
                                >
                                </textarea>
                            </div>
                            {/* <!-- Single Input --> */}
                            <div className="form_control">
                                <label htmlFor="#">
                                    Anything else that should be included with your project’s
                                    description?
                                </label>
                                <textarea
                                    name="answer"
                                    id="answer"
                                    rows="2"
                                    placeholder="Answer here.."
                                >
                                </textarea>
                            </div>
                            <div className="form_submit">
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