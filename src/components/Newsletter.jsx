import React from 'react';

const Newsletter = () => {
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
            <form action="#" method="post">
              <div className="news_letter_input">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
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