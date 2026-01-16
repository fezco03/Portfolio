import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ThemeToggle from './components/ThemeToggle'

// Lazy load heavy/optional components
const ParticlesBackground = lazy(() => import('./components/ParticlesBackground'))
const Cursor = lazy(() => import('./components/Cursor'))
const EasterEggs = lazy(() => import('./components/EasterEggs'))
const KonamiCode = lazy(() => import('./components/KonamiCode'))
const MouseTrail = lazy(() => import('./components/MouseTrail'))
const RetroTerminal = lazy(() => import('./components/RetroTerminal'))
const SurpriseButton = lazy(() => import('./components/SurpriseButton'))

// Fun loading messages
const loadingMessages = [
  { text: "Summoning digital magic ✨", emoji: "🪄" },
  { text: "Brewing some code coffee ☕", emoji: "💻" },
  { text: "Teaching pixels to dance 💃", emoji: "🎨" },
  { text: "Downloading more RAM... 📥", emoji: "🚀" },
  { text: "Convincing electrons to cooperate ⚡", emoji: "🔌" },
  { text: "Turning coffee into code ☕", emoji: "👨‍💻" },
  { text: "Debugging the universe 🌌", emoji: "🐛" },
  { text: "Compiling awesome... 🎯", emoji: "✨" },
  { text: "Hacking the mainframe 🕶️", emoji: "💾" },
  { text: "Loading epicness... 🎮", emoji: "🔥" }
]

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [effectType, setEffectType] = useState('fire') // 'fire' or 'snow'
  const [isMobile, setIsMobile] = useState(false)
  const [loadingMessage] = useState(() => 
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
  )

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    
    // Faster loading on mobile
    setTimeout(() => setLoading(false), isMobile ? 1000 : 2000)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleEffect = () => {
    setEffectType(prev => prev === 'fire' ? 'snow' : 'fire')
  }

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black overflow-hidden"
          >
            {/* Simplified animated background - only on desktop */}
            {!isMobile && (
              <>
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-full blur-3xl"
                />
              </>
            )}
            
            {isMobile && (
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/30 to-purple-600/30 rounded-full blur-3xl"
              />
            )}

            {/* Main content */}
            <div className="relative z-10 text-center">
              {/* Animated emoji */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-8xl mb-8"
              >
                {loadingMessage.emoji}
              </motion.div>

              {/* Loading text */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
              >
                {loadingMessage.text}
              </motion.h2>

              {/* Animated dots */}
              <div className="flex gap-2 justify-center mb-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600"
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500"
                />
              </div>

              {/* Fun quote */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-gray-500 text-sm italic"
              >
                "Code is poetry, bugs are just creative typos" 🎭
              </motion.p>
            </div>

            {/* Floating particles - desktop only */}
            {!isMobile && [...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute bottom-0 w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Only load heavy effects on desktop */}
        <Suspense fallback={null}>
          {!isMobile && <ParticlesBackground />}
          {!isMobile && <Cursor />}
        </Suspense>
        
        <Navbar darkMode={darkMode} />
        <ThemeToggle 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          effectType={effectType}
          toggleEffect={toggleEffect}
        />
        
        {/* Fun Interactive Components - Desktop only */}
        <Suspense fallback={null}>
          {!isMobile && <EasterEggs effectType={effectType} setEffectType={setEffectType} />}
          {!isMobile && <KonamiCode />}
          {!isMobile && <MouseTrail />}
          {!isMobile && <RetroTerminal />}
          {!isMobile && <SurpriseButton />}
        </Suspense>
        
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Stats />
          <Projects />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
