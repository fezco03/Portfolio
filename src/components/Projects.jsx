import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronDown, FaChevronUp, FaFilter } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedProject, setExpandedProject] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const projects = [
    {
      title: 'Altora: AR Solar System',
      description: 'Award-winning capstone project exploring the solar system through augmented reality.',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&h=400&fit=crop',
      tags: ['AR', 'Unity', 'Award Winner'],
      gradient: 'from-primary-500 to-secondary-500',
      hasContent: false,
      details: {
        overview: 'An immersive augmented reality application that brings the solar system to life, allowing users to explore planets in 3D space.',
        features: ['Interactive 3D planet models', 'Real-time planetary data', 'Educational content', 'AR marker tracking'],
        technologies: ['Unity 3D', 'AR Foundation', 'C#', 'Vuforia'],
        achievement: '🏆 Best Capstone Project Award 2024'
      }
    },
    {
      title: 'Blvck Entertainment Website',
      description: 'Production company website with responsive UI and modern design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React.js', 'Tailwind', 'Production'],
      gradient: 'from-secondary-500 to-accent-500',
      hasContent: false,
      details: {
        overview: 'A modern, responsive website for a production company featuring dynamic content and smooth animations.',
        features: ['Responsive design', 'Portfolio showcase', 'Contact integration', 'Smooth animations'],
        technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        achievement: '✨ Live Production Website'
      }
    },
    {
      title: 'STI Enrollment System',
      description: 'Comprehensive enrollment management system with database integration.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      tags: ['PHP', 'MySQL', 'CRUD'],
      gradient: 'from-accent-500 to-primary-500',
      hasContent: false,
      details: {
        overview: 'A full-stack enrollment management system for educational institutions with complete CRUD operations.',
        features: ['Student registration', 'Course management', 'Payment tracking', 'Admin dashboard'],
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
        achievement: '📚 Academic Project - High Distinction'
      }
    },
    {
      title: 'Sales Tracking with Analytics',
      description: 'Data analytics dashboard for tracking company sales performance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Python', 'Data Analysis', 'Charts'],
      gradient: 'from-primary-600 to-purple-600',
      hasContent: false,
      details: {
        overview: 'A data-driven analytics platform that visualizes sales metrics and provides actionable business insights.',
        features: ['Real-time analytics', 'Interactive charts', 'Export reports', 'Trend forecasting'],
        technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
        achievement: '📊 Data Visualization Excellence'
      }
    },
    {
      title: 'GOVID System',
      description: 'Government ID management system with secure authentication.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tags: ['Java', 'Security', 'Authentication'],
      gradient: 'from-purple-600 to-secondary-500',
      hasContent: false,
      details: {
        overview: 'A secure government ID management system with role-based access control and encrypted data storage.',
        features: ['Secure authentication', 'Role-based access', 'Data encryption', 'Audit logging'],
        technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT'],
        achievement: '🔒 Security-First Design'
      }
    },
  ]

  // Get all unique tags for filtering
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

  // Filter projects based on selected tag
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedFilter))

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Academic and professional projects</p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <FaFilter className="text-primary-600 dark:text-primary-400 mt-2" />
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(tag)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${ 
                selectedFilter === tag
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable Details */}
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                        <div className="mb-3">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Overview</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{project.details.overview}</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Key Features</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            {project.details.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary-600 dark:text-primary-400 mr-2">\u2022</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.details.technologies.map((tech, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-3 rounded-lg">
                          <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">{project.details.achievement}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Toggle Details Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  {expandedProject === index ? (
                    <>
                      Hide Details <FaChevronUp />
                    </>
                  ) : (
                    <>
                      View Details <FaChevronDown />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
