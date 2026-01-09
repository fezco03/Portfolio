import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import VirusPrank from './VirusPrank'

const SurpriseButton = () => {
  const [surprises, setSurprises] = useState([])
  const [clickCount, setClickCount] = useState(0)
  const [showVirusPrank, setShowVirusPrank] = useState(false)

  const surpriseActions = [
    () => {
      // Rainbow confetti
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3']
      })
      return { message: '🌈 Rainbow explosion!', color: 'from-pink-500 to-purple-500' }
    },
    () => {
      // Fireworks
      const duration = 2000
      const animationEnd = Date.now() + duration
      const interval = setInterval(() => {
        if (Date.now() > animationEnd) {
          clearInterval(interval)
          return
        }
        confetti({
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          zIndex: 9999,
          particleCount: 50,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          }
        })
      }, 250)
      return { message: '🎆 Fireworks show!', color: 'from-red-500 to-yellow-500' }
    },
    () => {
      // Snow effect
      confetti({
        particleCount: 100,
        startVelocity: 0,
        ticks: 200,
        origin: { x: 0.5, y: 0 },
        colors: ['#ffffff'],
        shapes: ['circle'],
        gravity: 0.5,
        scalar: 0.8,
        drift: 0
      })
      return { message: '❄️ Let it snow!', color: 'from-blue-400 to-cyan-300' }
    },
    () => {
      // Hearts
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        shapes: ['square'],
        colors: ['#ff1744', '#f50057', '#d500f9', '#651fff']
      })
      return { message: '💕 Spreading love!', color: 'from-pink-600 to-red-500' }
    },
    () => {
      // Stars explosion
      confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 },
        shapes: ['star'],
        colors: ['#FFD700', '#FFA500', '#FF6347', '#FF69B4']
      })
      return { message: '⭐ Star power!', color: 'from-yellow-400 to-orange-500' }
    },
    () => {
      // Side cannons
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 }
      })
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 }
      })
      return { message: '💥 Dual cannons fired!', color: 'from-green-500 to-blue-500' }
    },
    () => {
      // VIRUS PRANK!
      setTimeout(() => setShowVirusPrank(true), 300)
      return { message: '🦠 Scanning for viruses...', color: 'from-red-600 to-red-800' }
    }
  ]

  const handleSurprise = () => {
    const randomAction = surpriseActions[Math.floor(Math.random() * surpriseActions.length)]
    const result = randomAction()
    
    const newSurprise = {
      id: Date.now(),
      ...result
    }
    
    setSurprises(prev => [...prev, newSurprise])
    setClickCount(prev => prev + 1)
    
    // Remove message after 3 seconds
    setTimeout(() => {
      setSurprises(prev => prev.filter(s => s.id !== newSurprise.id))
    }, 3000)
  }

  return (
    <>
      {/* Floating Surprise Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        onClick={handleSurprise}
        className="fixed bottom-20 left-4 z-40 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-2xl font-bold flex items-center gap-2 hover:shadow-pink-500/50 transition-all"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <span className="text-2xl">🎉</span>
        <span>Surprise Me!</span>
        {clickCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {clickCount}
          </span>
        )}
      </motion.button>

      {/* Surprise Messages */}
      <div className="fixed top-32 right-4 z-50 space-y-2 max-w-xs">
        <AnimatePresence>
          {surprises.map(surprise => (
            <motion.div
              key={surprise.id}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              className={`bg-gradient-to-r ${surprise.color} text-white px-6 py-3 rounded-2xl shadow-lg font-semibold`}
            >
              {surprise.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Virus Prank Popup */}
      <VirusPrank 
        isActive={showVirusPrank} 
        onClose={() => setShowVirusPrank(false)} 
      />
    </>
  )
}

export default SurpriseButton
