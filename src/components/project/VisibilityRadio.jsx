import React from 'react';
import { ENUM_PROJECT_STATUS } from '../../constants/projectConst';

const VisibilityRadio = ({ onRadioChange, selectedValue }) => {
    const handleRadioChange = (event) => {
        const newValue = event.target.value;
        onRadioChange(newValue);
    };
    const options = [
        { value: ENUM_PROJECT_STATUS.PUBLIC, label: ENUM_PROJECT_STATUS.PUBLIC },
        { value: ENUM_PROJECT_STATUS.PRIVATE, label: ENUM_PROJECT_STATUS.PRIVATE },
        { value: ENUM_PROJECT_STATUS.DRAFT, label: ENUM_PROJECT_STATUS.DRAFT },
        { value: ENUM_PROJECT_STATUS.PENDING, label: ENUM_PROJECT_STATUS.PENDING }
    ]

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
};

export default VisibilityRadio;