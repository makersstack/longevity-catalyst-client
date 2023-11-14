import React, { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const DargFileAttech = ({ errorMsg, setProfilePic }) => {
    const [dragging, setDragging] = useState(false);
    const [filePreview, setFilePreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        processDroppedFiles(e.dataTransfer.files);
    };

    // Function to process dropped files (used for both drop and input change)
    const processDroppedFiles = (files) => {
        if (files.length > 0) {
            const file = files[0]; // Assuming only one file is dropped
            const reader = new FileReader();
            setProfilePic(file);
            if (fileInputRef.current) {
                fileInputRef.current.value = ''; // Reset the input value
            }
            reader.onload = (event) => {
                // Set the file preview to the data URL of the dropped file
                setFilePreview(event.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    // Handle the file input change
    const handleFileInputChange = (e) => {
        processDroppedFiles(e.target.files);
    };

    return (
        <>
            <label htmlFor="img_up" className={`drag_imge_input ${dragging ? 'dragging' : ''} ${errorMsg.profileImage ? 'border-warring' : ''}`} onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>
                <input ref={fileInputRef} className={errorMsg.profileImage ? 'border-warring' : ''} type="file" name='profileImage' id="img_up" onChange={handleFileInputChange} />
                {filePreview ? (
                    <img className='dargedImage' src={filePreview} alt="Uploaded" />
                ) : (
                    <div className='al_icon_upadiong'>
                        <FiUploadCloud />
                    </div>
                )}

                <p><span>Click to upload</span> or drag and drop</p>
                <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                {errorMsg.profileImage && <div className='error-msg'>{errorMsg.profileImage}</div>}
            </label>

        </>
    );
};

export default DargFileAttech;
