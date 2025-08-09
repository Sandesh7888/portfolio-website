import React, { useState } from "react";
import "./Toggle.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Toggle = () => {
  const [isNight, setIsNight] = useState(false);

  useGSAP(() => {
    // Initial animation on mount
    gsap.fromTo(
      ".mainBody",
      { backgroundColor: "var(--color5)", color: "var(--light)" },
      {  backgroundColor: "var(--light)", color: "var(--color5)" }
    );
  }, []);

  const handleToggle = () => {
    setIsNight(!isNight);

    gsap.to(".mainBody", {
      duration: 1,
      
      backgroundColor: isNight ? "var(--light)" : "var(--color5)",
      color: isNight ? "var(--color5)" : "var(--light)",
      ease: "power2.inOut"
    });
  };

  return (
    <div className={`app-container ${isNight ? "night" : "day"}`}>
      <button className="toggle-btn" onClick={handleToggle}>
        {isNight ? "🌙" : "☀ "}
      </button>
    </div>
  );
};

export default Toggle;
