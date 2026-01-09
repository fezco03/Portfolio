import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaPaintBrush, FaMobile, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Building responsive and modern websites using React, Vue.js, and Tailwind CSS.',
      features: ['Responsive Design', 'Clean Code', 'SEO Optimized'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: FaPaintBrush,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces with Figma and modern design tools.',
      features: ['User Research', 'Prototyping', 'Visual Design'],
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: FaMobile,
      title: 'Mobile Apps',
      description: 'Developing cross-platform mobile applications using React Native.',
      features: ['iOS & Android', 'Native Performance', 'App Store Ready'],
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description: 'Optimizing website speed and performance for better user experience.',
      features: ['Fast Loading', 'Code Splitting', 'Image Optimization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaUsers,
      title: 'Team Collaboration',
      description: 'Working effectively in teams using Git, Agile methodologies, and modern workflows.',
      features: ['Version Control', 'Code Reviews', 'Documentation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaLightbulb,
      title: 'Technical Consulting',
      description: 'Providing technical guidance and solutions for your development challenges.',
      features: ['Problem Solving', 'Best Practices', 'Architecture Design'],
      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <section id="services" className="py-12 sm:py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What I Can Do For You
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Services and expertise I offer</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                >
                  <service.icon className="text-white text-xl sm:text-2xl" />
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      <span className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-base sm:text-lg">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Let's Talk About Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
