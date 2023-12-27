import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { MdEditNote, MdOutlineDeleteSweep } from 'react-icons/md';
import { RxDotsVertical } from 'react-icons/rx';
import Modal from 'react-responsive-modal';
import { useLocation, useNavigate } from 'react-router-dom';

const MoreOptionButtons = ({ projectId, openModal, ButtonsOperation }) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

        if (isDeleteModalOpen === true) {
            closeDropdown();
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDeleteModalOpen, isDropdownOpen]);


    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const handelDeletePoject = async (projectId) => {
        closeDeleteModal();
        await ButtonsOperation.DeleteProject(projectId);
    }
    
    const DeleteModal = () => {
        return (
            <Modal open={openDeleteModal} onClose={closeDeleteModal} center>
                <div className="delete_modal_body">
                    <h2 className='delete_modal_title'>Delete Confirmation</h2>
                    <p>Are you sure you want to delete this Project?</p>
                    <div className="modal_btns">
                        <button onClick={closeDeleteModal} className='btn btn-dark no-shadow'>Cancel</button>
                        <button onClick={() => handelDeletePoject(projectId)} className='btn btn-danger btn-dark no-shadow'>Delete</button>
                    </div>
                </div>
            </Modal>
        );
    };

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
                                location.pathname.startsWith('/dashboard/project') && <>
                                    <button onClick={() => navigate(`/dashboard/project/edit/${projectId}`)} >
                                        <span className='al_menu_icon' style={{ fontSize: '18px' }}> <MdEditNote /> </span>
                                        <span>Edit</span>
                                    </button>
                                    <button onClick={openDeleteModal}>
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

            {isDeleteModalOpen && (
                <>
                    <DeleteModal />
                </>
            )
            }
        </div>


    );
};

export default MoreOptionButtons;