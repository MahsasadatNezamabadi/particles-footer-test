import React, { useEffect } from "react";

function ParticlesFooter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 120 },
            color: { value: "#FFC0CB" },
            shape: { type: "polygon" },
            opacity: { value: 0.5 },
            size: { value: 6 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#FF0000",
              opacity: 0.4,
              width: 3,
            },
            move: { enable: true, speed: 2 },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { particles_nb: 4 },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <footer style={{ position: "relative", height: "400px", overflow: "hidden" }}>
      <div
        id="particles-js"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "black",
          textAlign: "center",
          paddingTop: "60px",
        }}
      >
        <h3>Footer with Particles.js Effect</h3>
        <p>Moving dots behind this text </p>
      </div>
    </footer>
  );
}

export default ParticlesFooter;
