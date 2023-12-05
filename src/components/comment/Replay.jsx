import React, { useState } from 'react';
import { LiaHeart } from 'react-icons/lia';
import { PiLinkSimpleHorizontalLight } from 'react-icons/pi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import AddReplay from './AddReplay';

const Replay = ({ data, addNewReplay }) => {
    const [isAddReplay,setIsAddReplay] = useState(false);
    const openReplayBoxHandeler = () =>{
        setIsAddReplay(!isAddReplay);
    }
    return (

        <div className="comment_card replay_card">
            {/* card head  */}
            <div className="comment_card_head">
                <div className="commenter_info">
                    <Link to="/user/username">
                        <img className='user_thum_style' src={data?.User.profileImage} alt="userImage" />
                    </Link>
                    <div className="post_user_fet">
                        <Link to="/user/Esther Howard" className="user_name">{data?.User?.full_name}</Link>
                    </div>
                    <span className="comment_time">5 hr. ago</span>
                </div>
                <span className="comment_date">27 April 2023</span>
            </div>
            {/* card body  */}
            <div className="comment_card_body">
                {data.replyText}

            </div>
            {/* card footer  */}
            <div className="comment_card_footer ">
                <div className="devide_buttons_wraper">
                    <div className="comment_box_buttons">
                        {/* <div className="post_arrow">
                            <button type="button">
                                <BiUpvote />
                            </button>
                            <span className="comment_vote_count">2.5K</span>
                            <button>
                                <BiDownvote />
                            </button>
                        </div> */}
                        {/* <button className="project_effective_button replay_btn" onClick={openReplayBoxHandeler}>
                            <MdOutlineAddComment /> <span>Replay</span>
                        </button> */}
                        <button className="project_effective_button">
                            <RiShareForwardFill /> Share
                        </button>
                    </div>
                    <div className="comment_box_buttons">
                        {/* hard react button  */}
                        <button className="project_effective_button">
                            <LiaHeart />
                        </button>
                        {/* copy link button  */}
                        <button className="project_effective_button">
                            <PiLinkSimpleHorizontalLight />
                        </button>
                    </div>
                </div>
                {
                    isAddReplay && <AddReplay addNewReplay={addNewReplay} openReplayBoxHandele={openReplayBoxHandeler} />
                }
            </div>

        </div>
    );
};

export default Replay;