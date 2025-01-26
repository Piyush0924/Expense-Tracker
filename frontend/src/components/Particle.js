import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div style={styles.container}>
      <Particles
        id="firefly-particles"
        style={styles.particles}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            fullScreen: false,
          },
          background: {
            color: { value: '#42c9c5' }, // Dark background color
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#a2e0c0', // Particle color
            },
            shape: {
              type: 'dot',
            },
            opacity: {
              value: 1,
              random: true,
            },
            size: {
              value: 3,
              random: { enable: true, minimumValue: 1 },
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: {
                default: 'out',
              },
            },
            life: {
              duration: {
                sync: false,
                value: 3,
              },
              count: 0,
              delay: {
                random: {
                  enable: true,
                  minimumValue: 0.5,
                },
                value: 1,
              },
            },
          },
        }}
      />
      <div style={styles.content}>
        <h1 style={styles.header}>Particle Effect</h1>
        <h2 style={styles.subheader}>React with TSParticles</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundColor: "#1a1a1a",
    overflow: "hidden",
  },
  particles: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  content: {
    position: "relative",
    zIndex: 1,
    color: "white",
    textAlign: "center",
    padding: "50px",
  },
  header: {
    fontSize: "48px",
    color: "#a2e0c0",
    marginBottom: "20px",
  },
  subheader: {
    fontSize: "32px",
    color: "#a2e0c0",
    animation: "fadeIn 2s ease-in-out",
  },
};

export default Particle;
