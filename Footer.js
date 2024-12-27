import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram , FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = ()=> {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    )
  }
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About Us</h4>
            <p>
              We are a leading job portal connecting candidates 
              with employers. 
              Find your dream job here.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="hero-container">Find Job</a></li>
              <li><a href="company">Company</a></li>
              <li><a href="candidate">Candidate</a></li>
              <li><a href="carrier-advice">Career Advice</a></li>
              <li><a href="contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company Information</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul>
              <li>Email: hamidjabbar555@gmail.com </li>
              <li>Phone: +92 324 672 7077</li>
              <li>Location: 123 Job St, Employment City</li>
            </ul>
            <div className="footer-social">
              <a href="https://facebook.com"><FaFacebookF /></a>
              <a href="https://twitter.com"><FaTwitter /></a>
              <a href="https://linkedin.com"><FaLinkedinIn /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
          <div className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowUp/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
