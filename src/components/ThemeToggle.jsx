import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaFire, FaSnowflake } from 'react-icons/fa'

const ThemeToggle = ({ darkMode, toggleDarkMode, effectType, toggleEffect }) => {
  return (
    <>
      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDarkMode}
        className="fixed top-20 right-8 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode ? (
            <FaSun className="text-yellow-500 text-xl" />
          ) : (
            <FaMoon className="text-gray-700 text-xl" />
          )}
        </motion.div>
      </motion.button>

      {/* Effect Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleEffect}
        className="fixed top-36 right-8 z-50 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center transition-colors"
        title={`Switch to ${effectType === 'fire' ? 'snow' : 'fire'} effect`}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {effectType === 'fire' ? (
            <FaFire className="text-orange-500 text-xl" />
          ) : (
            <FaSnowflake className="text-blue-400 text-xl" />
          )}
        </motion.div>
      </motion.button>
    </>
  )
}

export default ThemeToggle
