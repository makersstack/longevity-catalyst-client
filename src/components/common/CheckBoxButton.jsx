import React from 'react';
import { HiCheck } from 'react-icons/hi2';

const CheckBoxButton = ({ checkData }) => {

    return (
        <label className={`plan basic-plan ${checkData.planClass ?? checkData.planClass} `} htmlFor={`ch-${checkData.inputName}-${checkData.id}`}>
            <input type="checkbox" name={checkData.inputName} id={`ch-${checkData.inputName}-${checkData.id}`} />
            <div className="plan-content">
                <div className="plan-details">
                    <div className="plan-checked-icon">
                        <span className=' check_icon '>
                            < HiCheck />
                        </span>
                    </div>
                    <p>{checkData.labelText}</p>
                </div>
            </div>
        </label>
    );
};



// check data simples uses 

// const checkData = [
//     { id: 1, inputName: 'python', labelText: 'Python', planClass: 'plan-button-colors' },
//     { id: 2, inputName: 'machine-learning', labelText: 'Machine learning', },
//     { id: 3, inputName: 'molecular-modeling', labelText: 'Molecular modeling', planClass: 'plan-button-colors' },
//     { id: 4, inputName: 'Cheminformatics', labelText: 'Cheminformatics' },
//     { id: 5, inputName: 'Pharmacology', labelText: 'Pharmacology', planClass: 'plan-button-colors' },
// ];

// inputName for the input box name attribute 
// lavelText for user show content 
// planClass for adding extranal class for the upper label element 

export default CheckBoxButton;