import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const AddComment = ({ addNewComment }) => {

  const [isOpenForm, setOpenForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});

  const handelOpenCommentForm = (event) => {
    event.preventDefault();
    setOpenForm(true);
  };

  const handelCloseCommentForm = (event) => {
    event.preventDefault();
    setOpenForm(false);
    setErrorMsg({});
  };

  const handelSubmitComment = (event) => {
    event.preventDefault();
    setErrorMsg({});
    let isValid = true;
    const formCommentData = new FormData(event.target);
    const formDataObject = {};
    formCommentData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    if (formDataObject.commentText.trim().length === 0) {
      setErrorMsg((prevErrorMsg) => ({
        ...prevErrorMsg,
        commentText: "Write something in the box!",
      }));
      isValid = false;
    }
    
    if (isValid) {
      addNewComment(formDataObject);
      setOpenForm(false);
      setErrorMsg({});
    }
  };

  return (
    <>
      <button onClick={handelOpenCommentForm} className="btn btn-light add_comment_btn">
        <AiOutlinePlus />
        Add Comment
      </button>
      {isOpenForm && (
        <div className="al_add_comment_box">
          <form onSubmit={handelSubmitComment}>
            <textarea
              className={errorMsg.commentText ? 'border-warning' : ''}
              name="commentText"
              id=""
              rows="5"
              placeholder="Write a comment..."
            ></textarea>
            {errorMsg.commentText && <div className="error-msg">{errorMsg.commentText}</div>}
            <div className="add_comment_f_btns">
              <button onClick={handelCloseCommentForm} className="btn btn-light">
                Cancel
              </button>
              <button type="submit" className="btn btn-dark no-shadow">
                Post
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddComment;
