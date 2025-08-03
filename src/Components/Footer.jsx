import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const icons = [
    { icon: <FaLinkedin />, link: 'https://linkedin.com' },
    { icon: <FaInstagram />, link: 'https://instagram.com' },
    { icon: <FaGithub />, link: 'https://github.com' },
    { icon: <FaTwitter />, link: 'https://twitter.com' },
  ];

  return (
    <section className="sticky_element">
      <div className="social">
        <ul>
          {icons.map((item, index) => (
            <li key={index}>
              <a href={item.link} key={index}  target="_blank" rel="noopener noreferrer">
                {item.icon}
              </a>
             
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
