// SidebarFilters.js

import React, { useState } from 'react';
import CheckBoxButton from '../common/CheckBoxButton';

// Search field component
function SearchField({ onSearchChange, defaultValue }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="input_box">
      <label htmlFor="se-p">Search Project</label>
      <input
        id="se-p"
        type="search"
        placeholder="Project Name"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

// Categories component
function Categories({ categoryOptions, onCategoryChange, value }) {
  return (
    <div className="input_box">
      <label htmlFor="p-categories">Categories</label>
      <select
        name="p-categories"
        id="p-categories"
        onChange={(e) => onCategoryChange(e.target.value)}
        value={value}
      >
        {categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Topic component
function Topic({ topicOptions, onTopicChange, value }) {
  return (
    <div className="input_box">
      <label>Topic</label>
      <div className="topic_options">
        {topicOptions.map((option, index) => (
          <label className="plan basic-plan" htmlFor={`opt${index}`} key={option.value}>
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
function Duration({ durationOptions, onDurationChange, value }) {
  return (
    <div className="input_box">
      <label htmlFor="p-dura">Duration</label>
      <select
        name="p-dura"
        id="p-dura"
        onChange={(e) => onDurationChange(e.target.value)}
        value={value}
      >
        {durationOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

// Required Skills component 

function RequiredSkills({ onSkillsChange, requirdSkillCheckData }) {
  return (
    <div className="input_box required_skills">
      <label>Required Skills</label>
      {requirdSkillCheckData.map((checkData) => (
        <CheckBoxButton key={checkData.id} checkData={checkData} onCheckChange={onSkillsChange} />
      ))}
    </div>
  );
}

// Funding Status component
function FundingStatus({ onFundingStatusChange, fundingStatusOptions, value }) {
  return (
    <div className="input_box">
      <label>Funding Status</label>
      <div className="funding_status">
        {fundingStatusOptions.map((status, index) => (
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
function Language({ languageOptions, onLanguageChange, value }) {
  return (
    <div className="input_box">
      <label htmlFor="Language">Language</label>
      <select
        name="Language"
        id="Language"
        onChange={(e) => onLanguageChange(e.target.value)}
        value={value}
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
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
}) => {
  return (
    <>
      {/* Project sidebar filter */}
      <div className="project_side_ber_container">
        <div className="project_side_bar">
          <form action="/" method="post">
            {search && <SearchField onSearchChange={onPageChange} value={filters.search} />}
            {categories && (
              <Categories
                categoryOptions={categories}
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
                durationOptions={duration}
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
                fundingStatusOptions={fundingStatus}
                onFundingStatusChange={(value) => onPageChange('selectedFundingStatus', value)}
                value={filters.selectedFundingStatus}
              />
            )}
            {language && (
              <Language
                languageOptions={language}
                onLanguageChange={(value) => onPageChange('selectedLanguage', value)}
                value={filters.selectedLanguage}
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SidebarFilters;
