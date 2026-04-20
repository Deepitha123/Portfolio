import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar glass">
      <div className="container nav-content">
        <div className="navbar-logo">
          <NavLink to="/">Deepitha<span>.</span></NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/awards">Awards</NavLink></li>
          <li><NavLink to="/leadership">Leadership</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
