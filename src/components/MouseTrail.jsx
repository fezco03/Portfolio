import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

const MouseTrail = () => {
  const [trails, setTrails] = useState([])
  const [isEnabled, setIsEnabled] = useState(false)
  const trailIdRef = useRef(0)

  useEffect(() => {
    // Toggle trail on/off with 'T' key
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 't') {
        setIsEnabled(prev => !prev)
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    const handleMouseMove = (e) => {
      const id = trailIdRef.current++
      const trail = {
        id,
        x: e.clientX,
        y: e.clientY,
        emoji: ['✨', '💫', '⭐', '🌟', '💥', '🎨', '🚀', '💻'][Math.floor(Math.random() * 8)]
      }

      setTrails(prev => [...prev, trail].slice(-15)) // Keep last 15 trails

      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isEnabled])

  return (
    <>
      {/* Toggle Indicator */}
      {isEnabled && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
        >
          ✨ Mouse Trail Active (Press T to toggle)
        </motion.div>
      )}

      {/* Trail Effects */}
      {trails.map(trail => (
        <motion.div
          key={trail.id}
          initial={{ 
            opacity: 1, 
            scale: 0,
            x: trail.x - 12,
            y: trail.y - 12
          }}
          animate={{ 
            opacity: 0, 
            scale: 1.5,
            y: trail.y - 40
          }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="fixed pointer-events-none z-[9999] text-2xl"
        >
          {trail.emoji}
        </motion.div>
      ))}
    </>
  )
}

export default MouseTrail
