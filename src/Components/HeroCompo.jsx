import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { photo } from "../assets";
import "./HeroCompo.css";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const roles = [
      "Web Developer",
      "Full Stack Developer",
      "Java Developer",
      "ReactJS Specialist",
      "MERN Stack Engineer",
    ];

    // Animate hero container
    gsap.from(heroRef.current, {
      x: -500,
      opacity: 0,
      rotate: -30,
      scaleY: 2.5,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Cycle roles
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    roles.forEach((role) => {
      tl.to(subtitleRef.current, {
        text: role,
        duration: 1,
        ease: "power2.inOut",
      }).to(subtitleRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 1.2,
        onComplete: () => {
          subtitleRef.current.style.opacity = 1; // reset for next loop
        },
      });
    });

    // Animate image
    gsap.from(imageRef.current, {
      x: 50,
      rotate: 5,
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-header" ref={heroRef}>
          <h1 className="hero-title">
            Hello <br />
            <span className="highlight" id="iam">
              I&apos;m
            </span>{" "}
            <span className="highlight">Sandesh</span>
          </h1>
          <h2 className="subheading" ref={subtitleRef}>
            Full Stack Developer.
          </h2>
        </div>
      </div>

      <div className="hero-image-container" ref={imageRef}>
        <img
          src={photo}
          alt="Portrait of Sandesh Karad"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
