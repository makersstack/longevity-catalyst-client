import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { MdEditNote, MdOutlineDeleteSweep } from 'react-icons/md';
import { RxDotsVertical } from 'react-icons/rx';
import { useLocation, useNavigate } from 'react-router-dom';

const MoreOptionButtons = ({ projectId, openModal }) => {


    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);





    return (
        <div className="user-dropdown" ref={dropdownRef}>

            <button className="project_more_btn project_effective_button" onClick={toggleDropdown}>
                <RxDotsVertical />
            </button>

            {isDropdownOpen && (
                <div className="dropdown-content">
                    <div className="user_dropdown_menu">
                        <div className="user_dropdown_menu_itme">
                            <button onClick={openModal} >
                                <span className='al_menu_icon' style={{ fontSize: '18px' }}> <HiOutlineClipboardCopy /></span>
                                <span>Copy Link</span>
                            </button>
                            {
                                location.pathname.startsWith('/dashboard') && <>
                                    <button onClick={() => navigate(`/dashboard/project/edit/${projectId}`)} >
                                        <span className='al_menu_icon' style={{ fontSize: '18px' }}> <MdEditNote /> </span>
                                        <span>Edit</span>
                                    </button>
                                    <button >
                                        <span className='al_menu_icon' style={{ fontSize: '18px' }}> <MdOutlineDeleteSweep /> </span>
                                        <span>Delete</span>
                                    </button>
                                </>
                            }


                        </div>

                        <div className="idicator_icondiv" style={{ width: '20px', height: '20px', right: '5px' }}></div>
                    </div>
                </div>
            )}
        </div>


    );
};

export default MoreOptionButtons;