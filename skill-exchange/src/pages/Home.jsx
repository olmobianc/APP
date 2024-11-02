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
            heading="The skill-sharing app designed for real connections."
            text="Marcopolo is built on the belief that anyone can be a teacher, without even realizing it. 
            It's also built on the idea that learning should be accessible and social. Our goal is to get 
            you out there sharing skills and making connections, not keeping you glued to a screen."
            buttonText="Find people"
            imageSrc="/test.jpeg"
            inputPlaceholder="Enter your location"
            onClick={() => console.log('CTA Button Clicked')}
        />

        <HowItWorks type="home" />

        <CTA
            heading="Learn it, Share it, Make Friends!"
            text="Meet new friends and grow your skills in a welcoming space. 
            We partner with trusted local venues to give you a safe, enjoyable first meeting. 
            Both participants contribute a small upfront fee to show commitment."
            buttonText="Explore"
            imageSrc="/test3.jpeg"
            inputPlaceholder="Enter your location"
            onClick={() => console.log('CTA Button Clicked')}
            isSecondInstance={true}
        />

    </div>

    <ShareOptions url={window.location.href} />

    <TopCategories />

    </>
  );
};

export default Home;