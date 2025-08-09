import React, { useRef } from 'react';
import { projects } from '../constants';
import './Project.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef();

  useGSAP(() => {
    const cards = gsap.utils.toArray(".project-content");

    cards.forEach((card) => {
      gsap.from(card, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // start when card is near bottom of screen
          toggleActions: "play none none reverse",
          markers: false
        }
      });
    });
  }, { scope: containerRef });

  return (
    <div className="project" id='projects-call' ref={containerRef}>
      <div className="section-heading-box">
        <h1 className="section-heading">Projects</h1>
      </div>

      <div className="project-content-box1">
        {projects.map((project, index) => (
          <div key={index} className="project-content resume-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                  Go Live
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ marginLeft: "10px" }}>
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
