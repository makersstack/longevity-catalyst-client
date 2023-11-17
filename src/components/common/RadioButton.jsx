import React from 'react';

function RadioButton({ radionData, onRadioChange }) {

  const handleRadioChange = (event) => {
    const newValue = event.target.value;
    if (onRadioChange) {
      onRadioChange(newValue);
    }
  };

  return (
    <>
      <div className='form_radio' >
        <label className='custom-radio'>
          <input
            type="radio"
            value={radionData.value}
            name={radionData.inputName}
            defaultChecked={radionData?.checked}
            onChange={handleRadioChange}
          />
          <span className='radio-control'>
            <span></span>
          </span>
          {radionData.label}
        </label>
      </div>
    </>
  );
}

export default RadioButton;