import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const EasterEggs = ({ effectType, setEffectType }) => {
  const [secretMessage, setSecretMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [eggFound, setEggFound] = useState(false)
  const [particles, setParticles] = useState([])

  // Secret messages array
  const messages = [
    "🎉 You found a secret! You're a curious one!",
    "🚀 Developer Mode Activated! (Just kidding)",
    "🎨 Fun fact: This portfolio was built with ❤️ and lots of ☕",
    "🐛 No bugs here... or are there? 🐛",
    "💻 Congrats! You're officially a code explorer!",
    "🌟 Achievement Unlocked: Easter Egg Hunter!",
    "🎯 You've got great clicking skills!",
    "🦄 Unicorns approve of your curiosity!",
  ]

  // Handle triple click on specific areas
  const handleEasterEggClick = () => {
    setClickCount(prev => prev + 1)
    
    if (clickCount >= 2 && !eggFound) {
      setEggFound(true)
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      setSecretMessage(randomMessage)
      setShowMessage(true)
      
      // Confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe']
      })
      
      setTimeout(() => {
        setShowMessage(false)
        setEggFound(false)
        setClickCount(0)
      }, 5000)
    }
    
    // Reset click count after 1 second of no clicks
    setTimeout(() => setClickCount(0), 1000)
  }

  // Bottom screen aura effect - no cleanup needed, just CSS
  useEffect(() => {
    // Generate particles for fire/snow effect
    const generateParticles = () => {
      const newParticles = []
      const particleCount = 30
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: Math.random(),
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: effectType === 'fire' ? 3 + Math.random() * 2 : 4 + Math.random() * 3,
          size: effectType === 'fire' ? 4 + Math.random() * 8 : 3 + Math.random() * 6,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()

    // Regenerate particles periodically for variety
    const interval = setInterval(generateParticles, 8000)
    return () => clearInterval(interval)
  }, [effectType])

  // Toggle effect type with 'E' key
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'e') {
        setEffectType(prev => prev === 'fire' ? 'snow' : 'fire')
      }
    }
    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [setEffectType])

  return (
    <>
      {/* Fire Effect - Bottom Screen */}
      {effectType === 'fire' && (
        <div className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none z-10">
          {/* Gradient background glow with smooth fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-600/40 via-red-500/25 via-yellow-500/10 to-transparent" 
               style={{ maskImage: 'linear-gradient(to top, black 0%, black 60%, transparent 100%)' }} />
          
          {/* Animated flame particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-t from-yellow-500 via-orange-500 to-red-600"
              style={{
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                bottom: '-10px',
                filter: 'blur(3px)',
              }}
              animate={{
                y: [-10, -250],
                x: [0, Math.random() * 40 - 20],
                opacity: [0.9, 0.7, 0.4, 0],
                scale: [1, 1.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Embers/sparkles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: '0px',
                filter: 'blur(1px)',
                boxShadow: '0 0 4px rgba(251, 191, 36, 0.8)',
              }}
              animate={{
                y: [0, -180 - Math.random() * 120],
                x: [0, Math.random() * 60 - 30],
                opacity: [1, 0.9, 0.5, 0],
                scale: [1, 1.2, 0.6, 0],
              }}
              transition={{
                duration: 2.5 + Math.random() * 2,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Snow Effect - Top Screen (Near Navbar) */}
      {effectType === 'snow' && (
        <div className="fixed top-0 left-0 right-0 h-48 pointer-events-none z-10">
          {/* Gradient background glow with smooth fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-cyan-300/10 to-transparent" 
               style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)' }} />
          
          {/* Animated snowflake particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-b from-white to-blue-100"
              style={{
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: '-10px',
                filter: 'blur(2px)',
                boxShadow: '0 0 6px rgba(255, 255, 255, 0.6)',
              }}
              animate={{
                y: [-10, 250],
                x: [0, Math.random() * 60 - 30, Math.random() * 40 - 20],
                opacity: [0.95, 0.8, 0.5, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 0.9, 0.6],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}

          {/* Extra sparkle snowflakes */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: '0px',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.9)',
              }}
              animate={{
                y: [0, 200 + Math.random() * 100],
                x: [0, Math.random() * 50 - 25],
                opacity: [1, 0.8, 0.4, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )}

      {/* Hidden clickable area - Logo area */}
      <div 
        onClick={handleEasterEggClick}
        className="fixed top-4 left-4 w-12 h-12 cursor-pointer z-50"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        title="🤫"
      />

      {/* Secret Message Toast */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-[9999] max-w-md"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-2xl border-2 border-white/30 backdrop-blur-sm">
              <p className="text-lg font-bold text-center">{secretMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EasterEggs
