import React from 'react';
import '../../stylesheets/QuoteSection.css';
import QuoteSectionImage from '../../assets/images/Pitch_AlphingtonDeck_External.jpg'

const QuoteSection = () => {
  return (
    <div className="quote-section">
      <div className="quote-image">
        <img src={QuoteSectionImage} alt="Powerful Projects completed project" />
      </div>
      <div className="quote-content">
        <h2>WHY US?</h2>
        <h1>We get it done.</h1>
        <p>Every project comes with its own needs and challenges. Tell us your priorities, and we'll fill them to your satisfaction.</p>
        <button onClick={() => (window.location.href = "/contact-us")}>Get A Free Quote</button>
      </div>
    </div>
  );
};

export default QuoteSection;
