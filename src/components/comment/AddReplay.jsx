import React, { useState } from 'react';

const AddReplay = ({ addNewReplay,openReplayBoxHandele }) => {
    const initialFormData = {
        replayText: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errorMsg, setErrorMsg] = useState({});


    const handelSubmitReplay = (event) => {
        event.preventDefault();
        setErrorMsg({});
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        let isValid = true;
        if (formDataObject.replayText.length === 0) {
            setErrorMsg((prevErrorMsg) => ({
                ...prevErrorMsg,
                replayText: "Write something in the box!",
            }));
            isValid = false;
        }
        if (isValid) {
            addNewReplay(formDataObject);
            setFormData(initialFormData); // Reset the form data
            setErrorMsg({});
        }
    };

    return (
        <>
            <div className="al_add_comment_box">
                <form onSubmit={handelSubmitReplay}>
                    <input type="text" placeholder="Write a replay..." value={formData.replayText} name="replayText" className={errorMsg.replayText ? 'border-warning' : ''} onChange={(e) => setFormData({ replayText: e.target.value })} />

                    {errorMsg.replayText && <div className="error-msg">{errorMsg.replayText}</div>}
                    <div className="add_comment_f_btns">
                        <button onClick={openReplayBoxHandele} className="btn btn-light">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-dark no-shadow">
                            Replay
                        </button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default AddReplay;