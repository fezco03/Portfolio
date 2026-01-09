/**
 * 🌈 Holographic Effects - Quick Integration Helpers
 * 
 * Copy-paste ready snippets for common use cases
 * All components are already imported and ready to use
 */

import AdvancedHolographicGradient from './AdvancedHolographicGradient'
import HolographicShader from './HolographicShader'
import CompactHolographicGradient, {
  HolographicButton,
  HolographicCard,
  HolographicBorder,
  HolographicText,
  HolographicDivider
} from './CompactHolographicGradient'

// ============================================
// 🎯 HERO SECTION PATTERNS
// ============================================

/**
 * Full-screen hero with holographic background
 */
export const HeroWithHologram = ({ title, subtitle, ctaText, onCTAClick }) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Holographic Background */}
    <div className="absolute inset-0 opacity-40">
      <AdvancedHolographicGradient
        mode="cyberpunk"
        intensity={1.5}
        speed={0.3}
        distortion={0.3}
        scale={3}
      />
    </div>
    
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/30" />
    
    {/* Content */}
    <div className="relative z-10 text-center px-4">
      <HolographicText as="h1" className="text-6xl md:text-7xl font-bold mb-6">
        {title}
      </HolographicText>
      <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <HolographicButton mode="neon" onClick={onCTAClick} className="text-xl px-12 py-5">
        {ctaText}
      </HolographicButton>
    </div>
  </section>
)

// ============================================
// 📦 FEATURE CARDS PATTERNS
// ============================================

/**
 * Three-column feature grid with different holographic modes
 */
export const FeatureGrid = ({ features }) => (
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
    {features.map((feature, index) => {
      const modes = ['cyberpunk', 'plasma', 'aurora']
      return (
        <HolographicCard 
          key={index}
          mode={modes[index % 3]}
          className="transition-transform hover:scale-105 cursor-pointer"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </HolographicCard>
      )
    })}
  </div>
)

// ============================================
// 🖼️ IMAGE/PROFILE PATTERNS
// ============================================

/**
 * Profile card with holographic border
 */
export const ProfileCard = ({ image, name, role, bio, onContact }) => (
  <div className="max-w-md mx-auto">
    <HolographicBorder mode="crystal" borderWidth={3}>
      <div className="bg-gray-900 p-8">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
        />
        <HolographicText as="h2" className="text-3xl font-bold text-center mb-2">
          {name}
        </HolographicText>
        <p className="text-gray-400 text-center mb-4">{role}</p>
        {bio && <p className="text-gray-300 text-sm mb-6">{bio}</p>}
        <HolographicButton mode="plasma" onClick={onContact} className="w-full">
          Contact Me
        </HolographicButton>
      </div>
    </HolographicBorder>
  </div>
)

// ============================================
// 📊 STATS/METRICS PATTERNS
// ============================================

/**
 * Stats counter with holographic dividers
 */
export const StatsSection = ({ stats }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
    {stats.map((stat, index) => (
      <div key={index} className="text-center">
        <HolographicDivider height={3} mode="cyberpunk" className="mb-6" />
        <HolographicText as="div" className="text-5xl font-bold mb-2">
          {stat.value}
        </HolographicText>
        <p className="text-gray-400 text-sm uppercase tracking-wider">
          {stat.label}
        </p>
        <HolographicDivider height={3} mode="cyberpunk" className="mt-6" />
      </div>
    ))}
  </div>
)

// ============================================
// 🎨 SECTION BACKGROUND PATTERNS
// ============================================

/**
 * Section with subtle holographic background
 */
export const HolographicSection = ({ 
  children, 
  mode = 'plasma',
  opacity = 0.2,
  className = '' 
}) => (
  <section className={`relative py-20 overflow-hidden ${className}`}>
    {/* Holographic Background */}
    <div className={`absolute inset-0 opacity-${Math.round(opacity * 100)}`}>
      <AdvancedHolographicGradient
        mode={mode}
        intensity={1.0}
        speed={0.2}
        distortion={0.2}
        scale={3}
      />
    </div>
    
    {/* Content */}
    <div className="relative z-10">
      {children}
    </div>
  </section>
)

// ============================================
// 💬 TESTIMONIAL/QUOTE PATTERNS
// ============================================

/**
 * Testimonial card with holographic accent
 */
