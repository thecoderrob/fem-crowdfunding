import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="container--nav | container flex">
      <div>
        <img src="/src/assets/logo.svg" alt="" />
      </div>

      <button
        className="mobile-nav-toggle"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Menu</span>
      </button>

      <nav className="primary-nav">
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#discover">Discover</a>
          </li>
          <li>
            <a href="#get-started">Get Started</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
