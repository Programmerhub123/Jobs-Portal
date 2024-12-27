import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; 
import "./Navbar.css";

const Navbar = ({ onSignInClick, onSignUpClick, darkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="jobian.jpg" alt="Site Logo" className="logo" />
        <span className="site-name">Job Portal</span>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="hero-container" smooth={true} duration={500} onClick={toggleMobileMenu}>Home</Link>
        <Link to="hero-container" smooth={true} duration={500} onClick={toggleMobileMenu}>Find Job</Link>
        <Link to="company" smooth={true} duration={500} onClick={toggleMobileMenu}>Company</Link>
        <Link to="candidate" smooth={true} duration={500} onClick={toggleMobileMenu}>Candidate</Link>
        <Link to="carrier-advice" smooth={true} duration={500} onClick={toggleMobileMenu}>Career Advice</Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMobileMenu}>Contact Us</Link>
      </div>

      <div className="navbar-buttons">
        <button className="signin-btn" onClick={onSignInClick}>Sign In</button>
        <button className="signup-btn" onClick={onSignUpClick}>Sign Up</button>
        <div className="theme-toggle-icon" onClick={toggleTheme}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