export const TestimonialCard = ({ quote, author, role, image }) => (
  <HolographicCard mode="aurora" className="max-w-2xl mx-auto">
    <div className="flex items-start gap-4">
      {image && (
        <img
          src={image}
          alt={author}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
        />
      )}
      <div>
        <p className="text-gray-300 italic text-lg mb-4">"{quote}"</p>
        <HolographicText className="font-bold">
          {author}
        </HolographicText>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </HolographicCard>
)

// ============================================
// 🔘 BUTTON VARIANTS
// ============================================

/**
 * Button group with different holographic modes
 */
export const HolographicButtonGroup = ({ buttons }) => (
  <div className="flex flex-wrap gap-4 justify-center">
    {buttons.map((button, index) => (
      <HolographicButton
        key={index}
        mode={button.mode || 'cyberpunk'}
        onClick={button.onClick}
        className={button.className}
      >
        {button.label}
      </HolographicButton>
    ))}
  </div>
)

// ============================================
// 📋 PRICING TABLE PATTERN
// ============================================

/**
 * Pricing card with holographic styling
 */
export const PricingCard = ({ 
  plan, 
  price, 
  features, 
  featured = false,
  onSelect 
}) => (
  <HolographicCard 
    mode={featured ? 'cyberpunk' : 'plasma'}
    className={`relative ${featured ? 'transform scale-105 shadow-2xl' : ''}`}
  >
    {featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
          Most Popular
        </div>
      </div>
    )}
    
    <div className="text-center">
      <h3 className="text-2xl font-bold text-white mb-4">{plan}</h3>
      
      <HolographicText as="div" className="text-6xl font-bold mb-6">
        ${price}
        <span className="text-lg text-gray-400">/mo</span>
      </HolographicText>
      
      <ul className="space-y-3 mb-8 text-left">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className="text-green-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      
      <HolographicButton 
        mode={featured ? 'neon' : 'plasma'}
        onClick={onSelect}
        className="w-full"
      >
        Select Plan
      </HolographicButton>
    </div>
  </HolographicCard>
)

// ============================================
// 🎯 PROJECT SHOWCASE PATTERN
// ============================================

/**
 * Project card with holographic border and hover effect
 */
export const ProjectCard = ({ 
  image, 
  title, 
  description, 
  tags, 
  onView 
}) => (
  <div className="group">
    <HolographicBorder mode="neon" borderWidth={2}>
      <div className="bg-gray-900 overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        
        {/* Project Info */}
        <div className="p-6">
          <HolographicText as="h3" className="text-xl font-bold mb-2">
            {title}
          </HolographicText>
          <p className="text-gray-400 text-sm mb-4">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <HolographicButton mode="crystal" onClick={onView} className="w-full">
            View Project
          </HolographicButton>
        </div>
      </div>
    </HolographicBorder>
  </div>
)

// ============================================
// 📝 CONTACT FORM PATTERN
// ============================================

/**
 * Contact section with holographic background
 */
export const ContactSection = ({ onSubmit }) => (
  <section className="relative py-20 overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 opacity-30">
      <AdvancedHolographicGradient
        mode="aurora"
        intensity={1.2}
        speed={0.25}
        distortion={0.3}
      />
    </div>
    
    {/* Content */}
    <div className="relative z-10 max-w-2xl mx-auto px-4">
      <HolographicText as="h2" className="text-5xl font-bold text-center mb-12">
        Get In Touch
      </HolographicText>
      
      <HolographicCard mode="cyberpunk">
        <form onSubmit={onSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          />
          <HolographicButton type="submit" mode="neon" className="w-full">
            Send Message
          </HolographicButton>
        </form>
      </HolographicCard>
    </div>
  </section>
)

// ============================================
// 🎪 EXPORTS
// ============================================

export default {
  // Components
  AdvancedHolographicGradient,
  HolographicShader,
  CompactHolographicGradient,
  HolographicButton,
  HolographicCard,
  HolographicBorder,
  HolographicText,
  HolographicDivider,
  
  // Patterns
  HeroWithHologram,
  FeatureGrid,
  ProfileCard,
  StatsSection,
  HolographicSection,
  TestimonialCard,
  HolographicButtonGroup,
  PricingCard,
  ProjectCard,
  ContactSection,
}
