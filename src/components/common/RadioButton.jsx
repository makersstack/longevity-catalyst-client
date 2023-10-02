import React from 'react';

function RadioButton({ options, onRadioChange, selectedValue }) {

  const handleRadioChange = (event) => {
    const newValue = event.target.value;


    onRadioChange(newValue);
  };

  return (
    <>
      {options.map((option) => (
        <div className='form_radio' key={option.value}>
          <label className='custom-radio'>
            <input
              type="radio"
              value={option.value}
              checked={option.value === selectedValue}
              onChange={handleRadioChange}
            />
            <span className='radio-control'>
              <span></span>
            </span>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
}

// TODOMK dynamicly no need to onChange handeler. it's only need for sign up modal. 

export default RadioButton;