import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Company_logo from '../assets/images/Company_logo.png';
import './Navbar.css'; // Make sure to import the CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      {menuOpen && (
        <div className="blurred-image">
          {/* <img src="path-to-your-image.jpg" alt="Blurred" /> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
