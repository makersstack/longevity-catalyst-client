import React, { useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Select from 'react-select';
import { customStyles, headerSelectOptions } from './CustomSelect';
import MegaMenu from './MegaMenu';

const ProjectSearchDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setShowMenu((prev) => !prev);
  };

  const handleSelectFocus = () => {
    setShowMenu(true);
  };

  return (
    <div>
      <div className={`header_search`}>
        <form action="#" method="post" className='header_search_menu'>
          <span className='header_search_icon'>
            <BiSearch />
          </span>
          <input
            type="text"
            name="search-text"
            placeholder="Project titles"
            onClick={handleInputClick}
            ref={inputRef}
            autoComplete="off"
          />
          <div className="search_category custom-select">
            <Select
              styles={customStyles}
              options={headerSelectOptions}
              placeholder="Explore"
              isSearchable={false}
              defaultValue={headerSelectOptions[0]}
              onFocus={handleSelectFocus}
            />
          </div>
          <MegaMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
        </form>
      </div>
    </div>
  );
};

export default ProjectSearchDropdown;
