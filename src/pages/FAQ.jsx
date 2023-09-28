import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {

    const accrodionData = [
        {
            id: 1,
            title: 'Is there a free trial available?',
            desc: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
        },
        {
            id: 2,
            title: 'Can I change my plan later?',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
        },
        {
            id: 3,
            title: 'What is your cancellation policy?',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
        },
        {
            id: 4,
            title: 'Can other info be added to an invoice?',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
        },
        {
            id: 5,
            title: 'How does billing work?',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
        },
        {
            id: 6,
            title: 'How do I change my account email?',
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi iste doloribus ducimus architecto deserunt reprehenderit"
        }
    ]


    const [accordionData, setAccordionData] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        // fetch('products.json')
        // .then(res => res.json())
        // .then(data => setAccordionData(data))

        setAccordionData(accrodionData);
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
                                                    <span className="toggle-icon accordion-icon-design">+</span>
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
                            <img src="assets/img/user-1.png" alt="" />
                            <img className="middle-img" src="assets/img/user-2.png" alt="" />
                            <img src="assets/img/user-3.png" alt="" />
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