import React from 'react';
import CTA from '../components/CTA';
import HowItWorks from '../components/HowItWorks';
import ShareOptions from '../components/ShareOptions';
import TopCategories from '../components/TopCategories';

const Home = () => {
  return (
    <>
     <div className='cta-wrapper'>
        <CTA
            heading="Share What You Know, Learn What You Love."
            text="Marcopolo is built on the belief that anyone can be a teacher, without even realizing it. 
            It's also built on the idea that learning should be free and social. Our goal is to get 
            you out there sharing skills and making connections, not keeping you glued to a screen. 
            With Marcopolo, you can learn anything for free while getting to know amazing people in 
            your community. Discover the teacher in you and the friends you haven't met yet."
            buttonText="Get Started"
            imageSrc="/test.jpeg"
            inputPlaceholder="Enter your location"
            onClick={() => console.log('CTA Button Clicked')}
        />

        <HowItWorks />

        <CTA
            heading="Learn it, Share it, Make Friends!"
            text="Share what you already know and learn something new in return. It's a fun, free way to grow 
            your abilities and connect with like-minded people. Join our community today and turn your 
            passion into an exciting exchange of skills, all while making new friends just around the corner!"
            buttonText="Explore"
            imageSrc="/test3.jpeg"
            inputPlaceholder="Enter your location"
            onClick={() => console.log('CTA Button Clicked')}
        />

    </div>

    <ShareOptions url={window.location.href} />

    <TopCategories />

    </>
  );
};

export default Home;