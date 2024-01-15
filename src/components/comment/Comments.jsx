/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { MdOutlineAddComment } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { projectApi } from '../../api';
import { avatersFor } from '../../constants/avaters';
import useAuth from '../../hooks/useAuth';
import dateTimeHel from '../../utils/dateTimeHel';
import ImageTagWithFallback from '../common/ImageTagWithFallback';
import CommentSkeleton from '../skeleton/CommentSkeleton';
import AddReplay from './AddReplay';
import EditCommentFrom from './EditCommentFrom';
import EditDeleteComment from './EditDeleteComment';
import Replay from './Replay';
const Comments = ({ data, othersOperationData }) => {
    const { userInfo, isLoggedIn } = useAuth();
    const isAuthor = userInfo && userInfo.id === data?.userId;
    const [loading, setIsLoading] = useState();
    const navigate = useNavigate();

    const [moreCount, setMoreCount] = useState(0);
    const [isOpenCmnt, setOpenCmnt] = useState(false);
    const [isAddReplay, setIsAddReplay] = useState(false);

    const [page, setPage] = useState(1);
    const [totalReplies, setTotalReplies] = useState(0);
    const [limit] = useState(3);
    const { projectId, id: commentId } = data;
    const [repliesData, setRepliesData] = useState([]);
    const [resetCount, setResetCount] = useState(false);

    const fetchReplayByComment = useCallback(async (cId) => {
        try {
            setIsLoading(true);
            const paginationOptions = {
                page: page,
                limit: limit,
            };
            const response = await projectApi.getAllReplyByComment(cId, paginationOptions);
            if (typeof response.data.data.data === 'object' && response.data.data.data !== null) {
                const repliesArray = response.data.data.data;
                if (page === 1) {
                    setRepliesData(repliesArray);
                } else {
                    setRepliesData((repliesData) => [...repliesData, ...repliesArray]);
                }

                const totalReply = response.data.data.meta.total;
                setTotalReplies(totalReply);
                setResetCount(true);
            } else {
                console.error('Invalid data format: Expected an object with replay data');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    }, [limit, commentId, setIsLoading, page]);

    useEffect(() => {
        let isMounted = true;
        try {
            if (isMounted) {
                if(resetCount){
                   setMoreCount(totalReplies - repliesData.length); 
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        return () => {
            isMounted = false;
        };

    }, [totalReplies, repliesData])



    const handleShowMoreClick = () => {
        setPage((prevPage) => prevPage + 1);
        fetchReplayByComment(commentId);

    };

    const addNewReplay = async (formDataObject) => {
        try {
            // setIsLoading(true);

            if (!projectId || !commentId) {
                throw new Error('Project ID or Comment ID not provided');
            }
            const response = await projectApi.addReply(formDataObject, projectId, commentId);

            const newReply = response?.data;
            if (newReply?.success) {
                // setPage(1);
                // fetchReplayByComment(commentId);
                const dats = [newReply?.data];
                setRepliesData((prevData) => [...dats, ...prevData]);
                setOpenCmnt(true);
            }


            // Do others 
        } catch (error) {
            throw new Error('Error adding comment:', error);
        } finally {
            // setIsLoading(false);
        }
    };

    const handleDeleteReplay = async (id) => {
        try {
            // setIsLoading(true);
            if (!id) {
                throw new Error('Replay ID not provided');
            }
            const response = await projectApi.deleteReplay(id);
            const deleteSt = response?.data;
            if (deleteSt?.success) {
                if (response?.data?.data?.id) {
                    const updateRepalyData = repliesData.filter(reply => reply.id !== response?.data?.data?.id);
                    setRepliesData(updateRepalyData);
                }
                // setPage(1);
                // fetchReplayByComment(commentId);


                if (repliesData.length === 1) {
                    setPage(1);
                    fetchReplayByComment(commentId);
                }
                setResetCount(false);

            }
            // Do others 
        } catch (error) {
            throw new Error('Error Deleting comment:', error);
        } finally {
            // setIsLoading(false);
            return true;
        }
    }
    const handelEidtReplay = async (replayId, formDataObject) => {
        try {
            // setIsLoading(true);
            const response = await projectApi.updateReplay(replayId, formDataObject);
            const newSt = response?.data;
            const newReplay = response?.data?.data;

            if (newSt?.success && newReplay) {
                const updatedReplies = repliesData.map(reply => {
                    if (reply.id === newReplay.id) {
                        return newReplay;
                    }
                    return reply;
                });

                setRepliesData(updatedReplies);
            }


        } catch (error) {
            console.error('Error Editing Replay:', error);
        } finally {
            // setIsLoading(false);
        }
        return true;
    };



    const toggleOpenReplyBox = () => {
        if (!isLoggedIn) {
            navigate('/login?emsg=Please login to reply projects');
        }
        setIsAddReplay(!isAddReplay);
    };

    const toggleOpenComments = () => {
        setOpenCmnt(!isOpenCmnt);
        if (!isOpenCmnt) {
            fetchReplayByComment(commentId);
            setPage((prevPage) => prevPage + 1);
        } else {
            setPage(1);
        }
    };

    const [isEditComment, setIsEditComment] = useState(false);

    const EditDelteOperationData = {
        handleDeleteComment: othersOperationData.handleDeleteComment,
        setIsEditComment
    }

    const replayOperationData = {
        handleDeleteReplay,
        handelEidtReplay
    }

    const editOperationData = {
        EditComment: othersOperationData.EidtComment,
        defaultValue: data.commentText,
        commentId: commentId,
        setIsEditComment
    }

    return (
        <>
            <div className="comment_card">
                <div className="comment_card_head">
                    <div className="commenter_info">
                        <Link to={`/${data?.User?.username}`}>
                        <ImageTagWithFallback src={data?.User?.profileImage} fallbackSrc={avatersFor.user} alt={data?.User?.username} golClass="user_thum_style" />
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
                    {
                        isEditComment ? (
                            <EditCommentFrom editOperationData={editOperationData} />
                        ) : (
                            <p>{data.commentText}</p>
                        )
                    }

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
                                    <EditDeleteComment commentId={commentId} othersOperationData={EditDelteOperationData} />
                                )
                            }

                        </div>
                    </div>
                    {
                        isAddReplay && <AddReplay addNewReplay={addNewReplay} setIsAddReplay={setIsAddReplay} />
                    }

                    {
                        loading ? ([1, 2].map((item) => (
                            <CommentSkeleton key={item} cTClass={"replaySkt"} />
                        ))) :
                            isOpenCmnt && <> {
                                repliesData.length !== 0 ? (
                                    repliesData.map((singleData) => (
                                        <Replay key={singleData.id} data={singleData} replayOperationData={replayOperationData} />
                                    ))
                                ) : (
                                    <p style={{ marginTop: '10px', marginLeft: '20px' }}>No replay yet.</p>
                                )
                            }
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