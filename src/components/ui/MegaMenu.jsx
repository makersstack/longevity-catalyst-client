import React, { useEffect, useRef } from 'react';

const MegaMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleItemClick = (itemName) => {
    console.log('Clicked on:', itemName);
    onClose();
  };

  return (
    <div ref={menuRef} className='meghamenu_header'>
      <ul>
        <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
        <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
        {/* Add more menu items */}
      </ul>
    </div>
  );
};

export default MegaMenu;
