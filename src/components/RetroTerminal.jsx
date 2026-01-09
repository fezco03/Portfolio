import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import VirusPrank from './VirusPrank'

const RetroTerminal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [showVirusPrank, setShowVirusPrank] = useState(false)
  const inputRef = useRef(null)

  const commands = {
    help: () => [
      'Available commands:',
      '  help - Show this help message',
      '  about - Learn about me',
      '  skills - List my skills',
      '  projects - View my projects',
      '  contact - Get contact info',
      '  joke - Hear a developer joke',
      '  matrix - Enter the Matrix',
      '  clear - Clear terminal',
      '  secret - ???',
      ''
    ],
    about: () => [
      'Joshua Lopez - Full Stack Developer',
      'Computer Science Graduate (Cum Laude)',
      'Passionate about creating amazing web experiences!',
      ''
    ],
    skills: () => [
      'Frontend: React, JavaScript, Tailwind CSS',
      'Backend: PHP, MySQL, Java',
      'Other: Python, Unity, AR Development',
      ''
    ],
    projects: () => [
      '🚀 Altora: AR Solar System (Award Winner)',
      '🎬 Blvck Entertainment Website',
      '🎓 STI Enrollment System',
      '📊 Sales Analytics Dashboard',
      ''
    ],
    contact: () => [
      '📧 Email: Available on contact section',
      '💼 Check out the Contact section for more!',
      ''
    ],
    joke: () => {
      // Trigger virus prank!
      setTimeout(() => setShowVirusPrank(true), 500)
      
      const jokes = [
        'Why do programmers prefer dark mode? Because light attracts bugs! 🐛',
        'How many programmers does it take to change a light bulb? None, that\'s a hardware problem! 💡',
        'Why do Java developers wear glasses? Because they don\'t C#! 👓',
        'What\'s a programmer\'s favorite hangout place? Foo Bar! 🍺',
        'Why did the developer go broke? Because he used up all his cache! 💸',
      ]
      return [jokes[Math.floor(Math.random() * jokes.length)], '']
    },
    matrix: () => {
      setTimeout(() => {
        document.body.style.color = '#00ff00'
        document.body.style.backgroundColor = '#000'
        setTimeout(() => {
          document.body.style.color = ''
          document.body.style.backgroundColor = ''
        }, 3000)
      }, 100)
      return ['Entering the Matrix...', 'Reality is a simulation! 🟢', '']
    },
    clear: () => {
      setHistory([])
      return []
    },
    secret: () => [
      '🎉 You found the secret command!',
      'You are now officially a 1337 h4x0r!',
      'Here\'s a cookie: 🍪',
      ''
    ],
    ls: () => ['portfolio.jsx', 'skills.json', 'projects.md', 'resume.pdf', ''],
    pwd: () => ['/home/joshua/portfolio', ''],
    whoami: () => ['joshua-lopez', ''],
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open terminal with Ctrl + `
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault()
        setIsOpen(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    setCommandHistory(prev => [...prev, cmd])
    setHistoryIndex(-1)

    const output = commands[trimmedCmd] 
      ? commands[trimmedCmd]() 
      : [`Command not found: ${cmd}`, 'Type "help" for available commands', '']

    setHistory(prev => [
      ...prev,
      { type: 'input', text: `$ ${cmd}` },
      ...output.map(line => ({ type: 'output', text: line }))
    ])

    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        handleCommand(input)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex)
          setInput(commandHistory[commandHistory.length - 1 - newIndex])
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-gray-900 text-green-400 p-3 rounded-lg shadow-lg border border-green-500 hover:bg-gray-800 transition-colors"
        title="Open Terminal (Ctrl + `)"
      >
        <span className="font-mono text-sm">{'>'}_</span>
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-4 bottom-4 md:left-auto md:right-4 md:w-[600px] h-[400px] z-[9999] bg-gray-900 rounded-lg shadow-2xl border border-green-500 overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-green-500">
              <span className="text-green-400 font-mono text-sm">joshua@portfolio:~$</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-500 hover:text-red-400 font-bold"
              >
                ✕
              </button>
            </div>

            {/* Terminal Content */}
            <div className="p-4 h-[calc(100%-40px)] overflow-y-auto font-mono text-sm">
              <div className="text-green-400 mb-2">
                Welcome to Joshua's Portfolio Terminal v1.0
                <br />
                Type 'help' for available commands
                <br />
                <br />
              </div>

              {history.map((line, i) => (
                <div
                  key={i}
                  className={line.type === 'input' ? 'text-green-400 font-bold' : 'text-green-300'}
                >
                  {line.text}
                </div>
              ))}

              {/* Input Line */}
              <div className="flex items-center mt-2">
                <span className="text-green-400 mr-2">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-green-400 outline-none font-mono caret-green-400"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Virus Prank Popup */}
      <VirusPrank 
        isActive={showVirusPrank} 
        onClose={() => setShowVirusPrank(false)} 
      />
    </>
  )
}

export default RetroTerminal
