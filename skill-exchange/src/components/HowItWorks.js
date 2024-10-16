import React, { useEffect, useState, useRef } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const howItWorksRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(howItWorksRef.current);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (howItWorksRef.current) {
      observer.observe(howItWorksRef.current);
    }

    return () => {
      if (howItWorksRef.current) {
        observer.unobserve(howItWorksRef.current);
      }
    };
  }, []);

  return (
    <section className={`how-it-works ${isVisible ? 'visible' : ''}`} ref={howItWorksRef}>
      <h2 className="how-it-works__heading">How It Works</h2>
      
      <div className="scroll-wrapper">
        <div className="steps-container">
          {['I', 'II', 'III', 'IV', 'V'].map((num, index) => (
            <div
              className={`step ${isVisible ? 'animate' : ''}`}
              key={index}
              style={{ animationDelay: `${index * 0.2 + 0.1}s` }} // Adjusted delay for smoother animation
            >
              <div className="step-number">{num}</div>
              <h3 className="step-title">Step {num}</h3>
              <p className="step-description">This is the description for step {num}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;