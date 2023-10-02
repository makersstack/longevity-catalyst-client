import React from 'react';

const TopFilterButtons = ({ options = [], selectedOption, onOptionChange }) => {
  return (
    <>
      {/* project short filter */}
      <div className="project_short_filter">
        {
          options.map((option) => (
            <button className={selectedOption === option.value ? 'short_filter_button active' : 'short_filter_button'} key={option.value} onClick={() => onOptionChange(option.value)}>
              {option.icon}
              {option.label}
            </button>
          ))
        }
      </div>
    </>
  );
};

export default TopFilterButtons;