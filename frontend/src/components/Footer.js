import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#faq">FAQ</a>
        <a href="#help">Help Center</a>
        <a href="#account">Account</a>
        <a href="#terms">Terms of Use</a>
        <a href="#privacy">Privacy</a>
        <a href="#cookies">Cookie Preferences</a>
        <a href="#corporate">Corporate Information</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="social-media">
        {/* Social media icons */}
      </div>
      <div className="copyright">© 2023 MyService</div>
    </footer>
  );
}

export default Footer;