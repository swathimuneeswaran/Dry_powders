import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Company_logo from '../assets/images/Company_logo.png';
import './Navbar.css'; // Make sure to import the CSS file
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <img src={Company_logo} alt="Company Logo" />
      <nav>
        <ul className={menuOpen ? 'open' : ''}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <div className="social-media">
        <a href="https://www.instagram.com/shreehariglobalfoods/"><InstagramIcon /></a>
        <a href="https://www.instagram.com/shreehariglobalfoods/"><TwitterIcon /></a>
        <a href="https://www.instagram.com/shreehariglobalfoods/"><FacebookIcon /></a>
      </div>
      {menuOpen && (
        <div className="blurred-image">
          {/* <img src="path-to-your-image.jpg" alt="Blurred" /> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
