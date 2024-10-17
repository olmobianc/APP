import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLink, faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/ShareOptions.scss';

const ShareOptions = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const download = () => {
    // Implement download functionality here
    console.log('Download functionality to be implemented');
  };

  return (
    <div className="share-options">
      <span className="share-text">Share this page:</span>
      <button onClick={shareOnX} className="share-button x">
        <FontAwesomeIcon icon={faXTwitter} />
      </button>
      <button onClick={shareOnFacebook} className="share-button facebook">
        <FontAwesomeIcon icon={faFacebook} />
      </button>
      <button onClick={copyLink} className="share-button copy-link">
        <FontAwesomeIcon icon={faLink} />
      </button>
      <button onClick={download} className="share-button download">
        <FontAwesomeIcon icon={faDownload} /> Download
      </button>
    </div>
  );
};

export default ShareOptions;
