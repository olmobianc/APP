import React from 'react';

const BecomePartner = () => {
  return (
    <div className="become-partner">
      <h1>Become a Partner</h1>
      <p className="intro">Join our network and bring more customers to your business!</p>
      <p>We’re seeking partners across the country to host engaging activities with us.</p>

      <div className="stats">
        <h2>Over 250,000 Events Hosted by Our Partners!</h2>
        <p>We connect people with venues and experiences. Once matched, they’re ready to visit your location, whether it’s a café, club, or any other venue.</p>
      </div>

      <div className="how-partner-works">
        <h3>How It Works</h3>
        <ol>
          <li>Choose when you'd like to receive visitors.</li>
          <li>We book through your system.</li>
          <li>Your guests enjoy a seamless experience at your venue.</li>
        </ol>
      </div>

      <div className="benefits">
        <h3>Benefits of Partnering with Us</h3>
        <ul>
          <li><strong>More Customers:</strong> Expect up to 20 visitors weekly.</li>
          <li><strong>Loyal Patrons:</strong> 68% of guests return if they enjoy their experience.</li>
          <li><strong>Brand Awareness:</strong> 75% recommend the places they visit.</li>
        </ul>
      </div>

      <form className="info-request-form">
        <h3>Request More Information</h3>
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
        <button type="submit">Send Request</button>
        <p className="agreement">
          By sending this request, I agree to the Partner Terms & Conditions and have read the Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default BecomePartner;