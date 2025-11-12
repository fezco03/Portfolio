import { motion } from 'framer-motion'
import { FaFacebookF, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-3xl font-bold text-gradient"
          >
            JL
          </motion.div>
          
          <div className="flex gap-6">
            <motion.a
              href="https://www.facebook.com/lopez.fezco03/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary-600 transition-all"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="mailto:joshualopez0990@gmail.com"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary-600 transition-all"
            >
              <FaEnvelope />
            </motion.a>
          </div>

          <div className="text-center">
            <p className="text-gray-400 flex items-center gap-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Joshua Lopez
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
