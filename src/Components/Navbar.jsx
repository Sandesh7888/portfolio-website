import React, { useState } from 'react';
import { navLinks } from '../constants';
import { close, logo, menu } from '../assets';
import './Navbar.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Toggle from './Toggle';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  useGSAP(() => {
    const navItems = gsap.utils.toArray(".nav-item");
    gsap.from(navItems, {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".navbar",
        start: "top 80%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        markers: false,
      }
    });
  });

  return (
    <nav className="navbar">
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <Toggle />

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
