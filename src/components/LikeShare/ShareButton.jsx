import React, { useState } from 'react';
import { RiShareLine } from 'react-icons/ri';
import { apiKey } from '../../globals';

const ShareButton = ({ postId }) => {
  const [sharedLink, setSharedLink] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    // You can generate a shareable link based on the postId
    const shareableLink = `${apiKey}projects/${postId}`;

    // Set the generated shareable link in the state
    setSharedLink(shareableLink);

    // You can also copy the link to the clipboard if needed
    copyToClipboard(shareableLink);
    setIsCopied(true);
  };

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setIsCopied(true);
      }).catch((error) => {
        console.error('Failed to copy to clipboard: ', error);
      });
    } else {
      // Fallback for browsers that don't support the Clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
    }
  };
  
  return (
    <div>
      <button onClick={handleShare}>
        <RiShareLine /> Share
      </button>
      {sharedLink && (
        <div>
          <p>Share this link:</p>
          <input type="text" value={sharedLink} readOnly />
          <button onClick={() => copyToClipboard(sharedLink)}>
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
