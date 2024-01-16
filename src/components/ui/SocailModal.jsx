import React, { useEffect, useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
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

  const shareOnLinkedin = () => {
    const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(postLink)}`;
    window.open(linkedinShareUrl, '_blank');
  };
  
  const shareOnWhatsapp = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(postLink)}`;
    window.open(whatsappShareUrl, '_blank');
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
            <h4>Share This Post</h4>
            <h5>Spread the word about this Post on LC</h5>

            <div className='socail_modal_list'>
              <div className="socail_modal_list_single" onClick={closeModal}>
                <button onClick={shareOnFacebook}><FaFacebookF />
                </button>
                <span>Facebook</span>
              </div>
              <div className="socail_modal_list_single" onClick={closeModal}>
                <button onClick={shareOnLinkedin}><FaLinkedinIn />
                </button>
                <span>Linkedin</span>
              </div>
              <div className="socail_modal_list_single" onClick={closeModal}>
                <button onClick={shareOnTwitter}><FaTwitter />
                </button>
                <span>Twitter</span>
              </div>
              <div className="socail_modal_list_single" onClick={closeModal}>
                <button onClick={shareOnWhatsapp}><FaWhatsapp />
                </button>
                <span>WhatsApp</span>
              </div>
              <div className={copied ? "active socail_modal_list_single socail_modal_cp" : "socail_modal_list_single socail_modal_cp"}>
                <button onClick={copyToClipboard}>
                  <AiOutlineLink />
                </button>
                <span>{copied ? 'Link Copied' : 'Copy Link'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal >
  )
}

export default SocailModal