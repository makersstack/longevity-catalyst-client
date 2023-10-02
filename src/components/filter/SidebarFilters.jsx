import React from 'react';
import CheckBoxButton from '../common/CheckBoxButton';

const SidebarFilters = () => {
  const requirdSkillCheckData = [
    { id: 1, inputName: 'python', labelText: 'Python' },
    { id: 2, inputName: 'machine-learning', labelText: 'Machine learning', },
    { id: 3, inputName: 'molecular-modeling', labelText: 'Molecular modeling' },
    { id: 4, inputName: 'Cheminformatics', labelText: 'Cheminformatics' },
    { id: 5, inputName: 'Pharmacology', labelText: 'Pharmacology' },
  ];
  return (
    <>
      {/* project side bar filter */}
      <div className="project_side_ber_container">
        <div className="project_side_bar">
          <form action="/" method="post">
            {/* Project Name  */}
            <div className="input_box">
              <label htmlFor="se-p">Search Project</label>
              <input id="se-p" type="text" placeholder="Project Name" />
            </div>
            {/* Categories */}
            <div className="input_box">
              <label htmlFor="p-categories">Categories</label>
              <select name="p-categories" id="p-categories">
                <option value="">Select Categories</option>
                <option value="">project 1</option>
                <option value="">project 2</option>
                <option value="">project 3</option>
              </select>
            </div>
            {/* Topic */}
            <div className="input_box">
              <label> Topic </label>

              <label className="plan basic-plan" htmlFor="opt1">
                <input defaultChecked type="radio" name="plan" id="opt1" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>1-25</p>
                  </div>
                </div>
              </label>

              <label className="plan basic-plan" htmlFor="opt2">
                <input type="radio" name="plan" id="opt2" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>1-25</p>
                  </div>
                </div>
              </label>

              <label className="plan basic-plan" htmlFor="opt3">
                <input type="radio" name="plan" id="opt3" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>51-100</p>
                  </div>
                </div>
              </label>
              <label className="plan basic-plan" htmlFor="opt4">
                <input type="radio" name="plan" id="opt4" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>College Students</p>
                  </div>
                </div>
              </label>
            </div>
            {/* Duration  */}
            <div className="input_box">
              <label htmlFor="p-categories">Duration</label>
              <select name="p-dura" id="p-dura">
                <option value="">Select Role</option>
                <option value="">option 1</option>
                <option value="">option 2</option>
                <option value="">option 3</option>
              </select>
            </div>
            {/* Required Skills */}
            <div className="input_box required_skills">
              <label> Required Skills </label>
              {
                requirdSkillCheckData.map(checkData => <CheckBoxButton key={checkData.id} checkData={checkData} />)
              }

            </div>
            {/* Funding Status */}
            <div className="input_box">
              <label> Funding Status </label>

              <label className="plan basic-plan" htmlFor="st-opt1">
                <input defaultChecked type="radio" name="status" id="st-opt1" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>30 days</p>
                  </div>
                </div>
              </label>

              <label className="plan basic-plan" htmlFor="st-opt2">
                <input type="radio" name="status" id="st-opt2" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>60 days</p>
                  </div>
                </div>
              </label>

              <label className="plan basic-plan" htmlFor="st-opt3">
                <input type="radio" name="status" id="st-opt3" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>90 days</p>
                  </div>
                </div>
              </label>
              <label className="plan basic-plan" htmlFor="st-opt4">
                <input type="radio" name="status" id="st-opt4" />
                <div className="plan-content">
                  <div className="plan-details">
                    <p>No Contract</p>
                  </div>
                </div>
              </label>
            </div>
            {/* Language */}
            <div className="input_box">
              <label htmlFor="Language">Language</label>
              <select name="Language" id="Language">
                <option value="">Language</option>
                <option value="">Language 1</option>
                <option value="">Language 2</option>
                <option value="">Language 3</option>
              </select>
            </div>

          </form>
        </div>
      </div>
    </>
  );
};

export default SidebarFilters;