import React from "react";
import "./Footer2.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"; // Import icons

const Footer2 = () => {
  return (
    <footer className="footer2">
      <div className="footer2-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#membership">Membership</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer2-section">
        <h4>Contact Us</h4>
        <p>Email: contact@a2events.com</p>
        <p>Phone: +91 12345 67890</p>
        <p>Location: 123 Event Street, City, Country</p>
      </div>

      <div className="footer2-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="footer2-section">
        <h4>Subscribe</h4>
        <p>Get updates on upcoming events:</p>
        <input
          type="email"
          placeholder="Your Email"
          className="subscribe-input"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>

      <div className="footer2-bottom">
        <p>© 2024 A2 Events. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer2;
