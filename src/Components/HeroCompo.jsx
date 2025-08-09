import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { photo } from "../assets";
import "./HeroCompo.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      x: -500,
      zIndex: -1,
      opacity: 0,
      duration: 1.2,
      rotate: -30,
      scaleY: 2.5,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

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
        end: "bottom 60%",
        toggleActions: "play none none reverse",
        markers: false,
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
          <h2 className="subheading">Full Stack Developer.</h2>
        </div>
      </div>

      <div className="hero-image-container" ref={imageRef}>
        <img
          src={photo}
          alt="Portrait of Sandesh Karad"
          className="hero-image"
        />
      </div>

      <div className="hero-mobile-only">
        {/* Optional mobile content */}
      </div>
    </section>
  );
};

export default Hero;
