import React from 'react';
import '../../../stylesheets/Hero.css'
import heroLogo from '../../../assets/logos/white_no background.png'

const Hero = () => {
  return (
    <div className="hero">
        <img src={heroLogo} alt="Company Logo" className="hero-logo" />
        <h1>Melbourne's Electrical Experts</h1>
        <p>
        Our electricians provide exceptional service and assistance at competitive rates. Every project we undertake is backed by our guarantee and meets the most stringent industry regulations.
        </p>
        <button onClick={() => (window.location.href = "/our-services")}>
        View Our Services
        </button>
    </div>
  );
};

export default Hero;
