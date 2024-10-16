import React from 'react';
import CTA from '../components/CTA';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <>
     <div className='cta-wrapper'>
        <CTA
            heading="The people platform—Where interests become friendships."
            text="Whatever is your passion, whether it's cooking, tennis, or connecting with others, there's a 
            community of like-minded people waiting for you. Events are happening every day, right in your neighborhood. 
            Sign up and become part of something truly amazing—right where you live!"
            buttonText="Get Started"
            imageSrc="/test.jpeg"
            inputPlaceholder="Enter your location"
            onClick={() => console.log('CTA Button Clicked')}
        />

        <HowItWorks />

        <CTA
            heading="Learn it, Share it, Make Friends!"
            text="No matter what excites you—be it art, tech, or surfing, there's a 
            local group of people who share your enthusiasm. 
            Opportunities to connect are just around the corner. Sign up today and 
            see how easy it is to meet people who share your passions!"
            buttonText="Explore"
            imageSrc="/test3.jpeg"
            inputPlaceholder="Enter your location"
            onClick={() => console.log('CTA Button Clicked')}
        />
    </div>

    </>
  );
};

export default Home;