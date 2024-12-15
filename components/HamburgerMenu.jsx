import React, { useState } from "react";
import "./HamburgerMenu.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate,useLocation } from "react-router-dom";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/events") return null;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    toggleMenu(); // Close the menu
    navigate(path); // Navigate to the specified path
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <img src="./logo1.png" alt="A2 Events Logo" className="logo-image" />
          <h1 className="header-title">A2 Events</h1>
        </div>
        <button className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {menuOpen && (
        <div className="menu-dropdown">
          <ul className="menu-list">
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li onClick={() => handleNavigation("/membership")}>Membership</li>
            <li onClick={() => handleNavigation("/events")}>Events</li>
            <li onClick={() => handleNavigation("/about")}>About Us</li>
            <li onClick={() => handleNavigation("/contact")}>Contact Us</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
