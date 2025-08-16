import React from "react";


const Animation = () => {
  return (
    <div className="Animation" id="particlesjs">
      <Particles
        params={{
          particles: {
            number: { value: 290, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
              type: "triangle",
              polygon: { nb_sides: 10 }
            },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              random: true,
              out_mode: "out",
              bounce: true
            }
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" }
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        }}
      />
    </div>
  );
};

export default Animation;
