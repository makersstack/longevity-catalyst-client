import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #ccc',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    maxWidth: '200px',
    backgroundColor: '#F1F1F1',
    padding: '5px 0px 5px 0px',
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    padding: state.isFocused ? '0px' : '0px',
  }),
  indicatorSeparator: () => ({}),
  menu: (provided) => ({
    ...provided,
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(16, 24, 40, 0.05)',
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: state.isSelected ? '#383838' : 'white',
    color: state.isSelected ? 'white' : '#383838',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  }),
};

const options = [
  { value: 'explore', label: 'Explore', isDisabled: true }, 
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const CustomSelect = () => {
  return (
    <Select
      styles={customStyles}
      options={options}
      isSearchable={false} 
      placeholder="Explore"
      defaultValue={options[0]}
    />
  );
};

export default CustomSelect;
