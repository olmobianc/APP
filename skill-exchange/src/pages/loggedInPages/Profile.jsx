import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../../utils/icons.js';
import Calendar from '../../components/Calendar.jsx';
import ImageCarousel from '../../components/ImageCarousel.jsx';
import ScheduleMeetingForm from '../../components/ScheduleMeetingForm.jsx'; 

const Profile = () => {
  const location = useLocation();
  const address = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [meetingChoice, setMeetingChoice] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission
  const [formData, setFormData] = useState({ date: '', time: ''});


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const {
    name = 'N/A',
    age = 'N/A',
    location: userLocation = 'N/A',
    offerSkills = [],
    receiveSkills = [],
    imageSrc = '',
    languages = ['Italian', 'English'],
    description = 'From Venice, working in IT. Love to surf, tennis, travel and discover new cultures.',
    email = 'N/A',
    phone = 'N/A',
    identityConfirmed = false,
  } = location.state || {};

  const handleFormSubmit = (e) => {
    const meetingData = {
      interestedUser: {
        name,
        email,
        phone,
        skillsToOffer: offerSkills,
        skillsToReceive: receiveSkills,
        identityConfirmed,
      },
      selectedDate: formData.date,
      selectedTime: formData.time,
    };
    console.log('Meeting Data:', meetingData); // Log data to console
    setFormSubmitted(true);
  };

  return (
    <div className="logged-in">
      <header className="header">
        <div className="left">
          <div className="logo">Marcopolo</div>
          <nav className="nav">
            <FontAwesomeIcon icon={icons.house} className="input-icon" />
            <Link
              to="/home"
              className={`nav-link ${address.pathname === '/home' ? 'nav-link--active' : ''}`}
            >
              Home
            </Link>
            <FontAwesomeIcon icon={icons.compass} className="input-icon" />
            <Link
              to="/categories"
              className={`nav-link ${address.pathname === '/categories' ? 'nav-link--active' : ''}`}
            >
              Categories
            </Link>
          </nav>
        </div>
        <div className="right">
          <div className="premium">
            <Link to="/premium" className="premium-link">Go Premium</Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={icons.bars} className="input-icon" />
          </div>
        </div>
      </header>

      <div className="profile-grid">
        {/* Top Left */}
        <div className="profile-grid__top-left">
          <img src={imageSrc} alt={`${name}'s profile`} className="profile__image" />
          <div>
              <h2 className='profile-header'>{name}</h2>
              <p className='age'>{age} years old</p>
              <p>{userLocation}</p>
          </div>
        </div>

        {/* Bottom Left */}
        <div className="profile-grid__bottom-left">
          <h2 className='profile-header'>Confirmed informations</h2>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Identity: {identityConfirmed ? 'Confirmed' : 'Not Confirmed'}</p>
        </div>

        {/* Top Right */}
        <div className="profile-grid__top-right">
          <h2 className='profile-header'>About {name}</h2>
          <p><strong>Languages spoken:</strong> {languages.join(', ') || 'None'}</p>
          <p>{description}</p>
        </div>

        {/* Bottom Right */}
        <div className="profile-grid__bottom-right">
          <h2 className='profile-header'>About {name}'s skills</h2>
          <div className='flex-container'>
              <div>
                <h3>Skills to Offer</h3>
                <ul>
                  {offerSkills.length ? offerSkills.map((skill, index) => <li key={index}>{skill}</li>) : <p>No skills to offer</p>}
                </ul>
              </div>
              <div>
              <FontAwesomeIcon icon={icons.exchange} className="input-icon" />
              </div>
              <div>
                <h3>In return For</h3>
                <ul>
                  {receiveSkills.length ? receiveSkills.map((skill, index) => <li key={index}>{skill}</li>) : <p>No skills to receive</p>}
                </ul>
              </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="profile-grid__gallery">
          <h2 className='profile-header'>View {name}'s photos capturing his activities</h2>
          <ImageCarousel images={['DSC_0619.JPG', 'DSC_0665.JPG', 'DSC_0772 1.JPG']} />
        </div>

        {/* Calendar Section */}
        <div className="profile-grid__calendar">
          <h2 className='profile-header'>Check {name}'s availability</h2>
          <p>Check {name}'s availability and stay on top of scheduling.
            The highlighted days are the only available slots for scheduling a meeting.
            Plan ahead and choose a suitable time for both of you.</p>
          <Calendar />
        </div>

        {/* Review Section */}
        <div className="profile-grid__reviews">
          <h2 className='profile-header'>What people are saying about {name}</h2>
          <p className='profile-reviews-count'>4 reviews</p>
          <div className="review-cards">
            <div className="review-card-container">
              <div className="review-card">
                <h3 className="review-author">Alice Johnson</h3>
                <p className="review-date">2023-09-15</p>
                <blockquote className="review-text">Great experience! Highly recommend.</blockquote>
              </div>
              <div className="review-card">
                <h3 className="review-author">Bob Smith</h3>
                <p className="review-date">2023-09-10</p>
                <blockquote className="review-text">Very helpful and knowledgeable.</blockquote>
              </div>
            </div>
            <div className="review-card-container">
              <div className="review-card">
                <h3 className="review-author">Charlie Brown</h3>
                <p className="review-date">2023-09-05</p>
                <blockquote className="review-text">Had a wonderful time, will come back again!</blockquote>
              </div>
              <div className="review-card">
                <h3 className="review-author">Diana Prince</h3>
                <p className="review-date">2023-08-30</p>
                <blockquote className="review-text">Fantastic service and support.</blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        {!formSubmitted && (
          <form className="schedule-meeting-form" onSubmit={handleFormSubmit}>
            <div className="form-question">
              <p>Would you like to book a skill exchange with <strong>{name}</strong>?</p>
            </div>

            <div className="form-options">
              <label>
                <input 
                  type="radio" 
                  name="meeting-choice" 
                  value="yes" 
                  onChange={() => setMeetingChoice('yes')} 
                /> 
                Yes, schedule my meeting
              </label>
              <label>
                <input 
                  type="radio" 
                  name="meeting-choice" 
                  value="no" 
                  onChange={() => setMeetingChoice('no')} 
                /> 
                No, I would like to learn more first
              </label>
            </div>

            <div className="form-disclaimer">
              <p>
                By clicking the button below, you agree to our 
                <a href="/terms-of-service" target="_blank" rel="noopener noreferrer"> Terms of Service</a> 
                and acknowledge our 
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer"> Global Privacy Policy</a>.
              </p>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn-primary">Schedule my meeting</button>
            </div>
          </form>
        )}

        {meetingChoice === 'yes' && formSubmitted && (
            <ScheduleMeetingForm
              name={name}
              formData={formData}
              setFormData={setFormData}
              onFormSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit(e); // Use existing logic to handle the form submission
              }}
            />
          )}
      </div>
    </div>
  );
};

export default Profile;
