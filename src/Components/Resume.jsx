import React from 'react';
import { CV } from "../assets";
import { education, experiences, certifications } from "../constants";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume" id='resume-call'>
      <div className="section-heading-box">
        <h1 className="section-heading">Resume</h1>
      </div>

      {/* Education Section */}
      <div className="education-content">
        <h2 className="sub-heading">Education</h2>
        <div className="education-box">
          {education.map((edu, index) => (
            <div key={index} className="resume-card">
              <h3>{edu.degree} <small>({edu.year})</small></h3>
              <h4>{edu.institution}</h4>
              <p><strong>Branch:</strong> {edu.branch}</p>
              <p>{edu.description}</p>
              <p><strong>Result:</strong> {edu.result}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="work-experience-content">
        <h2 className="sub-heading">Work Experience</h2>
        <div className="work-experience-box">
          {experiences.map((exp, index) => (
            <div key={index} className="resume-card">
              <h3>{exp.title} <small>({exp.year})</small></h3>
              <h4>{exp.organization}</h4>
              <p>{exp.description}</p>
              <p><strong>Skills:</strong> {exp.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications-content">
        <h2 className="sub-heading">Certifications</h2>
        <div className="certifications-box">
          {certifications.map((cert, index) => (
            <div key={index} className="resume-card">
              <h3>{cert.title} <small>({cert.year})</small></h3>
              <h4>{cert.platform}</h4>
              <p>{cert.description}</p>
              <p><strong>Skills:</strong> {cert.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download Button */}
      <div className="download-resume">
        <a href={CV} download className="resume-download-btn">
          📄 Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
