import React, { useState } from 'react';
import Modal from 'react-modal';

const MyModal = ({ isOpen, onClose, onConfirm }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    onConfirm(selectedOption);


    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Select an Option</h2>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <button onClick={handleConfirm}>Confirm</button>
    </Modal>
  );
};

export default MyModal;
