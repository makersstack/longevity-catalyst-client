import React, { useState } from 'react';

const EditCommentFrom = ({editOperationData}) => {
    const [errorMsg, setErrorMsg] = useState({});
    const {commentId, defaultValue,EditComment,setIsEditComment} = editOperationData;
  
    // const handelOpenCommentForm = (event) => {
    //     event.preventDefault();
    //     setOpenForm(true);
    // };
  
    const handelCloseCommentForm = (event) => {
      event.preventDefault();
      setIsEditComment(false);
      setErrorMsg({});
    };
  
    const handelSubmitComment = async (event) => {
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
        const response = await EditComment(commentId,formDataObject);
        if(response){
            setIsEditComment(false);
        }
        setErrorMsg({});
      }
    };
  


    return (
        <>
        <div className="al_add_comment_box">
          <form onSubmit={handelSubmitComment}>
            <textarea
              className={errorMsg.commentText ? 'border-warning' : ''}
              name="commentText"
              id=""
              rows="2"
              placeholder="Write a comment..."
              defaultValue={defaultValue}
            >
        
            </textarea>
            {errorMsg.commentText && <div className="error-msg">{errorMsg.commentText}</div>}
            <div className="add_comment_f_btns">
              <button onClick={handelCloseCommentForm} className="btn btn-light">
                Cancel
              </button>
              <button type="submit" className="btn btn-dark no-shadow">
                Update
              </button>
            </div>
          </form>
        </div>
     
    </>
    );
};

export default EditCommentFrom;