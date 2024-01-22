import React from 'react';
import { LiaFilterSolid } from 'react-icons/lia';

const TopFilterButtons = ({ options = [], selectedOption, onOptionChange, handelSideBarButton }) => {
  return (
    <>
      <div className="project_short_filter">
      <button onClick={handelSideBarButton} className='short_filter_button al_resFilterBtn'> <LiaFilterSolid/> Filter</button>
        {
          options.map((option, index) => (
            <button className={selectedOption === option.value ? 'short_filter_button active' : 'short_filter_button'} key={index} onClick={() => onOptionChange(option.value)}>
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