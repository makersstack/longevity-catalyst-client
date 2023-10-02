import React, { useState } from 'react';

function RadioButton({ options }) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      {options.map((option) => (
        <div className='form_radio'>
          <label key={option.value} className='custom-radio'>
            <input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={handleRadioChange}
            />
            <span className='radio-control'>
              <span></span>
            </span>
            {option.label}
          </label>
          {/* <p>{selectedValue}</p> */}
        </div>
      ))}
    </>
  );
}

export default RadioButton;