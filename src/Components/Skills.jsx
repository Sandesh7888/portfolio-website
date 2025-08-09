import React from "react"
import "./Skills.css"
import {skillsDetails} from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Skills = () => {
  useGSAP(() => {
    const skillBars = gsap.utils.toArray(".skill-fill");
    gsap.from(skillBars, {
      scaleX: 0,
      duration: 0.8,
         //   ease: "bounce.out",
      // stagger: 0.2,
      transformOrigin: "left",
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 60%",
        end: "bottom 80%",
        // scrub: 1,
        toggleActions: "play none none reverse",
        markers: false,
      }
    });
  });
  return (
    <div className="skills" id="skills-call">
      <div className="section-heading-box">
        <h1 className="section-heading">My Skills</h1>
      </div>
      <div className="skills-section">
       
        <p className="skills-intro">
          As a front-end developer, I possess a mastery of HTML, CSS, and
          JavaScript, enabling me to craft captivating and responsive web
          interfaces.
        </p>

        {skillsDetails.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">
              {skill.name} <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div  className="skill-fill"  style={{ width: `${skill.level}%` }} ></div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Skills;
