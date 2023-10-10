import React from 'react';
import { BsFillPinFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import UserProfileImage from "../../assets/images/user-2.png";

const PinBox = () => {
    return (

        <div className="comment_pin_box">
            <span className='pin_icon'>
                <BsFillPinFill />
            </span>
            <Link to="/user/username">
                <img className='user_thum_style' src={UserProfileImage} alt="userImage" />
            </Link>
            <span className="pin_data_info">Pinned Globally May 23, 2023</span>
        </div>

    );
};

export default PinBox;