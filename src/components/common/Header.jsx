import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


const Header = () => {
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
              <BiSearch />
              <input
                type="text"
                name="search-text"
                placeholder="Project titles"
              />
              {/* <FiChevronDown/> */}
              <div className="search_category custom-select">
                <select name="se_category" id="">
                  <option value="Explore">Explore</option>
                  <option value="Explore">Explore 2</option>
                  <option value="Explore">Explore 3</option>
                </select>
              </div>
            </form>
          </div>
          <div className="header_buttons">
            <Link to='/' className='btn btn-dark'>
              Login
            </Link>
            <div className="custom-dropdown">
              <button className="dropdown-button" data-modal-id="signup_references">
                Icons
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;