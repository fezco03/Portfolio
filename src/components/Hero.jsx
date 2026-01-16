import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaEnvelope, FaChevronDown } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated Gradient Blobs - Simplified on mobile */}
      <div className="absolute inset-0 opacity-30">
        {!isMobile ? (
          // Desktop: Multiple animated blobs
          <>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl"
            />
          </>
        ) : (
          // Mobile: Single static gradient blob
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-3xl" />
        )}
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary-400 text-xl md:text-2xl mb-4 tracking-wide font-semibold"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            Joshua Lopez
          </motion.h1>

          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-16 sm:h-20 flex items-center justify-center px-4">
            <TypeAnimation
              sequence={[
                'Web Developer',
                2000,
                'React Enthusiast',
                2000,
                'UI/UX Designer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient font-bold"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Passionate IT graduate with honors, specializing in web development and UI/UX design. 
            Creating user-friendly and visually appealing digital solutions with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-full font-semibold shadow-lg text-center"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all text-center"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <motion.a
              href="https://www.facebook.com/lopez.fezco03/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-all"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="mailto:joshualopez0990@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 transition-all"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <FaChevronDown className="text-white text-2xl" />
      </motion.div>
    </section>
  )
}

export default Hero
