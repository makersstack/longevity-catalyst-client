import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaChevronDown, FaRegUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CustomSelect from '../CustomSelect';
import SignupModal from '../SignupModal';

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCreateAccountClick = (selectedRole) => {
    if (selectedRole === 'researcher') {
      navigate('/sign-up/researcher');
    } else if (selectedRole === 'contributor') {
      navigate('/sign-up/contributor');
    } else if (selectedRole === 'user') {
      navigate('/sign-up/user');
    }
    closeModal();
  };


  return (
    <header>
      <div className='container'>
        <div className='header_wrapper'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header_search">
            <form action="#" method="post">
              <span className='header_search_icon'>
                <BiSearch />
              </span>
              <input
                type="text"
                name="search-text"
                placeholder="Project titles"
              />
              <div className="search_category custom-select">
                <CustomSelect />
              </div>
            </form>
          </div>
          <div className="header_buttons">
            <Link to='/login' className='btn btn-dark'>
              Login
            </Link>
            <div className="custom-dropdown">
              <button className="dropdown-button" onClick={openModal}>
                <FaRegUser />
                <FaChevronDown/>
              </button>
              
              <SignupModal open={modalOpen} onClose={closeModal} onSignUp={handleCreateAccountClick} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;