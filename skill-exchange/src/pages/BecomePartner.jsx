import React, { useState, useEffect } from 'react';
import CTA from '../components/CTA';

const BecomePartner = () => {
  const words = ['cafe', 'art studio', 'tennis centre'];
  const images = {
    cafe: '/cafe.jpg',
    art_studio: '/art.avif',       
    tennis_centre: '/tennis.jpeg',
  };

  const typingSpeed = 150; // Speed for typing each character
  const deleteSpeed = 50;   // Speed for deleting each character (faster)
  const pauseTime = 5000;   // 5-second pause when word is fully typed

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(images[words[0]]); // Initial image

  useEffect(() => {
    const fullWord = words[currentWordIndex].replace(/ /g, '_'); // Replace space with underscore for key access

    if (!isDeleting) {
      // Typing the word
      const typeEffectInterval = setInterval(() => {
        setDisplayedText((prev) => {
          const nextText = words[currentWordIndex].slice(0, prev.length + 1); // Use original word for display
          if (nextText === words[currentWordIndex]) {
            clearInterval(typeEffectInterval);
            // Set image immediately after full word is typed
            setCurrentImageSrc(images[fullWord]);
            // Start deleting after pause
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseTime);
          }
          return nextText;
        });
      }, typingSpeed);
      return () => clearInterval(typeEffectInterval);
    } else {
      // Deleting the word
      const deleteEffectInterval = setInterval(() => {
        setDisplayedText((prev) => {
          const nextText = words[currentWordIndex].slice(0, prev.length - 1); // Use original word for display
          if (nextText === '') {
            clearInterval(deleteEffectInterval);
            setIsDeleting(false);
            // Move to next word
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); 
          }
          return nextText;
        });
      }, deleteSpeed);
      return () => clearInterval(deleteEffectInterval);
    }
  }, [currentWordIndex, isDeleting]);

  return (
    <div className="become-partner">
      <CTA
        heading={
          <>
            More customers at your <span className="dynamicText">{displayedText}</span>?
          </>
        }
        text="We organize skill exchanges every day and are looking for partners throughout Australia."
        buttonText="Become a Partner"
        imageSrc={currentImageSrc}
        onClick={() => console.log('CTA Button Clicked')}
        noInputs={true}
      />
      
      <div className="stats">
        <h2>Join Over 250,000 Successful Events Hosted by Our Partners!</h2>
        <p>We specialize in connecting people with memorable venues and experiences. Once matched, guests are eager to visit your location—whether it's a cozy café, lively club, or any other venue.</p>
      </div>

      <div className="how-partner-works">
        <h3>How It Works</h3>
        <ol className="process-list">
          <li>Select your preferred availability for hosting visitors.</li>
          <li>We handle bookings through your system for a seamless experience.</li>
          <li>Your guests enjoy a hassle-free time at your venue!</li>
        </ol>
      </div>

      <div className="benefits">
        <h3>Why Partner with Us?</h3>
        <ul>
          <li><strong>Boost Your Customer Base:</strong> Expand your reach with 10-20 new visitors weekly during events.</li>
          <li><strong>Create Loyal Patrons:</strong> Feedback indicates that 60% of guests return if they enjoy their experience.</li>
          <li><strong>Enhance Your Brand Visibility:</strong> 80% of guests recommend their favorite venues to friends and family.</li>
        </ul>
      </div>

      <form className="info-request-form">
        <h3>Request More Information</h3>
        <div className="form-fields">
          <label>
            Full Name*
            <input type="text" name="fullName" required />
          </label>
          <label>
            Email Address*
            <input type="email" name="email" required />
          </label>
          <label>
            Business Name*
            <input type="text" name="businessName" required />
          </label>
          <label>
            Website (optional)
            <input type="url" name="website" />
          </label>
        </div>
        <button type="submit">Send Request</button>
        <p className="agreement">
          By submitting this request, I agree to the Partner Terms & Conditions and have reviewed the Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default BecomePartner;