import React from 'react';
import { projects } from '../constants';
import './Project.css';


const Project = () => {
  return (
    <div className="project" id='projects-call'>
      <div className="section-heading-box">
        <h1 className="section-heading">Projects</h1>
      </div>

      <div className="project-content-box">
        {projects.map((project, index) => (
          <div key={index} className="project-content resume-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div className="project-links">
              {project.liveLink && (<a href={project.liveLink} target="_blank" rel="noopener noreferrer"  className="btn" >Go Live</a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ marginLeft: "10px" }}> GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
