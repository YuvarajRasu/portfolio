import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        {/* <img src="logo" alt="logo" className="logo" /> */}
        <p className="logo">Yuvaraj</p>

        <ul>
          <li>
            <a href="#home" className="menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-item">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="menu-item">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-item">
              Contact me
            </a>
          </li>

          <button
            className="contact-btn"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/u/0/#sent?compose=jrjtXDzSVMGKSrnQpRXFwswGctBHBJcQdWtfGpcfwNQWKbVNpjjKHLSGTpPDlRzHMrlJncJB",
                "_blank"
              );
            }}
          >
            Hire me
          </button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
