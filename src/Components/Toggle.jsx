import React, { useState, useEffect } from "react";
import "./Toggle.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Toggle = () => {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark';
    setIsNight(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);

  const handleToggle = () => {
    const nextIsNight = !isNight;
    setIsNight(nextIsNight);
    document.documentElement.classList.toggle('dark', nextIsNight);
    localStorage.setItem('theme', nextIsNight ? 'dark' : 'light');

    gsap.to(".mainBody", {
      duration: 1,
      backgroundColor: nextIsNight ? "#0f0f23" : "#f8fafc",
      color: nextIsNight ? "#f8fafc" : "#0f0f23",
      ease: "power2.inOut"
    });
  };

  return (
    <div className="app-container">
      <button className="toggle-btn" onClick={handleToggle}>
        {isNight ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Toggle;
