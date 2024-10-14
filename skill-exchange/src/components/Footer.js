import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the brand icons


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pre">
        <div className="get-started-container">
          <h2 className="get-started-title">Go learn everything with everyone now.</h2>
          <button className="get-started-button" onClick={console.log("hello")}>
            Join Marcopolo
          </button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo">marcopolo</span>
        </div>
        <div className="footer-columns">
          <div className="footer-section">
            <h4 className="footer-section__title">Product</h4>
            <ul>
              <li><a href="/courses">Learn</a></li>
              <li><a href="/practice">Teach</a></li>
              <li><a href="/community">Cities</a></li>
              <li><a href="/community">Categories</a></li>
              <li><a href="/blog">Make Friends</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-section__title">Company</h4>
            <ul>
              <li><a href="/about">Our mission</a></li>
              <li><a href="/about">marcopolo Pro</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-section__title">Follow</h4>
            <div className='footer-section__social'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} marcopolo Technologies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;