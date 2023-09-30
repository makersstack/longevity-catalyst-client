import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaChevronDown, FaRegUser } from 'react-icons/fa';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CustomSelect from '../CustomSelect';
import RadioButton from './RadioButton';

const Header = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const radioOptions = [
    { value: 'researcher', label: 'Researcher sign- up' },
    { value: 'contributor', label: 'Contributor sign- up' },
    { value: 'user', label: 'User sign- up' },
  ];

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
              <button className="dropdown-button" onClick={onOpenModal}>
                <FaRegUser />
                <FaChevronDown/>
              </button>



              <Modal open={open} onClose={onCloseModal} center>
                <div className="custom-modal" id="signup_references">
                  <div className="modal-wrapper">
                    <div className="modal_head">
                      <img src={logo} alt="logo" />
                    </div>
                    <div className="modal_body">
                      <h2 className="modal_title">Choose Your Preferences.</h2>
                      <form className="sign_up_preference" action="#" method="post">
                        <RadioButton options={radioOptions} />


                        <button type="submit" className="btn btn-dark btn-full">
                          Create Account
                        </button>
                      </form>
                    </div>
                    <div className="modal_footer">
                      <div className="have_account">
                        <p>Already have an account? <a href="login.html">Log in</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>




            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;