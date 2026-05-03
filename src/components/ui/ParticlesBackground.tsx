"use client"

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadSlim is a much smaller bundle containing only the essential features
      // which is perfect for this "linked nodes" federated learning aesthetic.
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        className="w-full h-full"
        options={{
          fullScreen: { enable: false }, // Prevent it from taking over the whole screen
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window", // Detect mouse events on the whole window, so pointer-events-none on the wrapper doesn't break it
            events: {
              onHover: {
                enable: true,
                mode: "grab", // Draw lines from the cursor to nearby nodes when hovered
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.6,
                  color: "#00d4ff" // Neon cyan grab lines
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#00d4ff", "#8b5cf6", "#00ff88"], // Brand colors
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce", // Keep them within the hero section
              },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800,
                height: 800
              },
              value: 80, // Number of nodes
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
