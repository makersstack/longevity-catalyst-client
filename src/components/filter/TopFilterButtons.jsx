import React from 'react';
import styles from '../../styles/Filter.module.css';
const TopFilterButtons = ({ options = [], selectedOption, onOptionChange }) => {
  return (
    <>
      <div className={styles.project_short_filter}>
        {
          options.map((option) => (
            <button className={`${styles.short_filter_button} ${selectedOption === option.value ? styles.active : ''
              }`}
              key={option.value}
              onClick={() => onOptionChange(option.value)}>
              {option.icon}
              {option.label}
            </button>
          ))
        }
      </div>
    </>
  );
};

export default TopFilterButtons;