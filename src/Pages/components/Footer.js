import React from 'react';
import '../../stylesheets/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
import FacebookLogo from '../../assets/icons/facebook_white.png'
import InstagramLogo from '../../assets/icons/instagram_white.png'
import FooterLogo from '../../assets/logos/final_logo_black.jpg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="black-footer">
      <div className="black-footer-content">
        <div className="service-areas">
          <h2>Service Area</h2>
          <p>Servicing all of Melbourne including Geelong and Torquay</p>
          <a href='/' className='footer-link'><FontAwesomeIcon icon={faHouse} className='home-link'/></a>
        </div>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <h3>Contact us 7 days a week <br /><br />
          0408 425 907
          </h3>
          <div className='contact-links'>
          <a href='/' className='footer-link'><img src={FacebookLogo} alt='Facebook Logo' className='contact-logo' /></a>
          <a href='/' className='footer-link'><img src={InstagramLogo} alt='Instagram Logo' className='contact-logo'/></a>
          <a href='/' className='footer-link'><FontAwesomeIcon icon={faEnvelope} className='contact-logo'/></a>
          <a href='/' className='footer-link'><FontAwesomeIcon icon={faPhone} className='contact-logo'/></a>
          </div>
        </div>
      </div>
    </div>
      <div className="footer-content">
        <a href='/'><img src={FooterLogo} alt="Powerful Projects Logo" /></a>
        <p>&copy; 2024 Powerful Projects | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
