import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const VirusPrank = ({ isActive, onClose }) => {
  const [stage, setStage] = useState(1)
  const [progress, setProgress] = useState(0)
  const [glitchText, setGlitchText] = useState('VIRUS DETECTED')

  useEffect(() => {
    if (!isActive) return

    // Stage 1: Virus detected (2 seconds)
    const glitchInterval = setInterval(() => {
      const glitchOptions = ['V1RUS D3T3CT3D', 'VIRUS DETECTED', 'V!RU$ DET£CT€D', '\/IRUS DETECTED']
      setGlitchText(glitchOptions[Math.floor(Math.random() * glitchOptions.length)])
    }, 100)

    const stage1Timer = setTimeout(() => {
      setStage(2)
      clearInterval(glitchInterval)
      setGlitchText('SCANNING SYSTEM...')
    }, 2000)

    // Stage 2: Scanning (3 seconds)
    const stage2Timer = setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 2
        })
      }, 30)

      setTimeout(() => {
        setStage(3)
      }, 3000)
    }, 2000)

    // Stage 3: JUST KIDDING! (after 5 seconds total)
    const stage3Timer = setTimeout(() => {
      setStage(3)
    }, 5000)

    return () => {
      clearTimeout(stage1Timer)
      clearTimeout(stage2Timer)
      clearTimeout(stage3Timer)
      clearInterval(glitchInterval)
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
      >
        {/* Stage 1 & 2: Scary virus warning */}
        {stage < 3 && (
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [1, 1.02, 1],
              rotate: stage === 1 ? [0, -1, 1, 0] : 0
            }}
            transition={{ 
              duration: 0.3,
              repeat: stage === 1 ? Infinity : 0
            }}
            className="bg-red-600 border-4 border-red-800 rounded-lg p-8 max-w-2xl w-full mx-4 shadow-2xl"
          >
            {/* Fake Windows Error Icon */}
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl">⚠️</div>
              <div className="flex-1">
                <motion.h1 
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  {glitchText}
                </motion.h1>
                <p className="text-white text-lg">
                  {stage === 1 ? 'Critical system threat detected!' : 'Scanning for malicious files...'}
                </p>
              </div>
            </div>

            {stage === 2 && (
              <div className="mb-6">
                <div className="bg-gray-800 rounded-full h-8 overflow-hidden mb-2">
                  <motion.div
                    className="bg-yellow-400 h-full flex items-center justify-center text-black font-bold"
                    style={{ width: `${progress}%` }}
                  >
                    {progress}%
                  </motion.div>
                </div>
                <div className="text-white text-sm space-y-1 font-mono">
                  <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                    ▶ Scanning C:\Windows\System32\...</motion.div>
                  <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.5 }}>
                    ▶ Checking Program Files...</motion.div>
                  <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: 1 }}>
                    ▶ Analyzing suspicious activity...</motion.div>
                </div>
              </div>
            )}

            <div className="bg-black/40 p-4 rounded border-2 border-red-900 mb-4">
              <p className="text-white font-mono text-sm">
                <span className="text-red-300">ERROR CODE:</span> 0x8007FAKE
                <br />
                <span className="text-red-300">THREAT LEVEL:</span> {stage === 1 ? 'CRITICAL' : 'HIGH'}
                <br />
                <span className="text-red-300">FILES AFFECTED:</span> {Math.floor(Math.random() * 9999)}
              </p>
            </div>

            {/* Fake system alerts */}
            <div className="grid grid-cols-2 gap-2 text-xs text-white">
              <div className="bg-black/40 p-2 rounded border border-red-700">⚠️ Firewall Disabled</div>
              <div className="bg-black/40 p-2 rounded border border-red-700">⚠️ Protection OFF</div>
            </div>
          </motion.div>
        )}

        {/* Stage 3: JUST KIDDING! */}
        {stage === 3 && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 border-4 border-white rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-8xl mb-4">😂</div>
              <h1 className="text-5xl font-bold text-white mb-4">
                JUST KIDDING!
              </h1>
              <p className="text-2xl text-white mb-6">
                Got you! 🎉
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-white text-lg mb-2">
                  ✅ <strong>Your computer is 100% safe!</strong>
                </p>
                <p className="text-white/90">
                  This was just a harmless prank triggered by the "joke" command. 
                  No viruses, no malware, just pure fun! 😄
                </p>
              </div>

              <div className="text-white/80 text-sm mb-6 space-y-1">
                <p>🔒 No actual scanning occurred</p>
                <p>🛡️ Your system was never at risk</p>
                <p>💻 All files are perfectly safe</p>
                <p>🎭 This is 100% a joke feature</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                😅 Okay, You Got Me! Close This
              </motion.button>

              <p className="text-white/60 text-xs mt-4">
                Hope you enjoyed the prank! Share this with friends! 🤣
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* Glitch overlay effect for stage 1 */}
        {stage === 1 && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.2, repeat: Infinity }}
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(255,0,0,0.1) 0px, transparent 2px, transparent 4px)',
            }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default VirusPrank
