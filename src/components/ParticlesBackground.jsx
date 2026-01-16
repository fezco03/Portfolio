import { useCallback } from "react"
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60, // Reduced from 120 for better performance
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2, // Reduced from 4
            },
            repulse: {
              distance: 150, // Reduced from 200
              duration: 0.3, // Reduced from 0.4
            },
          },
        },
        particles: {
          color: {
            value: "#14b8a6",
          },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.8, // Reduced from 1
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Increased area = fewer particles
            },
            value: 50, // Reduced from 80
          },
          opacity: {
            value: 0.4, // Reduced from 0.5
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 }, // Reduced from max: 5
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 pointer-events-none"
    />
  )
}

export default ParticlesBackground
