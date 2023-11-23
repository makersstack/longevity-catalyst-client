import React from 'react';
import { HiCheck } from 'react-icons/hi';

const CheckBoxSkills = ({ checkData, checked, onCheckChange }) => {
  const handleChange = () => {
    onCheckChange({
      id: checkData.id,
      inputName: checkData.inputName,
      labelText: checkData.labelText,
      checked: !checked,
    });
  };
  return (
    <>
      <label
        className={`plan basic-plan ${checkData.planClass ?? checkData.planClass} `}
        htmlFor={`ch-${checkData.inputName}-${checkData.id}`}
      >
        <input
          type="checkbox"
          name={checkData.inputName}
          id={`ch-${checkData.inputName}-${checkData.id}`}
          checked={checked}
          onChange={handleChange}
        />
        <div className="plan-content">
          <div className="plan-details">
            <div className="plan-checked-icon">
              <span className="check_icon">
                <HiCheck />
              </span>
            </div>
            <p>{checkData.labelText}</p>
          </div>
        </div>
      </label>
    </>
  )
}

export default CheckBoxSkills