// SidebarFilters.js

import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import categoryApi from '../../api/CategoryApi';
import { expectedTimeProjectOption, projectExperienceOption, projectTypeOption, readyToStartOption } from '../../data/projectData';

// Search field component
function SearchField({ onSearchChange, value }) {
  const [localValue, setLocalValue] = useState(value || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onSearchChange(newValue);
  };

  return (
    <div className="input_box">
      <label htmlFor="se-p">Search Project</label>
      <input
        id="se-p"
        name='search_project_byName'
        type="text"
        placeholder="Project Name"
        onChange={handleChange}
        value={localValue}
      />
    </div>
  );
}


// Categories component
function Categories({ onCategoryChange, value }) {

  const [selectOptions, setSelectOptions] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await categoryApi.getAllCategories();
        const primary_category = response?.data?.data || [];

        if (isMounted) {
          setSelectOptions(primary_category);
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
  }, []);

  return (
    <div className="input_box">
      <label htmlFor="p-categories">Categories</label>
      <select
        name="p-categories"
        id="p-categories"
        onChange={(e) => onCategoryChange(e.target.value)}
        value={value}
      >
        <option value="">All Categories</option>
        {selectOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.category_name}
          </option>
        ))}
      </select>
    </div>
  );
}

// Topic component
function Topic({ onTopicChange, value }) {
  return (
    <div className="input_box">
      <label>Project Type</label>
      <div className="topic_options">
        <label className="plan basic-plan" htmlFor={`opt-default-1`} >
          <input
            defaultChecked={value === ""}
            type="radio"
            name="topic"
            id={`opt-default-1`}
            onChange={() => onTopicChange("")}
          />
          <div className="plan-content">
            <div className="plan-details">
              <p>All</p>
            </div>
          </div>
        </label>
        {projectTypeOption.map((option, index) => (
          <label className="plan basic-plan" htmlFor={`opt${index}`} key={option.key}>
            <input
              defaultChecked={value === option.value}
              type="radio"
              name="topic"
              id={`opt${index}`}
              onChange={() => onTopicChange(option.value)}
            />
            <div className="plan-content">
              <div className="plan-details">
                <p>{option.label}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

// Duration component
function Duration({ onDurationChange, value }) {
  return (
    <div className="input_box">
      <label htmlFor="p-dura">Duration</label>
      <select
        name="p-dura"
        id="p-dura"
        onChange={(e) => onDurationChange(e.target.value)}
        value={value}
      >
        <option value="">All</option>
        {expectedTimeProjectOption.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Required Skills component 
function RequiredSkills({ onSkillsChange, requirdSkillCheckData }) {
  const [checkedSkills, setCheckedSkills] = useState([]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    const updatedSkills = checked
      ? [...checkedSkills, name]
      : checkedSkills.filter((skill) => skill !== name);

    setCheckedSkills(updatedSkills);
    onSkillsChange(updatedSkills);
  };

  return (
    <div className="input_box required_skills">
      <label>Required Skills</label>
      {requirdSkillCheckData.map((checkData) => (
        <label
          className={`plan basic-plan ${checkData.planClass} `}
          htmlFor={`ch-${checkData.inputName}-${checkData.id}`}
          key={checkData.id}
        >
          <input
            type="checkbox"
            name={checkData.inputName}
            id={`ch-${checkData.inputName}-${checkData.id}`}
            checked={checkedSkills.includes(checkData.inputName)}
            onChange={handleChange}
          />
          <div className="plan-content">
            <div className="plan-details">
              <div className="plan-checked-icon">
                <span className="check_icon">{checkedSkills.includes(checkData.inputName) ? '✔' : ''}</span>
              </div>
              <p>{checkData.labelText}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}

// Funding Status component
function FundingStatus({ onFundingStatusChange, value }) {
  return (
    <div className="input_box">
      <label>Required Experience</label>
      <div className="funding_status">

        <label className="plan basic-plan" htmlFor={`st-opt-default-1`} >
          <input
            defaultChecked={value === ""}
            type="radio"
            name="fundingStatus"
            id={`st-opt-default-1`}
            onChange={() => onFundingStatusChange("")}
          />
          <div className="plan-content">
            <div className="plan-details">
              <p>All</p>
            </div>
          </div>
        </label>

        {projectExperienceOption.map((status, index) => (
          <label className="plan basic-plan" htmlFor={`st-opt${index}`} key={index}>
            <input
              defaultChecked={value === status.value}
              type="radio"
              name="fundingStatus"
              id={`st-opt${index}`}
              onChange={() => onFundingStatusChange(status.value)}
            />
            <div className="plan-content">
              <div className="plan-details">
                <p>{status.label}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

// Language component
function Language({ onLanguageChange, value }) {
  return (
    <div className="input_box">
      <label htmlFor="Language">Start On</label>
      <select
        name="Language"
        id="Language"
        onChange={(e) => onLanguageChange(e.target.value)}
        value={value}
      >
        <option value="">All</option>
        {readyToStartOption.map((option) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

const SidebarFilters = ({
  search,
  categories,
  topic,
  duration,
  requiredSkills,
  fundingStatus,
  language,
  onPageChange,
  requirdSkillCheckData,
  filters,
  isSideBarActive,
  handelSideBarButton,
  sideBarRef
}) => {
  const [searchValue, setSearchValue] = useState('');
  const handelResetFrom = () => {
    setSearchValue('');
  }

  return (
    <>
      {/* Project sidebar filter */}
      <div className={`project_side_ber_container ${isSideBarActive ? 'active_side_bar' : ''}`}>
        <div className="project_side_bar" ref={sideBarRef}>
          <form >
            <div className="side_bar_mobile_header">
              <button type='reset' onClick={handelResetFrom} className='side_bar_head_btn'>Reset</button>
              <p>Projects Filter</p>
              <button className='side_bar_head_btn sideCloseBtn' onClick={handelSideBarButton}>  <AiOutlineClose /> </button>
            </div>
            <div className='side_bar_inputs_box'>
              {search && <SearchField onSearchChange={(value) => onPageChange('searchTerm', value)} value={searchValue} />}
              {categories && (
                <Categories
                  onCategoryChange={(value) => onPageChange('selectedCategory', value)}
                  value={filters.selectedCategory}
                />
              )}
              {topic && (
                <Topic
                  topicOptions={topic}
                  onTopicChange={(value) => onPageChange('selectedTopic', value)}
                  value={filters.selectedTopic}
                />
              )}
              {duration && (
                <Duration
                  onDurationChange={(value) => onPageChange('selectedDuration', value)}
                  value={filters.selectedDuration}
                />
              )}
              {requiredSkills && (
                <RequiredSkills
                  onSkillsChange={(value) => onPageChange('selectedRequiredSkills', value)}
                  requirdSkillCheckData={requirdSkillCheckData}
                />
              )}
              {fundingStatus && (
                <FundingStatus
                  onFundingStatusChange={(value) => onPageChange('selectedFundingStatus', value)}
                  value={filters.selectedFundingStatus}
                />
              )}
              {language && (
                <Language

                  onLanguageChange={(value) => onPageChange('selectedLanguage', value)}
                  value={filters.selectedLanguage}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SidebarFilters;