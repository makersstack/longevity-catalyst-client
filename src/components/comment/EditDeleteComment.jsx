import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Modal from 'react-responsive-modal';

const EditDeleteComment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const handleDeleteComment = () => {
    setIsModalOpen(false);
  }

  const DeleteModal = () => {
    return (
      <Modal open={openModal} onClose={closeModal} center>
        <div className="delete_modal_body">
          <h2 className='delete_modal_title'>Delete Confirmation</h2>
          <p>Are you sure you want to delete this comment?</p>
          <div className="modal_btns">
            <button onClick={closeModal} className='btn btn-dark no-shadow'>Cancel</button>
            <button onClick={handleDeleteComment} className='btn btn-danger btn-dark no-shadow'>Delete</button>
          </div>
        </div>
      </Modal>
    );
  };
  const handelOpenCommentForm = () => {
    return true;
  }
  return (
    <>
      <button className="project_effective_button" onClick={handelOpenCommentForm}>
        <FaEdit />
      </button>
      <button className="project_effective_button" onClick={openModal}>
        <RiDeleteBin5Line />
      </button>
      {
        isModalOpen && (
          <>
            <DeleteModal />
          </>
        )
      }
    </>
  );
};

export default EditDeleteComment;
