import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '5', label: 'Projects Completed', suffix: '+' },
    { number: '2024', label: 'OJT at Blvck Entertainment', suffix: '' },
    { number: '10', label: 'Technologies Learned', suffix: '+' },
    { number: 'Cum Laude', label: 'Graduate', suffix: '' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-secondary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}{stat.suffix}
                </h3>
                <p className="text-white/80 text-sm sm:text-base md:text-lg">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
