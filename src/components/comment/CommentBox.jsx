import React, { useCallback, useEffect, useState } from 'react';
import { projectApi } from '../../api';
import '../../assets/styles/comment.css';
import useLoading from '../../hooks/useLoading';
import Loader from '../ui/Loader';
import AddComment from './AddComment';
import Comments from './Comments';

const CommentBox = ({ projectId }) => {
  const { setIsLoading } = useLoading();
  const [commentData, setCommentData] = useState([]);
  const [commentLimit, setCommentLimit] = useState(2);
  const [moreCount, setMoreCount] = useState(0);
  const fetchCommentsByProject = useCallback(async () => {
    try {
      setIsLoading(true);
      const paginationOptions = {
        limit: commentLimit,
      };
      const response = await projectApi.getAllCommentByPost(projectId, paginationOptions);
      if (typeof response.data.data.data === 'object' && response.data.data.data !== null) {
        const commentArray = Object.values(response.data.data.data);
        setCommentData(commentArray);
        const totalCommentCount = response.data.data.meta.total - commentLimit;
        setMoreCount(totalCommentCount > 0 ? totalCommentCount : 0);
        // console.log("commentData", commentData);
      } else {
        console.error('Invalid data format: Expected an object with comment data');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

  }, [commentLimit, projectId, setIsLoading])

  useEffect(() => {
    fetchCommentsByProject();
  }, [fetchCommentsByProject]);

  const handleShowMoreClick = () => {
    setCommentLimit((prevLimit) => prevLimit + 5);
  };

  const addNewComment = async (formDataObject) => {
    try {
      setIsLoading(true);
      const response = await projectApi.addComment(formDataObject, projectId);

      const newComment = response?.data;

      if (newComment?.success) {
        fetchCommentsByProject();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      setIsLoading(true);

      if (!id) {
        throw new Error('Comment ID not provided');
      }
      const response = await projectApi.deleteComment(id);
      const deleteSt = response?.data;
      if (deleteSt?.success) {
        fetchCommentsByProject();
      }
      // Do others 
    } catch (error) {
      throw new Error('Error Deleting comment:', error);
    } finally {
      setIsLoading(false);
      return true;
    }
    // setIsModalOpen(false);
  }

  const otherOperationData = {
    handleDeleteComment
  }

  return (
    <>
      <Loader />
      <div className="details_block commnet_add_box">
        <AddComment addNewComment={addNewComment} projectId={projectId} />
      </div>
      {commentData.length > 0 ? (
        <>
          {commentData.map((comment) => (
            <Comments key={comment.id} data={comment} othersOperationData={otherOperationData} />
          ))}
          {moreCount > 0 && (
            <div className="devide_buttons_wraper">
              <div className="comment_box_buttons">
                <button onClick={handleShowMoreClick} className="show_more_button">
                  <span className="box_open_close_icon"> + </span>
                  <span>{moreCount} View More Comments</span>
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        <p style={{marginTop: '10px'}}>No comments yet.</p>
      )}
    </>
  );
};

export default CommentBox;
