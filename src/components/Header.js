import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header container">
      <nav className="nav-container">
        {/* Left side: Logo and Site Name */}
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <img src="/logo192.png" alt="Logo" className="logo" />
          </Link>
        </div>

        {/* Right side: Navigation Links */}
        <div className="nav-links">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <button className="about-button">Log in</button>
      </nav>
    </header>
  );
}

export default Header;
