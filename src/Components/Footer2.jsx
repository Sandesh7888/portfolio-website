import React from 'react';
import './Footer2.css';
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  
  FaGithub
} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Footer2 = () => {
  const icons = [
    { icon: <FaYoutube />, className: "icons2" },
    { icon: <FaLinkedin />, className: "icons3" },
    { icon: <FaInstagram />, className: "icons1" },
    { icon: <FaTwitter />, className: "icons4" },
    { icon: <FaGithub />, className: "icons5" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left: Copyright */}
        <div className="footer-left">
          <p>© {new Date().getFullYear()} Create By <span style={{ color: '#61dafb' }}>Sandesh Karad</span>.</p>
        </div>

        {/* Center: Social Icons */}
        <div className="footer-icons">
          <ul className="icons">
            {icons.map((item, index) => (
              <li key={index} className={item.className}>
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
