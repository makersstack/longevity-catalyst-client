import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import validator from 'validator';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/footer.css';
import subscriptionRequest from '../../services/subscription';

const Footer = () => {
  const [email, setEmail] = useState("");

  const currentYear = new Date().getFullYear();

  const handleSubscribe = async () => {
    try {
      if (!email || !email.trim()) {
        toast.error('Email address is required');
        return;
      }
      if (!validator.isEmail(email)) {
        toast.error('Invalid email address');
        return false;
      } else {
        await subscriptionRequest(email);
        setEmail('');
      }

    } catch (error) {
      console.error('Subscription failed');
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubscribe();
  };
  return (
    <>
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
                  <li> <Link to='/faqs'>FAQ's</Link></li>
                  <li> <Link to='/about'>About</Link></li>
                </ul>
              </div>
              {/* top right */}
              <div className="footer_top_right">
                <h3 className="footer_title">Stay up to date</h3>
                <form className="subcribe_form" onSubmit={handleFormSubmit}>
                  <input
                    type="email"
                    name="search_text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-over-dark">
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
      <Toaster />
    </>
  );
};

export default Footer;