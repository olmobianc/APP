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
      title: 'Discover Your Inner Teacher',
      description: "Recognize that everyone has something valuable to share - be it a hobby, skill, or passion."
    },
    {
      number: 'II',
      title: 'Connect Locally',
      description: "Connect with local, like-minded individuals eager to learn from each other through face-to-face interactions."
    },
    {
      number: 'III',
      title: 'Ready, share, learn!',
      description: "If it's a match, you skip the chat. For 9 dollars we'll organize your first meeting and take care of everything."
    },
    {
      number: 'IV',
      title: 'Grow Together',
      description: "As you exchange skills and knowledge, you'll grow your abilities and build meaningful friendships, helping both yourself and your community thrive."
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
