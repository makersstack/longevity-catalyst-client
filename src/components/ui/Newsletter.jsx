import React, { useState } from 'react';
import toast from 'react-hot-toast';
import validator from 'validator';
import '../../assets/styles/newsletter.css';
import subscriptionRequest from '../../services/subscription';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    try {
      if (!email || !email.trim()) {
        toast.error('Email address is required');
        return;
      }
      if (!validator.isEmail(email)) {
        toast.error('Invalid email address');
      }
      await subscriptionRequest(email);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed');
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubscribe();
  };
  return (
    // <!-- ST:- Newsletter section  -->
    <section className="full_width_newsletter_section">
      <div className="container">
        <div className="newsletter_wrapper">
          <div className="section_header">
            <h2>Sign up for our newsletter</h2>
            <p>
              Be the first to know about releases and industry news and
              insights.
            </p>
          </div>
          {/* <!-- newsletter form  --> */}
          <div className="newsletter_form_area">
            <form onSubmit={handleFormSubmit}>
              <div className="news_letter_input">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-dark no-shadow">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    // <!-- ED:- Newsletter section  -->
  );
};

export default Newsletter;