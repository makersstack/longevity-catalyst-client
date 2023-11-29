import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const AddComment = ({ addNewComment, projectId }) => {
  // const { userInfo } = useAuth();
  const initialFormData = {
    commentText: '',
  };
  const [isOpenForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errorMsg, setErrorMsg] = useState({});

  const handelOpenCommentForm = (event) => {
    event.preventDefault();
    setOpenForm(true);
  };

  const handelCloseCommentForm = (event) => {
    event.preventDefault();
    setOpenForm(false);
    setFormData(initialFormData);
    setErrorMsg({});
  };

  const handelSubmitComment = (event) => {
    event.preventDefault();
    setErrorMsg({});
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    let isValid = true;

    if (formDataObject.commentText.length === 0) {
      setErrorMsg((prevErrorMsg) => ({
        ...prevErrorMsg,
        commentText: "Write something in the box!",
      }));

      isValid = false;
    }
    if (isValid) {
      addNewComment(formDataObject);
      setOpenForm(false);
      setFormData(initialFormData);
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
              value={formData.commentText}
              onChange={(e) => setFormData({ commentText: e.target.value })}
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
