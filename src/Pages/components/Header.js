import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../stylesheets/Header.css';
import logo from '../../assets/logos/icon_black and white.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (e) => {
    e.preventDefault(); // Prevent default action to avoid navigation when clicking the chevron
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="header">
      <a href='/'><img src={logo} alt="Company Logo" /></a>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <nav>
          <ul className='nav-dropdown'>
            <li><a href="/">Home</a></li>
            <li className="dropdown">
              <a href="/our-services" className="dropbtn">
                Our Services
                <FontAwesomeIcon 
                  icon={isDropdownOpen ? faAngleUp : faAngleDown} 
                  onClick={handleDropdownToggle}
                  className="chevron-icon"
                />
              </a>
              <div className={`dropdown-content ${isDropdownOpen ? 'active' : ''}`}>
                <Link smooth to="/our-services#electrical-maintenance">Electrical Maintenance</Link>
                <Link smooth to="/our-services#building-projects">Building Projects</Link>
                <Link smooth to="/our-services#data-and-phone">Data and Phone</Link>
                <Link smooth to="/our-services#heating-and-cooling">Heating and Cooling</Link>
                <Link smooth to="/our-services#security">Security</Link>
              </div>
            </li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </div>
      <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} className="bars" />
        <FontAwesomeIcon icon={faTimes} className="times" />
      </div>
    </div>
  );
}

export default Header;
