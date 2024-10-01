import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo">ExchangeU</span>
        </div>
        <div className="footer-columns">
          <div className="footer-section">
            <h4 className="footer-section__title">Product</h4>
            <ul>
              <li><a href="/courses">Learn</a></li>
              <li><a href="/practice">Teach</a></li>
              <li><a href="/community">Cities</a></li>
              <li><a href="/blog">Make Friends</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-section__title">Company</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/about">ExchangeU Pro</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-section__title">Follow</h4>
            <div className='footer-section__social'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fa fa-facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fa fa-instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fa fa-twitter" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fa fa-linkedin" />
                </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ExchangeU Technologies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;