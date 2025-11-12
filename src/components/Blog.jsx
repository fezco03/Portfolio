import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaClock, FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const articles = [
    {
      title: 'Getting Started with React in 2025',
      excerpt: 'Learn the fundamentals of React and how to build modern web applications with the latest features.',
      date: 'Nov 10, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      category: 'Tutorial',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tailwind CSS: A Complete Guide',
      excerpt: 'Discover how utility-first CSS can speed up your development workflow and create beautiful designs.',
      date: 'Nov 5, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop',
      category: 'Design',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'My Journey to Cum Laude',
      excerpt: 'Sharing my experiences, challenges, and lessons learned during my IT education journey.',
      date: 'Oct 28, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
      category: 'Personal',
      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Thoughts, tutorials, and insights</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${article.color} text-white text-sm font-semibold rounded-full`}>
                  {article.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <FaClock className="text-xs" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold group-hover:gap-3 transition-all"
                >
                  Read More <FaArrowRight className="text-sm" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            View All Articles
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
