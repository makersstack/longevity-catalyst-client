import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
import "../../assets/styles/headerSearch.css";
import CustomSelect from './CustomSelect';
import MegaMenu from './MegaMenu';

const HeaderSearch = () => {
    // For Search Menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchRef = useRef(null);
    const [searchValue, setSearchValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
      }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
            if (searchRef.current && searchRef.current.contains(event.target)) {
                setIsMenuOpen(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handelChangeInput = (event) => {
        setSearchValue(event.target.value);
        onPageChange('searchTerm', event.target.value);
    }

    useEffect(() => {
        onPageChange('selectedCategory', selectValue);
    },[selectValue])


   
    const [filters, setFilters] = useState({
        search: '',
        textsearch: '',
        selectedCategory: '',
        selectedTopic: '',
        selectedDuration: '',
        selectedRequiredSkills: [],
        selectedFundingStatus: '',
        selectedLanguage: '',
    });


    const onPageChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));

    };


    return (
        <form action="#" method="post" ref={searchRef}>
            <span className='header_search_icon'>
                <BiSearch />
            </span>
            <input
                type="text"
                placeholder="Search projects..."
                value={searchValue}
                onChange={handelChangeInput}
            />
            <div className="search_category custom-select">
                <CustomSelect setSelectValue={setSelectValue}/>
            </div>
            {isMenuOpen && (
                <MegaMenu
                    isOpen={isMenuOpen}
                    filters={filters}
                />
            )}
        </form>
    );
};

export default HeaderSearch;