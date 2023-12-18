/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { MdOutlineAddComment } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { projectApi } from '../../api';
import useAuth from '../../hooks/UseAuth';
import useLoading from '../../hooks/useLoading';
import dateTimeHel from '../../utils/dateTimeHel';
import AddReplay from './AddReplay';
import EditDeleteComment from './EditDeleteComment';
import Replay from './Replay';
const Comments = ({ data, othersOperationData }) => {
    const { userInfo, isLoggedIn } = useAuth();
    const isAuthor = userInfo && userInfo.id === data?.userId;
    const { setIsLoading } = useLoading();
    const navigate = useNavigate();
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

    const handleDeleteReplay = async (id) => {
        try {
            setIsLoading(true);
            if (!id) {
                throw new Error('Replay ID not provided');
            }
            const response = await projectApi.deleteReplay(id);
            const deleteSt = response?.data;
            if (deleteSt?.success) {
                if (response?.data?.data?.id) {
                    const updateRepalyData = replies.filter(reply => reply.id !== response?.data?.data?.id);
                    setReplies(updateRepalyData);
                }
            }
            // Do others 
        } catch (error) {
            throw new Error('Error Deleting comment:', error);
        } finally {
            setIsLoading(false);
            return true;
        }
    }

    const toggleOpenReplyBox = () => {
        if (!isLoggedIn) {
            navigate('/login?emsg=Please login to reply projects');
        }
        setIsAddReplay(prevState => !prevState);
        setOpenCmnt(true);
        // TODO ALIFUR
        // setMoreCount((prevCount) => data?.Replies?.length - replyLimit);
    };

    const toggleOpenComments = () => {
        setOpenCmnt(!isOpenCmnt);
    };

    const replayOperationData = {
        handleDeleteReplay
    }

    // Edit Comment Functionality
    return (
        <>
            <div className="comment_card">
                <div className="comment_card_head">
                    <div className="commenter_info">
                        <Link to={`/${data?.User?.username}`}>
                            <img className='user_thum_style' src={data?.User?.profileImage} alt="userImage" />
                        </Link>
                        <div className="post_user_fet">
                            <Link to={`/${data?.User?.username}`} className="user_name">{data?.User?.username}</Link>

                        </div>
                        <span className="comment_time">
                            {dateTimeHel.calculateDurationFromNow(data.createdAt)}
                        </span>
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
                                    <EditDeleteComment commentId={id} othersOperationData={othersOperationData} />
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
                                <Replay key={singleData.id} data={singleData} replayOperationData={replayOperationData} />
                            ))
                        ) : (
                            <p style={{ marginTop: '10px', marginLeft: '20px' }}>No replay yet.</p>
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