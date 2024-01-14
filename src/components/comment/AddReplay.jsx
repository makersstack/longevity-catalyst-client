import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AddReplay = ({ addNewReplay, setIsAddReplay }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState({});

    const onCancle = () => {
        setIsAddReplay(false);
    }

    const handelSubmitReplay = (event) => {
        if (!isLoggedIn) {
            navigate('/login?emsg=Please login to reply projects');
        }
        event.preventDefault();
        setErrorMsg({});
        let isValid = true;
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        if (formDataObject.replyText.trim().length === 0) {
            setErrorMsg((prevErrorMsg) => ({
                ...prevErrorMsg,
                replyText: "Write something in the box!",
            }));
            isValid = false;
        }
        if (isValid) {
            addNewReplay(formDataObject);
            setIsAddReplay(false);
            setErrorMsg({});
        }
    };

    return (
        <>
            <div className="al_add_comment_box">
                <form onSubmit={handelSubmitReplay}>
                    <input type="text" placeholder="Write a replay..." name="replyText" className={errorMsg.replyText ? 'border-warning' : ''} />

                    {errorMsg.replyText && <div className="error-msg">{errorMsg.replyText}</div>}
                    <div className="add_comment_f_btns">
                        <button onClick={onCancle} className="btn btn-light">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-dark no-shadow">
                            Reply
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default AddReplay;