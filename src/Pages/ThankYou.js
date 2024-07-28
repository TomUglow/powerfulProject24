import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/ThankYou.css';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="overlay"></div>
      <div className="thank-you-message">
        <h1>Thank You!</h1>
        <p>Your message has been successfully sent. We will get back to you shortly.</p>
        <p>For anything urgent, please contact Ben directly on: <br/>
        0408 425 907
        </p>
        <p></p>
        <Link to="/">
          <button className='thank-you-button'>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
