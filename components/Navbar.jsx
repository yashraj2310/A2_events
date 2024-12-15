import React from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  FaHome,
  FaIdBadge,
  FaCalendarAlt,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
    if (location.pathname === "/events") return null;
    if (location.pathname === "/venue") return null;
    if (location.pathname === "/hero-section") return null;
    if (location.pathname === "/artist") return null;


  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="sidebar-navbar">
      <div className="sidebar-logo" onClick={() => handleNavigation("/")}>
        <img src="./logo1.png" alt="A2 Events Logo" className="logo-image" />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-item" onClick={() => handleNavigation("/")}>
          <FaHome className="sidebar-icon" />
          <span className="sidebar-label">Home</span>
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation("/membership")}>
          <FaIdBadge className="sidebar-icon" />
          <span className="sidebar-label">Membership</span>
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation("/events")}>
          <FaCalendarAlt className="sidebar-icon" />
          <span className="sidebar-label">Events</span>
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation("/about")}>
          <FaInfoCircle className="sidebar-icon" />
          <span className="sidebar-label">About Us</span>
        </li>
        <li className="sidebar-item" onClick={() => handleNavigation("/contact")}>
          <FaEnvelope className="sidebar-icon" />
          <span className="sidebar-label">Contact Us</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
