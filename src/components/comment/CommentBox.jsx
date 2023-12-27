import React, { useCallback, useEffect, useState } from 'react';
import { projectApi } from '../../api';
import '../../assets/styles/comment.css';
import AddComment from './AddComment';
import Comments from './Comments';

const CommentBox = ({ projectId }) => {
  const [Loading, setIsLoading] = useState();
  const [commentData, setCommentData] = useState([]);
  const [totalComment, setTotalComment] = useState(0);
  const [moreCount, setMoreCount] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(5);


  console.log(Loading);
  const fetchCommentsByProject = useCallback(async () => {
    try {
      setIsLoading(true);
      const paginationOptions = {
        page: page,
        limit: limit,
      };
      const response = await projectApi.getAllCommentByPost(projectId, paginationOptions);
      if (typeof response.data.data.data === 'object' && response.data.data.data !== null) {
        const commentArray = Object.values(response.data.data.data);
        if (page === 1) {
          setCommentData(commentArray);
        } else {
          setCommentData((prevPage) => [...prevPage, ...commentArray]);
        }

        const totalComment = response.data.data.meta.total;
        setTotalComment(totalComment);
      } else {
        console.error('Invalid data format: Expected an object with comment data');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

  }, [limit, projectId, setIsLoading, page]);
  
  useEffect(() => {
    setMoreCount(totalComment - commentData.length);
  }, [totalComment, commentData])

  useEffect(() => {
    fetchCommentsByProject();
  }, [fetchCommentsByProject]);

  const handleShowMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const addNewComment = async (formDataObject) => {
    try {
      setIsLoading(true);
      const response = await projectApi.addComment(formDataObject, projectId);

      const newComment = response?.data;

      if (newComment?.success) {
        setPage(1);
        fetchCommentsByProject();
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const EidtComment = async (commentID,formDataObject) => {
    try {
      setIsLoading(true);
      const response = await projectApi.updateComment(commentID,formDataObject);

      const newComment = response?.data;

      if (newComment?.success) {
        setPage(1);
        fetchCommentsByProject();
        
      }
    } catch (error) {
      console.error('Error Editing comment:', error);
    } finally {
      setIsLoading(false);
    }
    return true;
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
        setPage(1);
        fetchCommentsByProject();

        // setCommentData(commentData.filter((comment) => comment.id !== id));
        // setTotalComment(totalComment - 1);
        // setMoreCount(moreCount - 1);
      }
      // Do others 
    } catch (error) {
      throw new Error('Error Deleting comment:', error);
    } finally {
      setIsLoading(false);
      return true;
    }
  }

  const otherOperationData = {
    handleDeleteComment,
    EidtComment
  }

  return (
    <>
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
        <p style={{ marginTop: '10px' }}>No comments yet.</p>
      )}
    </>
  );
};

export default CommentBox;
