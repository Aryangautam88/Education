import "./Footer.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="site-footer">
    <div className="footer-wrapper">
  
      {/* TOP BRAND */}
      <div className="footer-brand">
        <h2>
          <span className="dot"></span>
          <span className="dot light"></span>
          KnowledgePulse
        </h2>
        <p>
          Empowering minds with quality online courses to advance careers and lifelong learning.
        </p>
      </div>
  
      {/* MAIN ROW */}
      <div className="footer-main">
        <div className="footer-columns">
  
          {/* Categories */}
          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/learning-hub">Learning Hub</Link></li>
              <li><Link to="/webinars">Webinars</Link></li>
            </ul>
          </div>
  
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/how-it-works">How Learning Works</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
  
          {/* Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/trading-guide">Trading Guide</Link></li>
              <li><Link to="/materials">Learning Materials</Link></li>
              <li><Link to="/insights">Insights Blog</Link></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div className="footer-col contact">
            <h4>Contact Us</h4>
            <p>
              <a href="mailto:info@knowledge.com">
                <FaEnvelope /> info@knowledge.com
              </a>
            </p>
            <p>
              <a href="tel:+18001234567">
                <FaPhoneAlt /> +1 (800) 123-4567
              </a>
            </p>
  
            <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
  
        </div>
  
        {/* SUBSCRIBE */}
        <div className="subscribe-box1">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest courses and offers directly in your inbox.</p>
          <div className="newsletter1">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
  
      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 KnowledgePulse. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/terms">Terms of Service</Link> | 
          <Link to="/privacy"> Privacy Policy</Link>
        </div>
      </div>
  
    </div>
  </footer>
  
  );
};

export default Footer;
