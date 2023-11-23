import React from 'react';
import Select from 'react-select';

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? '1px solid #ccc' : '1px solid #ccc',
    boxShadow: '0 0 0 0 #ccc',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    maxWidth: '140px',
    fontSize: '14px',
    backgroundColor: '#F1F1F1',
    padding: '0px',
    '&:hover': {
      border: '1px solid #ccc',
      boxShadow: '0 0 0 0 #ccc',
    },
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    padding: state.isFocused ? '0px' : '0px',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    padding: state.isFocused ? '0px' : '0px',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(16, 24, 40, 0.05)',
    borderColor: '#d0d5dd',
    fontSize: '14px',
    minWidth: '250px',
    right: '0',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#383838' : '#F1F1F1',
    color: state.isSelected ? 'white' : '#383838',
    fontSize: '14px', 
    '&:hover': {
      backgroundColor: state.isSelected ? '#383838' : 'lightgray', 
    },
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: '14px',
    }),
  }),
};

export const headerSelectOptions = [
  { value: 'explore', label: 'Explore'},
  { value: 'ct_1', label: 'Machine Learning' },
  { value: 'ct_2', label: 'Blockchain Technology' },
  { value: 'ct_3', label: 'Mobile App Development' },
  { value: 'ct_4', label: 'Data Science' },
  { value: 'ct_5', label: 'Cybersecurity' },
  { value: 'ct_6', label: 'Smart Home Automation'},
];

const CustomSelect = () => {
  return (
    <Select
      styles={customStyles}
      options={headerSelectOptions}
      isSearchable={false}
      placeholder="Explore"
      defaultValue={headerSelectOptions[0]}
    />
  );
};

export default CustomSelect;
