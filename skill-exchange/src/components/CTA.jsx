import React, { useState, useEffect, useRef } from 'react';

const CTA = ({ heading, text, buttonText, imageSrc, inputPlaceholder, isSecondInstance, noInputs }) => {
  const [location, setLocation] = useState('');
  const [skill, setSkill] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Location: ${location}, Skill: ${skill}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ctaRef.current); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`cta-container ${isVisible ? 'visible' : ''}`}
      ref={ctaRef}
    >
      <div className="cta-content">
        <h2 className="cta-heading">{heading}</h2>
        <p className="cta-text">{text}</p>

        {isSecondInstance ? (
          <div className="qr-code-container">
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#e0e0e0" />
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="#888888"
                font-family="Arial, sans-serif"
                font-size="10"
              >
                QR Code
              </text>
            </svg>
            <h3>Scan to download the app</h3>
          </div>
        ) : noInputs ? (
          <div className='partner-container'>
            <button type="submit" className="cta-submit-btn">
              {buttonText}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="cta-form">
            <input
              type="text"
              placeholder={inputPlaceholder}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter the skill you want to learn"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
            <button type="submit" className="cta-submit-btn">
              {buttonText}
            </button>
          </form>
        )}
      </div>
      <div className="cta-image">
        <img src={imageSrc} alt="Call to action visual" />
      </div>
    </div>
  );
};

export default CTA;
