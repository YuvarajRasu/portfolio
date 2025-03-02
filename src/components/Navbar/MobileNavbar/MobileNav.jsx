import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="mobile-menu-container">
        <p className="logo">Yuvaraj</p>

        <ul>
          <li>
            <a href="#home" className="mobile-menu-item">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="mobile-menu-item">
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="mobile-menu-item">
              Work Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-menu-item">
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
