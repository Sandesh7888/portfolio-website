import React from "react";
import "./Skills.css";
import { skillsDetails } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    const skillBars = gsap.utils.toArray(".skill-fill");
    gsap.fromTo(
      skillBars,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        transformOrigin: "left",
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 60%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          markers: false,
        }
      }
    );
  });

  const half = Math.ceil(skillsDetails.length / 2);
  const firstHalf = skillsDetails.slice(0, half);
  const secondHalf = skillsDetails.slice(half);

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

        <div className="skills-columns">
          {/* First Column */}
          <div className="skills-column">
            {firstHalf.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">
                  {skill.name}
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ "--fill-width": `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="skills-column">
            {secondHalf.map((skill, index) => (
              <div className="skill" key={index}>
                <div className="skill-name">
                  {skill.name}
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ "--fill-width": `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
