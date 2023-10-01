import React from 'react';
import { HiHome, HiOutlineInformationCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
    const linkStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
       
    }
    return (
        <>
            {/* <!-- ST:- Auth header menu  --> */}
            <section className="full_with_other_menu">
                <div className="container">
                    <div className="others_menu">
                        <ul>
                            <li>
                                <Link to='/' style={linkStyle}> <HiHome />  Home</Link>
                            </li>
                            <li>

                                <Link to='/about'  style={linkStyle}> <HiOutlineInformationCircle /> About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- ED:- Auth header menu  --> */}
        </>
    );
};

export default AuthHeader;