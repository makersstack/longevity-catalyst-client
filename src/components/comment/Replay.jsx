import React from 'react';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { LiaHeart } from 'react-icons/lia';
import { MdOutlineAddComment } from 'react-icons/md';
import { PiLinkSimpleHorizontalLight } from 'react-icons/pi';
import { RiShareForwardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import UserProfileImage2 from "../../assets/images/user-1.png";

const Replay = () => {
    return (

        <div className="comment_card replay_card">
            {/* card head  */}
            <div className="comment_card_head">
                <div className="commenter_info">
                    <Link to="/user/username">
                        <img className='user_thum_style' src={UserProfileImage2} alt="userImage" />
                    </Link>
                    <div className="post_user_fet">
                        <Link to="/user/Esther Howard" className="user_name">Esther Howard</Link>
                    </div>
                    <span className="comment_time">5 hr. ago</span>
                </div>
                <span className="comment_date">27 April 2023</span>
            </div>
            {/* card body  */}
            <div className="comment_card_body">
                <p>I’ve been described as “having processed the highest amount of broad information about the world of anyone I know” and “having powers to transcend dunbar’s number” and an activator for early-stage people.</p>
                <p>I know pretty much all the aging online communities and keep track of all the people (eg someone said “I know everyone”). I’m also on MANY other places online (starting with Quora).</p>
                <p>Uhh you can google-stalk me for more. I’m a unicorn - I’m utterly unlike anyone else (though I do spend much of my time reading and not necessarily as much on doing my own thing [yet]). Longevity is what matters most, but I originally came from astronomy/climate science.</p>

            </div>
            {/* card footer  */}
            <div className="comment_card_footer">
                <div className="devide_buttons_wraper">
                    <div className="comment_box_buttons">
                        <div className="post_arrow">
                            <button type="button">
                                <BiUpvote />
                            </button>
                            <span className="comment_vote_count">2.5K</span>
                            <button>
                                <BiDownvote />
                            </button>
                        </div>
                        <button className="project_effective_button replay_btn">
                            <MdOutlineAddComment /> <span>Replay</span>
                        </button>
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
            </div>

        </div>
    );
};

export default Replay;