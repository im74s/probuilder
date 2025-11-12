import { useEffect, useState } from "react";
import { MatrixRain } from "./MatrixRain";
import { ParticleCanvas } from "./ParticleCanvas";

export const SplashScreen = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure component is mounted before animations
    setMounted(true);

    // Trigger random glitch effects
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.25) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 300);
      }
    }, 2000 + Math.random() * 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, hsl(220, 60%, 3%) 0%, hsl(215, 50%, 8%) 100%)',
      }}
    >
      
      {/* Volumetric light effect - Optimized for mobile */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.8s ease-in',
        }}
      >
        <div 
          style={{
            width: 'min(80vw, 600px)',
            height: 'min(80vw, 600px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, hsla(215, 100%, 62%, 0.15) 0%, transparent 70%)',
            filter: 'blur(50px)', // Reduced from 80px
            animation: 'volumetric-pulse 3s ease-in-out infinite',
          }}
        />
      </div>

      {/* Matrix rain background */}
      <MatrixRain />

      {/* Particle system */}
      <ParticleCanvas />

      {/* Central logo with halos */}
      <div 
        className="absolute top-1/2 left-1/2 flex items-center justify-center"
        style={{
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '700px',
        }}
      >
        {/* Outer halo - Simplified */}
        <div 
          style={{
            position: 'absolute',
            width: 'min(90vw, 500px)',
            height: 'min(90vw, 500px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, hsla(190, 100%, 65%, 0.2) 0%, hsla(215, 100%, 62%, 0.1) 50%, transparent 100%)',
            filter: 'blur(35px)', // Reduced blur
            animation: 'neon-pulse 2.5s ease-in-out infinite',
          }}
        />

        {/* Middle halo */}
        <div 
          style={{
            position: 'absolute',
            width: 'min(60vw, 350px)',
            height: 'min(60vw, 350px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, hsla(190, 100%, 65%, 0.25) 0%, hsla(265, 80%, 65%, 0.15) 50%, transparent 100%)',
            filter: 'blur(25px)', // Reduced blur
            animation: 'logo-rotate 8s linear infinite',
          }}
        />

        {/* Inner glow */}
        <div 
          style={{
            position: 'absolute',
            width: 'min(40vw, 250px)',
            height: 'min(40vw, 250px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, hsla(190, 100%, 65%, 0.3) 0%, transparent 70%)',
            filter: 'blur(15px)', // Reduced blur
            animation: 'neon-pulse 2.2s ease-in-out infinite',
          }}
        />

        {/* Logo text */}
        <div className="relative z-10 text-center px-4">
          {/* Glow layer 1 - Behind text */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              fontSize: 'clamp(2rem, 10vw, 4.5rem)',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 900,
              letterSpacing: '0.02em',
              color: 'hsl(190, 100%, 65%)',
              filter: 'blur(6px)', // Reduced blur
              opacity: 0.5,
              animation: 'neon-pulse 2.2s ease-in-out infinite',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Pro Builder
          </div>

          {/* Glow layer 2 - Deeper behind */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              fontSize: 'clamp(2rem, 10vw, 4.5rem)',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 900,
              letterSpacing: '0.02em',
              color: 'hsl(215, 100%, 62%)',
              filter: 'blur(10px)', // Reduced blur
              opacity: 0.3,
              animation: 'logo-rotate 10s linear infinite',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Pro Builder
          </div>

          {/* Main crisp text on top */}
          <h1
            className={glitchActive ? "glitch-active" : ""}
            style={{
              position: 'relative',
              fontSize: 'clamp(2rem, 10vw, 4.5rem)',
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 900,
              letterSpacing: '0.02em',
              color: '#ffffff',
              textShadow: '0 0 10px rgba(106, 220, 255, 0.6), 0 0 20px rgba(106, 220, 255, 0.4)',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              animation: 'float 3s ease-in-out infinite',
              whiteSpace: 'nowrap',
              textRendering: 'optimizeLegibility',
            }}
          >
            Pro Builder
          </h1>
        </div>
      </div>

      {/* Subtle vignette */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, hsla(220, 60%, 3%, 0.6) 80%, hsla(220, 60%, 3%, 0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* CSS Animations - Inline for better mobile compatibility */}
      <style>{`
        @keyframes neon-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.03);
          }
        }

        @keyframes volumetric-pulse {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.08);
          }
        }

        @keyframes logo-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .glitch-active {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both !important;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        /* Prevent scrolling on mobile */
        html, body {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};
