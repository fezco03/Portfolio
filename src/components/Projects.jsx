import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt } from 'react-icons/fa'
import confetti from 'canvas-confetti'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Altora: AR Solar System',
      description: 'Award-winning capstone project exploring the solar system through augmented reality.',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&h=400&fit=crop',
      tags: ['AR', 'Unity', 'Award Winner'],
      gradient: 'from-primary-500 to-secondary-500'
    },
    {
      title: 'Blvck Entertainment Website',
      description: 'Production company website with responsive UI and modern design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React.js', 'Tailwind', 'Production'],
      gradient: 'from-secondary-500 to-accent-500',
      link: 'https://blvckentertainment.com.ph/'
    },
    {
      title: 'STI Enrollment System',
      description: 'Comprehensive enrollment management system with database integration.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      tags: ['PHP', 'MySQL', 'CRUD'],
      gradient: 'from-accent-500 to-primary-500'
    },
    {
      title: 'Sales Tracking with Analytics',
      description: 'Data analytics dashboard for tracking company sales performance.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tags: ['Python', 'Data Analysis', 'Charts'],
      gradient: 'from-primary-600 to-purple-600'
    },
    {
      title: 'GOVID System',
      description: 'Government ID management system with secure authentication.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tags: ['Java', 'Security', 'Authentication'],
      gradient: 'from-purple-600 to-secondary-500'
    },
  ]

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center`}
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.link || "#"}
                    target={project.link ? "_blank" : "_self"}
                    rel={project.link ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      // Confetti celebration on project click
                      const rect = e.currentTarget.getBoundingClientRect()
                      const x = (rect.left + rect.width / 2) / window.innerWidth
                      const y = (rect.top + rect.height / 2) / window.innerHeight
                      
                      confetti({
                        particleCount: 50,
                        spread: 60,
                        origin: { x, y },
                        colors: ['#667eea', '#764ba2', '#f093fb', '#4facfe']
                      })
                    }}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base"
                  >
                    View Project <FaExternalLinkAlt />
                  </motion.a>
                </motion.div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
