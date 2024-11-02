import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = ({ type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const howItWorksRef = useRef(null);
  const scrollWrapperRef = useRef(null);

  // Steps data defined inside the component
  const steps = {
    home: [
      {
        number: 'I',
        title: 'Discover Your Inner Teacher',
        description: "Everyone has a skill, hobby, or passion to share - whether you're a pro or just enthusiastic. Find value in what you know and help others grow."
      },
      {
        number: 'II',
        title: 'Connect Locally with Ease',
        description: "Discover local, like-minded people who want to learn and share. Our matching connects you with someone nearby so you can both exchange skills and knowledge face-to-face."
      },
      {
        number: 'III',
        title: 'Commit and Match Up',
        description: "Show your commitment with a small fee, ensuring you're both equally invested in the experience. Once matched, both parties contribute a $9 fee to solidify their intent."
      },
      {
        number: 'IV',
        title: 'First Meeting, On Us!',
        description: "Skip the back-and-forth! We'll book the first meeting at a local affiliate venue, such as a cafe or sports club, giving you both a safe, welcoming space to meet and learn at no extra cost."
      },
      {
        number: 'V',
        title: 'Build Skills and Connections',
        description: "Learn, teach, and grow. Strengthen your skills and create meaningful connections as you contribute to a growing community of learners and teachers."
      },
      {
        number: 'VI',
        title: 'Explore and Continue',
        description: "After your first session, continue swapping skills or explore other matches. Whether one-time exchanges or ongoing learning, the choice is yours!"
      }
    ],
    mission: [
      {
        title: 'Authenticity',
        description: 'Forge genuine connections with individuals who resonate with your interests and aspirations, creating a supportive community built on shared values.'
      },
      {
        title: 'Courage',
        description: "Embrace the spirit of collaboration as you join forces to share skills and insights, empowering each other to step beyond comfort zones and achieve mutual success."
      },
      {
        title: 'Growth',
        description: 'Cultivate personal and collective development through enriching interactions, transforming experiences into opportunities for learning and advancement.'
      }
    ]
  };

  const selectedSteps = steps[type] || [];

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

  return (
    <section className={`how-it-works ${isVisible ? 'visible' : ''}`} ref={howItWorksRef}>
      <h2 className="how-it-works__heading">{type === 'home' ? 'How It Works' : 'Our Core Values'}</h2>
      
      <div className={`scroll-wrapper ${isScrolledToEnd ? 'scrolled-to-end' : ''}`}>
        <div 
          className="steps-container" 
          ref={scrollWrapperRef}
          onScroll={handleScroll}
        >
          {selectedSteps.map((step, index) => (
            <div
              className={`step ${isVisible ? 'animate' : ''}`}
              key={index}
            >
              <div className="step-number">{step.number || ''}</div>
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