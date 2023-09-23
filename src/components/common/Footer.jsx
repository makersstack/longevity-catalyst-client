import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          {/* footer top area  */}
          <div className="footer_top_area">
            {/* top left  */}
            <div className="footer_top_left">
              {/* logo  */}
              <Link to='/'>
                <img src={logo} alt="dark logo" />
              </Link>
              {/* footer menus */}
              <ul>
                <li> <Link to='/'>Overview</Link></li>
                <li> <Link to='/'>Features</Link></li>
                <li> <Link to='/'>Pricing</Link></li>
                <li> <Link to='/'>Careers</Link></li>
                <li> <Link to='/'>Help</Link></li>
                <li> <Link to='/'>Privacy</Link></li>
              </ul>
            </div>
            {/* top right */}
            <div className="footer_top_right">
              <h3 className="footer_title">Stay up to date</h3>
              <form className="subcribe_form" action="#" method="post">
                <input
                  type="text"
                  name="search_text"
                  placeholder="Enter your email"
                />
                <button type="button" className="btn btn-over-dark">
                  Subscribe
                </button>
              </form>
            </div>

          </div>
          {/* footer bottom area */}
          <div className="footer_bottom_area">
            <p className="copyright_text">
              © {currentYear} <Link to='/'>LC Limited</Link>. All rights reserved.
            </p>
            <ul>
              <li>
                <Link to='/'>
                  Terms
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Privacy
                </Link>
              </li>
              <li>
                <Link to='/'>
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;