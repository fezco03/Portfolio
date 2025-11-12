import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    // EmailJS configuration
    const serviceID = 'service_portfolio' // You'll need to replace this
    const templateID = 'template_portfolio' // You'll need to replace this
    const publicKey = 'YOUR_PUBLIC_KEY' // You'll need to replace this

    // Send email directly to your Gmail
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'joshualopez0990@gmail.com',
    }

    // Fallback: Use mailto if EmailJS is not configured
    if (serviceID === 'service_portfolio') {
      // Create mailto link
      const mailtoLink = `mailto:joshualopez0990@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      setLoading(false)
      setSubmitted(true)
      
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 3000)
      return
    }

    // Use EmailJS (if configured)
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setLoading(false)
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ name: '', email: '', subject: '', message: '' })
        }, 3000)
      })
      .catch((error) => {
        console.error('Email error:', error)
        setLoading(false)
        setError(true)
        setTimeout(() => setError(false), 3000)
      })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'joshualopez0990@gmail.com',
      link: 'mailto:joshualopez0990@gmail.com',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Philippines',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: FaFacebookF,
      title: 'Social',
      value: 'Facebook',
      link: 'https://www.facebook.com/lopez.fezco03/',
      gradient: 'from-accent-500 to-accent-600'
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4">Let's work together on your next project</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-primary-600 dark:text-primary-400 hover:underline">
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={submitted || loading}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>Sending...</>
              ) : submitted ? (
                <>✓ Message Sent!</>
              ) : error ? (
                <>✗ Failed to send</>
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </motion.button>
            
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-green-600 dark:text-green-400 font-semibold"
              >
                Your email client will open. Thank you for reaching out!
              </motion.p>
            )}
            
            {error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-600 dark:text-red-400 font-semibold"
              >
                Failed to send message. Please try again or email directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
