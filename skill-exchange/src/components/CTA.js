import React, { useState, useEffect, useRef } from 'react';

const CTA = ({ heading, text, buttonText, imageSrc, inputPlaceholder }) => {
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
      </div>
      <div className="cta-image">
        <img src={imageSrc} alt="Call to action visual" />
      </div>
    </div>
  );
};

export default CTA;