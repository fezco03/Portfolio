import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaAward, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa'
import AdvancedHolographicGradient from './AdvancedHolographicGradient'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [`${import.meta.env.BASE_URL}lopez.png`, `${import.meta.env.BASE_URL}assssw.jpg`]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds
    
    return () => clearInterval(interval)
  }, [images.length])

  const stats = [
    { icon: FaGraduationCap, value: '2025', label: 'Graduate', color: 'from-primary-500 to-primary-600' },
    { icon: FaTrophy, value: 'Cum Laude', label: 'Honors', color: 'from-secondary-500 to-secondary-600' },
    { icon: FaAward, value: '5+', label: 'Awards', color: 'from-accent-500 to-accent-600' },
    { icon: FaProjectDiagram, value: '5+', label: 'Projects', color: 'from-primary-500 to-secondary-500' },
  ]

  return (
    <section id="about" className="relative py-12 sm:py-20 overflow-hidden bg-gray-950">
      {/* Full Holographic Background Effect */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <AdvancedHolographicGradient
          mode="cyberpunk"
          intensity={1.8}
          speed={0.3}
          distortion={0.4}
          scale={4}
          cameraPosition={[0, 0, 3.5]}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.div
                whileHover={{ rotate: 12 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl transform rotate-6 transition-transform"
              />
              <div className="relative rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden border-2 border-cyan-500/30 w-full aspect-[3/4] max-w-lg mx-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    src={images[currentImageIndex]}
                    alt="Joshua Lopez"
                    className="w-full h-full object-cover object-center transition-transform"
                  />
                </AnimatePresence>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="px-4 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Fresh Graduate IT Student | Cum Laude
            </h3>
            <p className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
              As a recent IT graduate with honors and cum laude recognition, I bring fresh perspectives 
              and up-to-date knowledge in web development and technology. My journey has been marked by 
              consistent academic excellence as a President Lister and a passion for creating innovative 
              digital solutions.
            </p>
            <p className="text-sm sm:text-base text-gray-200 mb-8 leading-relaxed">
              During my internship at Blvck Entertainment, I successfully deployed production-ready websites 
              and gained valuable real-world experience. My award-winning capstone project, Altora AR Solar System, 
              showcases my ability to blend creativity with technical expertise.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-4 sm:p-6 bg-gray-900/70 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-lg hover:shadow-cyan-500/50 hover:border-cyan-500/60 transition-all"
                >
                  <stat.icon className={`text-3xl sm:text-4xl mx-auto mb-2 text-cyan-400`} />
                  <p className={`text-2xl sm:text-3xl font-bold text-white mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
