import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaLaptopCode, FaDatabase, FaPalette } from 'react-icons/fa'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      gradient: 'from-primary-600 to-secondary-500',
      skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      icon: FaLaptopCode,
      title: 'Programming Languages',
      gradient: 'from-secondary-500 to-primary-600',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Java', level: 80 },
        { name: 'C#', level: 75 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      icon: FaDatabase,
      title: 'Database & Tools',
      gradient: 'from-primary-600 to-accent-500',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'XAMPP', level: 80 },
        { name: 'Microsoft Office', level: 90 },
        { name: 'React Native', level: 75 },
      ]
    },
    {
      icon: FaPalette,
      title: 'Design & Support',
      gradient: 'from-accent-500 to-secondary-500',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 85 },
        { name: 'Technical Support', level: 90 },
        { name: 'Team Collaboration', level: 90 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Technologies I work with on a daily basis</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <category.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: (catIndex * 0.1) + (skillIndex * 0.1), duration: 1 }}
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
