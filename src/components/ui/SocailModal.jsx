import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import Modal from 'react-responsive-modal';

const SocailModal = ({ isOpen, closeModal, postLink }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(postLink);
    setCopied(true);
  };
  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postLink)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(postLink)}`;
    window.open(twitterShareUrl, '_blank');
  };
  useEffect(() => {
    if (!isOpen) {
      setCopied(false);
    }
  }, [isOpen]);
  
  const bg = {
    overlay: {
      background: "rgba(0, 0, 0, 0.2)"
    }
  };
  return (
    <Modal open={isOpen} onClose={closeModal} center styles={bg}>
      <div className="modal-wrapper">
        <div className="custom-modal" id="socail_references">
          <div className='socail_modal'>
            <h2>Share Post</h2>

            <div className='socail_modal_list'>
              <button onClick={shareOnFacebook}><FaFacebook /></button>
              <button onClick={shareOnTwitter}><FaTwitter /></button>
              {/* Add more social media share buttons as needed */}
            </div>
            <div className='socail_modal_body'>
              <p>Or copy link</p>
              <div className='copy_link'>
                <input type="text" value={postLink} readOnly />
                <button onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy Link'}</button>
              </div>
            </div>
            <button onClick={closeModal}></button>
          </div>
        </div>
      </div>
    </Modal >
  )
}

export default SocailModal