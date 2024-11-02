import React from 'react';
import HowItWorks from '../components/HowItWorks';

const OurMission = () => {
  const steps = [
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
      description: 'Cultivate personal and collective development through enriching interactions, transforming experiences into opportunities for yourself and others.'
    }
  ];

  return (
    <div className="our-mission-page">
      <div className='our-mission-page--main-container'>
      <h1>Why We Do What We Do</h1>
        <p>
            In today’s digital landscape, many popular apps offer little more than a rehash of the same formula: 
            swipe through countless profiles, connect over shared interests, and engage in endless chats. 
            As loneliness and mental health challenges grow, this approach often feels hollow.
        </p>
        <p>
            Many of us don’t even know our neighbors, yet we turn to distant connections in search of friendship. 
            These platforms are designed to maximize screen time, leaving you feeling frustrated and exhausted 
            if you’re seeking genuine connections or hoping to learn something new.
        </p>
        <p>
            That’s why we created Marcopolo. We believe in a fresh, meaningful approach to skill-sharing that 
            prioritizes authentic, real-world connections. By encouraging you to engage with those in your community, 
            we’re dedicated to revolutionizing the way you exchange skills and build friendships—one connection 
            at a time.
        </p>

        <h3>We believe these three core values are what it takes to build those great human relationships.</h3>
      </div>

      <HowItWorks type="mission" />

    </div>
  );
};

export default OurMission; 