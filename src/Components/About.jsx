import React from 'react';
import './About.css';
import { aboutMe } from '../constants';
import { CV,photo } from "../assets";

const About = () => {
  return (
    <div className="aboutMe" id='about-call'>
     
      <div className="section-heading-box">
        <h1 className="section-heading">About Me</h1>
      </div>

     
      <div className="about-content">
        <div className="profile-photo">
          <img src={photo} alt={aboutMe.name} />
        </div>

        <div className="about-container">
          
          <p className="about-text">{aboutMe.description}</p>

          <table className="about-table">
            <tbody>
              <tr>
                <td><strong>Name:</strong></td>
                <td>{aboutMe.name}</td>
              </tr>
              <tr>
                <td><strong>DOB:</strong></td>
                <td>{aboutMe.dateOfBirth}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{aboutMe.address}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{aboutMe.email}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{aboutMe.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <a href={CV} download className="resume-download-btn"><span>📄 Download Resume</span></a>

      </div>
    </div>
  );
};

export default About;
