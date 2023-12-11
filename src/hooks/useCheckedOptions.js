import { useState } from 'react';

const useCheckedOptions = (initialOptions) => {
  const [options, setOptions] = useState(initialOptions);

  const updateCheckedValue = (inputValue) => {
    const inputType = typeof inputValue;
    if (inputType !== 'boolean') {
      inputValue = String(inputValue).toLowerCase();
    }

    const updatedOptions = options.map((option) => {
      let optionValue;
      const optionValueType = typeof option.value;
      if(optionValueType !== 'boolean'){
        optionValue = String(option.value).toLowerCase();
      }else{
        optionValue = option.value
      }
      if (optionValue === inputValue) {
        return { ...option, checked: true };
      } else {
        return { ...option, checked: false };
      } 
    });

    setOptions(updatedOptions);
  };
  return { options, updateCheckedValue };
};

export default useCheckedOptions;
