import React, { useEffect, useState } from 'react';
import Modal from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import SignUpRadio from './common/SignUpRadio';

function SignupModal({ open, onClose, onSignUp }) {
  const [selectedValue, setSelectedValue] = useState('researcher');
  const radioOptions = [
    { value: 'researcher', label: 'Researcher sign-up' },
    { value: 'contributor', label: 'Contributor sign-up' },
    { value: 'user', label: 'User sign-up' },
  ];

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  const handleCreateAccountClick = () => {
    onSignUp(selectedValue);
  };
  useEffect(() => {
    if (!open) {
      setSelectedValue('');
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} center>
      <div className="modal-wrapper">
        <div className="custom-modal" id="signup_references">
          <div className="modal-wrapper">
            <div className="modal_head">
              <img src={logo} alt="logo" />
            </div>
            <div className="modal_body">
              <h2 className="modal_title">Choose Your Preferences.</h2>
              <form className="sign_up_preference" action="#" method="post">
                <SignUpRadio options={radioOptions} onRadioChange={handleRadioChange} selectedValue={selectedValue} />
                <button type="button" onClick={handleCreateAccountClick} className="btn btn-dark btn-full">
                  Create Account
                </button>
              </form>
            </div>
            <div className="modal_footer">
              <div className="have_account">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" onClick={onClose}>
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SignupModal;
