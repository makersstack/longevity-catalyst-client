import React from 'react';

function RadioButton({ radionData }) {

  // if(onRadioChange){
  //   const handleRadioChange = (event) => {
  //     const newValue = event.target.value;


  //     onRadioChange(newValue);
  //   };
  // }


  return (
    <>
      <div className='form_radio' >
        <label className='custom-radio'>
          <input
            type="radio"
            value={radionData.value}
            name={radionData.inputName}
            defaultChecked={radionData?.checked}
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

// TODOMK dynamicly no need to onChange handeler. it's only need for sign up modal. 

export default RadioButton;