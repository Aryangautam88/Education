import "./Footer.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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
            <div className="footer-col">
              <h4>Categories</h4>
              <ul>
                <li>UX/UI Design</li>
                <li>Digital Marketing</li>
                <li>Data Science</li>
                <li>Data Analysis</li>
                <li>Front-End Development</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>FAQs</li>
                <li>Support</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li>My Courses</li>
                <li>My Account</li>
                <li>Help Center</li>
              </ul>
            </div>

            <div className="footer-col contact">
              <h4>Contact Us</h4>
              <p><FaEnvelope /> info@knowledgepulse.com</p>
              <p><FaPhoneAlt /> +1 (800) 123-4567</p>
              <div className="social-icons">
                <FaTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
          </div>

          {/* SUBSCRIBE (RIGHT SIDE, SMALL) */}
          <div className="subscribe-box">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest courses and offers directly in your inbox.</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2025 KnowledgePulse. All rights reserved.</p>
          <div className="footer-links">
            <span>Terms of Service</span> | 
            <span> Privacy Policy</span>  
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
