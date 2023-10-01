import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const DargFileAttech = () => {

    const [dragging, setDragging] = useState(false);
    const [filePreview, setFilePreview] = useState(null);
    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const files = Array.from(e.dataTransfer.files);

        // Process the dropped files (e.g., upload or display them)
        if (files.length > 0) {
            const file = files[0]; // Assuming only one file is dropped
            const reader = new FileReader();

            reader.onload = (event) => {
                // Set the file preview to the data URL of the dropped file
                setFilePreview(event.target.result);
            };

            reader.readAsDataURL(file);
        }
    };


    return (
        <>
            <label htmlFor="img_up" className={`drag_imge_input ${dragging ? 'dragging' : ''}`} onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                <input type="file" name='profile_pic' id="img_up" />
                {filePreview ? (
                    <img className='dargedImage' src={filePreview} alt="Uploaded" />
                ) : (
                    <div className='al_icon_upadiong'>
                        <FiUploadCloud />
                    </div>
                )}

                <p><span>Click to upload</span> or drag and drop</p>
                <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </label>



        </>

    );
};

export default DargFileAttech;