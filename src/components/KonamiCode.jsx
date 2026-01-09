import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

const KonamiCode = () => {
  const [activated, setActivated] = useState(false)
  const [keys, setKeys] = useState([])
  
  // Classic Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ]

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys(prevKeys => {
        const newKeys = [...prevKeys, e.key].slice(-10)
        
        // Check if Konami code is completed
        const isMatch = konamiCode.every((key, index) => 
          newKeys[index]?.toLowerCase() === key.toLowerCase()
        )
        
        if (isMatch && !activated) {
          activateKonamiMode()
        }
        
        return newKeys
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activated])

  const activateKonamiMode = () => {
    setActivated(true)
    
    // Epic confetti explosion
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99999 }

    const randomInRange = (min, max) => Math.random() * (max - min) + min

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        clearInterval(interval)
        return
      }

      const particleCount = 50 * (timeLeft / duration)
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe']
      })
    }, 250)

    // Play fun animation
    document.body.style.animation = 'rainbow-spin 1s ease-in-out'
    
    // Add rainbow spin animation
    if (!document.getElementById('konami-animations')) {
      const style = document.createElement('style')
      style.id = 'konami-animations'
      style.textContent = `
        @keyframes rainbow-spin {
          0%, 100% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(180deg); }
        }
        @keyframes matrix-rain {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `
      document.head.appendChild(style)
    }

    // Reset after 5 seconds
    setTimeout(() => {
      setActivated(false)
      setKeys([])
      document.body.style.animation = ''
    }, 5000)
  }

  return (
    <AnimatePresence>
      {activated && (
        <>
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 z-[99998] flex items-center justify-center pointer-events-none"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-12 py-8 rounded-3xl shadow-2xl border-4 border-yellow-300"
            >
              <h2 className="text-4xl font-bold mb-2 text-center">🎮 KONAMI CODE! 🎮</h2>
              <p className="text-xl text-center">+30 Lives Activated! 🚀</p>
              <p className="text-sm text-center mt-2 opacity-80">You're a legend! 🏆</p>
            </motion.div>
          </motion.div>

          {/* Matrix Rain Effect */}
          <div className="fixed inset-0 z-[99997] pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: '-100%' }}
                animate={{ y: '100vh' }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: 'linear'
                }}
                style={{ left: `${i * 5}%` }}
                className="absolute text-green-500 text-xs opacity-30 font-mono"
              >
                {Array.from({ length: 20 }, () => 
                  String.fromCharCode(Math.random() * 94 + 33)
                ).join('\n')}
              </motion.div>
            ))}
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default KonamiCode
