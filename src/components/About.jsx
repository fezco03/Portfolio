import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTrophy, FaAward, FaProjectDiagram, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ['/lopez.png', '/assssw.jpg']

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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <motion.div
                whileHover={{ rotate: 12 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-2xl transform rotate-6 transition-transform"
              />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
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
                    className="w-full h-full object-cover transition-transform"
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
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Fresh Graduate IT Student | Cum Laude
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              As a recent IT graduate with honors and cum laude recognition, I bring fresh perspectives 
              and up-to-date knowledge in web development and technology. My journey has been marked by 
              consistent academic excellence as a President Lister and a passion for creating innovative 
              digital solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              During my internship at Blvck Entertainment, I successfully deployed production-ready websites 
              and gained valuable real-world experience. My award-winning capstone project, Altora AR Solar System, 
              showcases my ability to blend creativity with technical expertise.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <stat.icon className={`text-4xl mx-auto mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                  <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
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
