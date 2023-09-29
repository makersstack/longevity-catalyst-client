import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data/projectData';
import { baseUrl } from '../globals';
import ScrollToTop from '../utils/RouteChange';

const FAQ = () => {
    ScrollToTop();

  
   

    const [accordionData, setAccordionData] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        // fetch('')
        // .then(res => res.json())
        // .then(data => setAccordionData(data))

        setAccordionData(data.faqsData);
    }, []);

    const toggleAccordion = (itemId) => {
        setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
      };

    return (
        <>
            {/* <!-- ST:- faq's question section --> */}
            <section className="full_width_faq_area">
                <div className="container">
                    <div className="faq_wrapper">
                        {/* <!-- faq head  --> */}
                        <div className="faq_head">
                            <h2>Frequently asked questions</h2>
                            <p>Everything you need to know about the product and billing.</p>
                        </div>
                        {/* <!-- faq questions  --> */}
                        <div className="faq_questions">
                            <div className="accordion">
                                {
                                    accordionData.map(data => {
                                        return (
                                            <div className="accordion-item" key={data.id}>
                                                <div className='accordion-header '
                                                    onClick={() => toggleAccordion(data.id)}>
                                                    <h3>{data.title}</h3>
                                                    <span className="toggle-icon accordion-icon-design"> {activeItem === data.id ? '-' : '+'}  </span>
                                                </div>
                                                <div className={`accordion-content ${activeItem === data.id ? 'active' : ''}`} >
                                                    <p>{data.desc}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                            </div>
                        </div>
                        {/* <!-- --  --> */}
                    </div>
                </div>
            </section>
            {/* <!-- ED:- faq's question section --> */}

            {/* <!-- ST:- have_question_contact --> */}
            <section className="full_width_have_question_contact">
                <div className="container">
                    <div className="have_question_wrapper">
                        <div className="user_image_box">
                            <img src={`${baseUrl}assets/img/demo-user-1.png`} alt="" />
                            <img className="middle-img" src={`${baseUrl}assets/img/demo-user-2.png`} alt="" />
                            <img src={`${baseUrl}assets/img/demo-user-3.png`} alt=" " />
                        </div>
                        <div className="have_question_content">
                            <h5>Still have questions?</h5>
                            <p>
                                Can’t find the answer you’re looking for? Please chat to our
                                friendly team.
                            </p>
                        </div>

                        <Link to='/about' className="btn btn-dark get_touch_btn">Get in touch</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ED:-  have_question_contact --> */}

        </>
    );
};

export default FAQ;