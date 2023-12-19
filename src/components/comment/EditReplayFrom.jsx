import React, { useState } from 'react';

const EditReplayFrom = ({ editReplayOperationData }) => {
    const [errorMsg, setErrorMsg] = useState({});
    const { replayId, defaultValue, handelEidtReplay, setIsEditReplay } = editReplayOperationData;
    const onCancle = () => {
        setIsEditReplay(false);
    }

    const handelSubmitReplay = async (event) => {
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
            setErrorMsg({});
            const response = await handelEidtReplay(replayId, formDataObject);
            if (response) {
                setIsEditReplay(false);
            }
        }
    };

    return (
        <>
            <div className="al_add_comment_box">
                <form onSubmit={handelSubmitReplay}>
                    <input type="text" placeholder="Write a replay..." name="replyText" className={errorMsg.replyText ? 'border-warning' : ''} defaultValue={defaultValue} />

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

export default EditReplayFrom;