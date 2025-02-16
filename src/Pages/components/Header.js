import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../stylesheets/Header.css';
import logo from '../../assets/logos/icon_blackandwhite.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen, isMenuOpen]);

  return (
    <div className="header">
      <Link to="/"><img src={logo} alt="Company Logo" /></Link>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <nav>
          <ul className='nav-dropdown'>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/our-services" className="dropbtn" onClick={handleDropdownToggle}>
                Our Services
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faAngleUp : faAngleDown}
                  className="chevron-icon"
                />
              </Link>
              <div className={`dropdown-content ${isDropdownOpen ? 'active' : ''}`}>
                <Link smooth to="/our-services#electrical-maintenance" onClick={handleDropdownLinkClick}>Electrical Maintenance</Link>
                <Link smooth to="/our-services#building-projects" onClick={handleDropdownLinkClick}>Building Projects</Link>
                <Link smooth to="/our-services#data-and-phone" onClick={handleDropdownLinkClick}>Data and Phone</Link>
                <Link smooth to="/our-services#heating-and-cooling" onClick={handleDropdownLinkClick}>Heating and Cooling</Link>
                <Link smooth to="/our-services#security" onClick={handleDropdownLinkClick}>Security</Link>
              </div>
            </li>
            <li><Link to="/projects" onClick={handleDropdownLinkClick}>Projects</Link></li> {/* Added onClick here */}
            <li><Link to="/contact-us" onClick={handleDropdownLinkClick}>Contact Us</Link></li> {/* Added onClick here */}
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