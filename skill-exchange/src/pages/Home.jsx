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
            It's also built on the idea that learning should be accessible and social. Our goal is to get 
            you out there sharing skills and making connections, not keeping you glued to a screen."
            buttonText="Find people"
            imageSrc="/test.jpeg"
            inputPlaceholder="Enter your location"
            onClick={() => console.log('CTA Button Clicked')}
        />

        <HowItWorks />

        <CTA
            heading="Learn it, Share it, Make Friends!"
            text="Our partner venues are ready to host you for a safe and worry-free meeting. 
            You both pay upfront to show commitment."
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