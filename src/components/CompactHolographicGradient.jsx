import { useEffect, useRef } from 'react'

/**
 * Compact CSS-based Holographic Gradient
 * No Three.js required - pure CSS implementation
 * Perfect for buttons, cards, and small UI elements
 * 
 * Ultra-lightweight alternative for performance-critical sections
 */

const CompactHolographicGradient = ({
  mode = 'cyberpunk',
  intensity = 1,
  speed = 'normal', // 'slow', 'normal', 'fast'
  blur = 40,
  className = '',
  children
}) => {
  const gradientRef = useRef(null)

  const colorSchemes = {
    cyberpunk: {
      colors: ['#00ffff', '#ff00ff', '#8b5cf6', '#00d4ff', '#ff006e'],
      positions: ['0%', '25%', '50%', '75%', '100%']
    },
    plasma: {
      colors: ['#4f46e5', '#7c3aed', '#ec4899', '#06b6d4', '#8b5cf6'],
      positions: ['0%', '25%', '50%', '75%', '100%']
    },
    aurora: {
      colors: ['#10b981', '#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899'],
      positions: ['0%', '25%', '50%', '75%', '100%']
    },
    neon: {
      colors: ['#39ff14', '#ff10f0', '#00f0ff', '#ffff00', '#ff6600'],
      positions: ['0%', '25%', '50%', '75%', '100%']
    },
    crystal: {
      colors: ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'],
      positions: ['0%', '25%', '50%', '75%', '100%']
    }
  }

  const speedValues = {
    slow: '20s',
    normal: '10s',
    fast: '5s'
  }

  const scheme = colorSchemes[mode] || colorSchemes.cyberpunk
  const animationDuration = speedValues[speed] || speedValues.normal

  // Create gradient stops
  const gradientStops = scheme.colors.map((color, index) => 
    `${color} ${scheme.positions[index]}`
  ).join(', ')

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Multi-layer animated gradients */}
      <div 
        ref={gradientRef}
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, ${gradientStops}),
            linear-gradient(-45deg, ${gradientStops}),
            linear-gradient(90deg, ${gradientStops})
          `,
          backgroundSize: '400% 400%',
          filter: `blur(${blur}px) brightness(${intensity})`,
          animation: `holographic-flow ${animationDuration} ease infinite`,
          opacity: 0.9,
        }}
      />

      {/* Chromatic aberration layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${scheme.colors[0]}40, transparent 50%)`,
          mixBlendMode: 'screen',
          animation: `chromatic-shift ${animationDuration} ease-in-out infinite alternate`,
        }}
      />

      {/* Scanline effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
          animation: `scanline ${parseInt(animationDuration) * 0.8}s linear infinite`,
        }}
      />

      {/* Glow overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${scheme.colors[1]}20, transparent 70%)`,
          mixBlendMode: 'screen',
          animation: `pulse-glow ${parseInt(animationDuration) * 0.4}s ease-in-out infinite`,
        }}
      />

      {/* Content wrapper */}
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes holographic-flow {
          0% {
            background-position: 0% 50%, 100% 50%, 50% 0%;
          }
          50% {
            background-position: 100% 50%, 0% 50%, 50% 100%;
          }
          100% {
            background-position: 0% 50%, 100% 50%, 50% 0%;
          }
        }

        @keyframes chromatic-shift {
          0% { transform: translate(-2px, -1px); }
          100% { transform: translate(2px, 1px); }
        }

        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
      `}</style>
    </div>
  )
}

/**
 * Pre-configured Holographic Button Component
 */
export const HolographicButton = ({ 
  children, 
  onClick, 
  mode = 'cyberpunk',
  className = '',
  ...props 
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 rounded-xl overflow-hidden font-bold text-white transition-transform hover:scale-105 active:scale-95 ${className}`}
      {...props}
    >
      <CompactHolographicGradient 
        mode={mode}
        intensity={1.3}
        speed="normal"
        blur={30}
      />
      <span className="relative z-10 drop-shadow-lg">
        {children}
      </span>
    </button>
  )
}

/**
 * Pre-configured Holographic Card Component
 */
export const HolographicCard = ({ 
  children, 
  mode = 'plasma',
  className = '',
  contentClassName = '',
  ...props 
}) => {
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden backdrop-blur-sm ${className}`}
      {...props}
    >
      <CompactHolographicGradient 
        mode={mode}
        intensity={0.8}
        speed="slow"
        blur={50}
      />
      <div className={`relative z-10 p-6 bg-black/20 ${contentClassName}`}>
        {children}
      </div>
    </div>
  )
}

/**
 * Pre-configured Holographic Border Component
 */
export const HolographicBorder = ({ 
  children, 
  mode = 'cyberpunk',
  borderWidth = 2,
  className = '',
  contentClassName = '',
  ...props 
}) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{ padding: borderWidth }}
      {...props}
    >
      <CompactHolographicGradient 
        mode={mode}
        intensity={1.5}
        speed="normal"
        blur={20}
      />
      <div className={`relative z-10 bg-gray-900 rounded-lg ${contentClassName}`}>
        {children}
      </div>
    </div>
  )
}

/**
 * Pre-configured Holographic Text Component
 */
export const HolographicText = ({ 
  children, 
  mode = 'neon',
  className = '',
  as = 'span',
  ...props 
}) => {
  const Component = as

  return (
    <Component 
      className={`relative inline-block ${className}`}
      {...props}
    >
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x">
        {children}
      </span>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </Component>
  )
}

/**
 * Pre-configured Holographic Divider Component
 */
export const HolographicDivider = ({ 
  mode = 'aurora',
  height = 2,
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`relative w-full ${className}`}
      style={{ height: `${height}px` }}
      {...props}
    >
      <CompactHolographicGradient 
        mode={mode}
        intensity={1.8}
        speed="fast"
        blur={10}
      />
    </div>
  )
}

export default CompactHolographicGradient
