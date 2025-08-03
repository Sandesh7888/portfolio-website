import React, { useState } from 'react';
import { navLinks } from '../constants';
import { close, logo, menu } from '../assets';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul className="nav-links">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`nav-item ${active === nav.title ? 'active' : ''}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
        ))}
      </ul>

      <div className="mobile-menu">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="menu-icon"
          onClick={() => setToggle(!toggle)}
        />

        {toggle && (
          <div className="sidebar">
            <ul className="sidebar-links">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`sidebar-item ${active === nav.title ? 'active' : ''}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
