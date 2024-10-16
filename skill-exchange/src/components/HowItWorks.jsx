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
      description: "Realize that everyone has something valuable to share. Whether it's a hobby, a skill, or a passion, you have knowledge worth passing on."
    },
    {
      number: 'II',
      title: 'Connect Locally',
      description: "Find like-minded individuals in your community who are eager to learn what you know and share what they know. It's all about local, face-to-face connections."
    },
    {
      number: 'III',
      title: 'Share and Learn for Free',
      description: "Engage in free, social learning experiences. Teach what you know and learn something new in return, all without any cost."
    },
    {
      number: 'IV',
      title: 'Grow Together',
      description: "As you exchange skills and knowledge, you'll not only improve your abilities but also form meaningful friendships. Watch your community and yourself flourish."
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
