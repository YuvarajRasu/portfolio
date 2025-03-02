import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNavbar/MobileNav";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <p style={{ fontSize: "2rem" }}>Yuvaraj</p>

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
          <button className="menu-btn" onClick={toggleMenu}>
            {openMenu ? (
              <IoMdClose color="#ffffff" />
            ) : (
              <FaBars color="#ffffff" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
