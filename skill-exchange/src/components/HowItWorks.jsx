import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const howItWorksRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
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

  const handleScroll = () => {
    if (scrollWrapperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollWrapperRef.current;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setIsScrolledToEnd(scrollPercentage > 95); // Consider it "scrolled to end" when 95% scrolled
    }
  };

  const steps = [
    {
      number: 'I',
      title: 'Discover Local Talents',
      description: 'Explore a diverse range of skills in your community. From cooking to coding, find passionate individuals ready to share their expertise.'
    },
    {
      number: 'II',
      title: 'Connect In Person',
      description: 'Move beyond screens and meet face-to-face. Our platform facilitates real-world connections, allowing for more engaging and effective skill exchanges.'
    },
    {
      number: 'III',
      title: 'Learn Through Experience',
      description: 'Immerse yourself in hands-on learning experiences. Whether you\'re teaching or learning, practical application is at the heart of every exchange.'
    },
    {
      number: 'IV',
      title: 'Build Community',
      description: 'Foster meaningful relationships within your local community. As you exchange skills, you\'ll also be creating a network of like-minded individuals passionate about continuous learning and growth.'
    }
  ];

  return (
    <section className={`how-it-works ${isVisible ? 'visible' : ''}`} ref={howItWorksRef}>
      <h2 className="how-it-works__heading">How It Works</h2>
      
      <div className={`scroll-wrapper ${isScrolledToEnd ? 'scrolled-to-end' : ''}`}>
        <div 
          className="steps-container" 
          ref={scrollWrapperRef}
          onScroll={handleScroll}
        >
          {steps.map((step, index) => (
            <div
              className={`step ${isVisible ? 'animate' : ''}`}
              key={index}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
