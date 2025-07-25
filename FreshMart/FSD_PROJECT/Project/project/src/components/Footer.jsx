import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li>📞 Phone: <a href="tel:+919030280208">+91 9030280208</a></li>
            <li>📧 Email: <a href="mailto:freshmart.queries@gmail.com">freshmart.queries@gmail.com</a></li>
            <li>💻 GitHub: <a href="https://github.com/AsifAlthaf" target="_blank" rel="noopener noreferrer">@AsifAlthaf</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Return Policy</h3>
          <p><Link to="/return-policy">Click here to view our detailed return policy</Link></p>
        </div>

        <div className="footer-section">
          <h3>Refund Policy</h3>
          <p><Link to="/refund-policy">Click here to view our refund policy</Link></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-quote">Fresh Produce, delivered with love. Thanks for Choosing us!</div>
        <div className="copyright">© {new Date().getFullYear()} Fresh Mart. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;