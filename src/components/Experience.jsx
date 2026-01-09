import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaTrophy, FaGraduationCap, FaAward } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      icon: FaBriefcase,
      year: '2024',
      title: 'OJT - Blvck Entertainment',
      description: 'Deployed production-ready websites and gained real-world development experience. Worked on responsive design and modern web technologies.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: FaTrophy,
      year: '2024',
      title: 'Best AR Capstone Project',
      description: 'Altora: AR Solar System won Best Capstone Project award for innovative use of augmented reality in education.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: FaGraduationCap,
      year: '2023-2024',
      title: 'President Lister',
      description: 'Consistently achieved academic excellence and maintained position on the President\'s List for multiple terms.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: FaAward,
      year: '2025',
      title: 'Cum Laude Graduate',
      description: 'Graduated with Cum Laude honors from STI, demonstrating dedication and excellence in Information Technology.',
      color: 'from-primary-600 to-secondary-500'
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative pl-8 pb-12 border-l-2 border-primary-600 dark:border-primary-400 last:pb-0"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className={`absolute -left-6 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}
              >
                <exp.icon className="text-white text-xl" />
              </motion.div>
              <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">{exp.year}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{exp.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
