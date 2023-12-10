/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { MdOutlineAddComment } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { projectApi } from '../../api';
import useAuth from '../../hooks/UseAuth';
import useLoading from '../../hooks/useLoading';
import AddReplay from './AddReplay';
import EditDeleteComment from './EditDeleteComment';
import Replay from './Replay';
const Comments = ({ data }) => {
    const { userInfo } = useAuth();
    const isAuthor = userInfo && userInfo.id === data?.User?.id;
    const { setIsLoading } = useLoading();

    const [replyLimit, setReplyLimit] = useState(2);
    const [moreCount, setMoreCount] = useState(0);
    const [isOpenCmnt, setOpenCmnt] = useState(false);
    const [isAddReplay, setIsAddReplay] = useState(false);
    const handleShowMoreClick = () => {
        setReplyLimit((prevLimit) => prevLimit + 5);
        // TODO ALIFUR
        setMoreCount((prevCount) => data?.Replies?.length - replyLimit);
    };  
    const [replies, setReplies] = useState(data?.Replies || []);
    const { projectId, id } = data;

    const addNewReplay = async (formDataObject) => {
        try {
            setIsLoading(true);

            if (!projectId || !id) {
                throw new Error('Project ID or Comment ID not provided');
            }
            const response = await projectApi.addReply(formDataObject, projectId, id);
            const newReply = response?.data?.data;
            setReplies(prevReplies => [...prevReplies, newReply]);
            // Do others 
        } catch (error) {
            throw new Error('Error adding comment:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleOpenReplyBox = () => {
        setIsAddReplay(prevState => !prevState);
        setOpenCmnt(true);
        // TODO ALIFUR
        // setMoreCount((prevCount) => data?.Replies?.length - replyLimit);
    };

    const toggleOpenComments = () => {
        setOpenCmnt(!isOpenCmnt);
    };

    // Edit Comment Functionality
    return (
        <>
            <div className="comment_card">
                <div className="comment_card_head">
                    <div className="commenter_info">
                        <Link to="/user/username">
                            {/* TODO ALIFUR */}
                            <img className='user_thum_style' src={data.User?.profileImage} alt="userImage" />
                        </Link>
                        <div className="post_user_fet">
                            <Link to="/user/Esther Howard" className="user_name">{data.User?.username}</Link>
                        </div>
                        {/* TODO ALIFUR */}
                        <span className="comment_time">5 hr. ago</span>
                    </div>
                </div>
                <div className="comment_card_body">
                    <p>{data.commentText}</p>
                </div>
                <div className="comment_card_footer">
                    <div className="devide_buttons_wraper">
                        <div className="comment_box_buttons">
                            <button onClick={toggleOpenComments} className="box_open_close_icon"> {isOpenCmnt ? '-' : '+'}  </button>
                            <button className="project_effective_button replay_btn" onClick={toggleOpenReplyBox}>
                                <MdOutlineAddComment /> <span>Reply</span>
                            </button>
                            {
                                isAuthor && (
                                    <EditDeleteComment />
                                )
                            }

                        </div>
                    </div>
                    {
                        isAddReplay && <AddReplay addNewReplay={addNewReplay} setIsAddReplay={setIsAddReplay} />
                    }

                    {
                        isOpenCmnt && <> {replies.length !== 0 ? (
                            replies.slice(0, replyLimit).map((singleData) => (
                                <Replay key={singleData.id} data={singleData} />
                            ))
                        ) : (
                            <> No Replies yet ..</>
                        )}
                        </>
                    }

                </div>
                {isOpenCmnt &&
                    moreCount > 0 && (
                        <div className="devide_buttons_wraper">
                            <div className="comment_box_buttons">
                                <button onClick={handleShowMoreClick} className='show_more_button' >
                                    <span className='box_open_close_icon'> + </span>
                                    <span >{moreCount} View More replies</span>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Comments;