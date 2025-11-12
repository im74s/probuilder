import { useEffect, useState } from "react";

export const SplashScreen = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
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
        background: 'linear-gradient(180deg, #0a0e1a 0%, #111827 100%)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      
      {/* Simplified background glow - mobile optimized */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.5s ease-in'
        }}
      >
        <div 
          style={{
            width: '80vw',
            height: '80vw',
            maxWidth: '600px',
            maxHeight: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
      </div>

      {/* Animated particles - CSS only, no canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '2px',
              height: '2px',
              background: i % 3 === 0 ? '#6adcff' : i % 3 === 1 ? '#60a5fa' : '#a78bfa',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: `0 0 10px currentColor`
            }}
          />
        ))}
      </div>

      {/* Central logo area */}
      <div 
        className="absolute top-1/2 left-1/2 flex items-center justify-center"
        style={{
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '600px'
        }}
      >
        {/* Outer glow circle */}
        <div 
          style={{
            position: 'absolute',
            width: '100%',
            paddingBottom: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(106, 220, 255, 0.2) 0%, rgba(96, 165, 250, 0.1) 50%, transparent 100%)',
            filter: 'blur(30px)',
            animation: 'pulse 2.5s ease-in-out infinite'
          }}
        />

        {/* Middle glow circle */}
        <div 
          style={{
            position: 'absolute',
            width: '70%',
            paddingBottom: '70%',
            left: '15%',
            top: '15%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(106, 220, 255, 0.3) 0%, rgba(168, 139, 250, 0.2) 50%, transparent 100%)',
            filter: 'blur(20px)',
            animation: 'rotate 8s linear infinite'
          }}
        />

        {/* Logo text container */}
        <div className="relative z-10 text-center px-4">
          {/* Background glow text */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '0.02em',
              color: '#6adcff',
              filter: 'blur(8px)',
              opacity: 0.5,
              animation: 'pulse 2.2s ease-in-out infinite',
              whiteSpace: 'nowrap'
            }}
          >
            Pro Builder
          </div>

          {/* Secondary glow */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '0.02em',
              color: '#60a5fa',
              filter: 'blur(12px)',
              opacity: 0.3,
              animation: 'rotate 10s linear infinite',
              whiteSpace: 'nowrap'
            }}
          >
            Pro Builder
          </div>

          {/* Main crisp text */}
          <h1
            className={glitchActive ? "glitch-active" : ""}
            style={{
              position: 'relative',
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '0.02em',
              color: '#ffffff',
              textShadow: '0 0 10px rgba(106, 220, 255, 0.6), 0 0 20px rgba(106, 220, 255, 0.4), 0 0 30px rgba(106, 220, 255, 0.2)',
              WebkitFontSmoothing: 'antialiased',
              animation: 'float 3s ease-in-out infinite',
              whiteSpace: 'nowrap'
            }}
          >
            Pro Builder
          </h1>
        </div>
      </div>

      {/* Vignette overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(10, 14, 26, 0.6) 80%, rgba(10, 14, 26, 0.9) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Inline animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes rotate {
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
            transform: translateY(-10px);
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

        /* Ensure no scroll on mobile */
        body, html {
          overflow: hidden;
          position: fixed;
          width: 100%;
          height: 100%;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
};
