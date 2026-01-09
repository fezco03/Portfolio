# 🎯 Compact Holographic Components - Quick Reference

Ultra-lightweight CSS-based holographic effects for buttons, cards, and UI elements.
**No Three.js required** - perfect for performance-critical sections!

---

## 🚀 Quick Usage

### Import Components

```jsx
import CompactHolographicGradient, {
  HolographicButton,
  HolographicCard,
  HolographicBorder,
  HolographicText,
  HolographicDivider
} from './components/CompactHolographicGradient'
```

---

## 📦 Ready-to-Use Components

### 1. HolographicButton

```jsx
// Basic usage
<HolographicButton onClick={() => alert('Clicked!')}>
  Click Me
</HolographicButton>

// With custom mode
<HolographicButton mode="neon" className="text-lg">
  Neon Button
</HolographicButton>

// Different modes
<HolographicButton mode="cyberpunk">Cyberpunk</HolographicButton>
<HolographicButton mode="plasma">Plasma</HolographicButton>
<HolographicButton mode="aurora">Aurora</HolographicButton>
<HolographicButton mode="neon">Neon</HolographicButton>
<HolographicButton mode="crystal">Crystal</HolographicButton>
```

**Props:**
- `mode`: 'cyberpunk' | 'plasma' | 'aurora' | 'neon' | 'crystal'
- `onClick`: Click handler
- `className`: Additional CSS classes
- All standard button props

---

### 2. HolographicCard

```jsx
// Basic card
<HolographicCard>
  <h3 className="text-xl font-bold text-white mb-2">Feature Title</h3>
  <p className="text-gray-300">Feature description here...</p>
</HolographicCard>

// Custom styling
<HolographicCard 
  mode="plasma" 
  className="w-64"
  contentClassName="p-8"
>
  <img src="icon.png" alt="Icon" className="w-12 h-12 mb-4" />
  <h4 className="text-white font-bold">Service Name</h4>
  <p className="text-gray-400 text-sm mt-2">Details...</p>
</HolographicCard>

// Grid of cards
<div className="grid grid-cols-3 gap-6">
  {services.map(service => (
    <HolographicCard key={service.id} mode="aurora">
      <h3 className="text-white font-bold">{service.title}</h3>
      <p className="text-gray-300 text-sm">{service.desc}</p>
    </HolographicCard>
  ))}
</div>
```

**Props:**
- `mode`: Color scheme
- `className`: Container classes
- `contentClassName`: Inner content classes
- `children`: Card content

---

### 3. HolographicBorder

```jsx
// Bordered container
<HolographicBorder mode="cyberpunk">
  <div className="p-6">
    <h3 className="text-white">Content with holographic border</h3>
  </div>
</HolographicBorder>

// Custom border width
<HolographicBorder borderWidth={3} mode="neon">
  <div className="p-8 bg-gray-800">
    <p className="text-white">Thick neon border</p>
  </div>
</HolographicBorder>

// Image frame
<HolographicBorder mode="crystal" borderWidth={4}>
  <img src="profile.jpg" alt="Profile" className="w-full" />
</HolographicBorder>
```

**Props:**
- `mode`: Color scheme
- `borderWidth`: Border thickness in pixels (default: 2)
- `className`: Container classes
- `contentClassName`: Inner content classes

---

### 4. HolographicText

```jsx
// Gradient text
<HolographicText>
  Holographic Title
</HolographicText>

// Heading
<HolographicText as="h1" className="text-5xl font-bold">
  Welcome to the Future
</HolographicText>

// Inline text
<p className="text-gray-400">
  Check out our <HolographicText>amazing feature</HolographicText> today!
</p>

// Different modes
<HolographicText mode="cyberpunk" as="h2" className="text-3xl">
  Cyberpunk Heading
</HolographicText>
```

**Props:**
- `mode`: Color scheme
- `as`: HTML element (default: 'span')
- `className`: Additional classes

---

### 5. HolographicDivider

```jsx
// Section divider
<section>
  <h2>Section One</h2>
  <p>Content...</p>
</section>

<HolographicDivider mode="plasma" height={3} className="my-12" />

<section>
  <h2>Section Two</h2>
  <p>Content...</p>
</section>

// Thin divider
<HolographicDivider height={1} mode="aurora" />

// Thick divider
<HolographicDivider height={5} mode="cyberpunk" className="my-8" />
```

**Props:**
- `mode`: Color scheme
- `height`: Divider height in pixels (default: 2)
- `className`: Additional classes

---

### 6. CompactHolographicGradient (Base Component)

```jsx
// Custom background
<div className="relative h-64 rounded-xl overflow-hidden">
  <CompactHolographicGradient
    mode="plasma"
    intensity={1.2}
    speed="normal"
    blur={40}
  />
  <div className="relative z-10 flex items-center justify-center h-full">
    <h2 className="text-white text-3xl font-bold">Your Content</h2>
  </div>
</div>

// As container background
<div className="relative p-8">
  <CompactHolographicGradient
    mode="cyberpunk"
    intensity={0.8}
    speed="slow"
    blur={60}
  />
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>
```

**Props:**
- `mode`: 'cyberpunk' | 'plasma' | 'aurora' | 'neon' | 'crystal'
- `intensity`: Brightness (0.5 - 2.0, default: 1)
- `speed`: 'slow' | 'normal' | 'fast' (default: 'normal')
- `blur`: Blur amount in pixels (default: 40)
- `className`: Container classes
- `children`: Optional content

---

## 🎨 Real-World Examples

### Call-to-Action Section

```jsx
function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <HolographicText as="h2" className="text-5xl font-bold mb-6">
          Ready to Get Started?
        </HolographicText>
        
        <p className="text-gray-400 text-lg mb-8">
          Join thousands of satisfied users today
        </p>
        
        <HolographicButton mode="cyberpunk" className="text-xl px-12 py-5">
          Start Free Trial
        </HolographicButton>
      </div>
    </section>
  )
}
```

### Feature Cards Grid

```jsx
function Features() {
  const features = [
    { title: 'Fast', icon: '⚡', desc: 'Lightning-fast performance' },
    { title: 'Secure', icon: '🔒', desc: 'Bank-level security' },
    { title: 'Scalable', icon: '📈', desc: 'Grows with you' },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <HolographicCard 
          key={i} 
          mode={['cyberpunk', 'plasma', 'aurora'][i]}
          className="transition-transform hover:scale-105"
        >
          <div className="text-6xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-300">{feature.desc}</p>
        </HolographicCard>
      ))}
    </div>
  )
}
```

### Profile Card with Border

```jsx
function ProfileCard({ user }) {
  return (
    <HolographicBorder mode="crystal" borderWidth={3}>
      <div className="bg-gray-900 p-8 text-center">
        <img 
          src={user.avatar} 
          alt={user.name}
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <HolographicText as="h3" className="text-2xl font-bold mb-2">
          {user.name}
        </HolographicText>
        <p className="text-gray-400 mb-4">{user.role}</p>
        <HolographicButton mode="neon">
          View Profile
        </HolographicButton>
      </div>
    </HolographicBorder>
  )
}
```

### Stats Counter

```jsx
function StatsSection() {
  const stats = [
    { value: '10K+', label: 'Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '50+', label: 'Countries' },
  ]

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="relative">
          <HolographicDivider height={4} mode="cyberpunk" />
          <div className="text-center py-6">
            <HolographicText as="div" className="text-4xl font-bold mb-2">
              {stat.value}
            </HolographicText>
            <p className="text-gray-400">{stat.label}</p>
          </div>
          <HolographicDivider height={4} mode="cyberpunk" />
        </div>
      ))}
    </div>
  )
}
```

### Pricing Table

```jsx
function PricingCard({ plan }) {
  return (
    <HolographicCard 
      mode={plan.featured ? 'cyberpunk' : 'plasma'}
      className={plan.featured ? 'transform scale-110' : ''}
    >
      {plan.featured && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
          Popular
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
      
      <HolographicText as="div" className="text-5xl font-bold mb-6">
        ${plan.price}
        <span className="text-lg text-gray-400">/mo</span>
      </HolographicText>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <li key={i} className="text-gray-300">✓ {feature}</li>
        ))}
      </ul>
      
      <HolographicButton mode="neon" className="w-full">
        Choose Plan
      </HolographicButton>
    </HolographicCard>
  )
}
```

### Navigation Menu

```jsx
function Navigation() {
  const [activeTab, setActiveTab] = useState('home')
  const tabs = ['home', 'about', 'services', 'contact']

  return (
    <nav className="flex gap-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative px-6 py-3 text-white capitalize"
        >
          {activeTab === tab && (
            <div className="absolute inset-0">
              <CompactHolographicGradient
                mode="cyberpunk"
                intensity={1.5}
                speed="fast"
                blur={20}
              />
            </div>
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </nav>
  )
}
```

---

## ⚡ Performance Tips

### Optimized for Speed
- **No WebGL/Three.js** - pure CSS
- **No JavaScript animations** - CSS keyframes
- **Minimal DOM** - single container
- **Hardware accelerated** - GPU transforms

### Best Practices

```jsx
// ✅ Good: Moderate blur for smooth animation
<CompactHolographicGradient blur={40} />

// ❌ Avoid: Very high blur can impact performance
<CompactHolographicGradient blur={200} />

// ✅ Good: Reasonable intensity
<CompactHolographicGradient intensity={1.2} />

// ❌ Avoid: Excessive intensity wastes GPU
<CompactHolographicGradient intensity={5.0} />
```

---

## 🎨 Customization

### Custom Color Modes

Edit `CompactHolographicGradient.jsx`:

```jsx
const colorSchemes = {
  // ... existing modes
  
  // Add your custom mode
  sunset: {
    colors: ['#FF6B6B', '#FFD93D', '#6BCF7F', '#4ECDC4', '#45B7D1'],
    positions: ['0%', '25%', '50%', '75%', '100%']
  }
}
```

Then use it:

```jsx
<HolographicButton mode="sunset">
  Sunset Button
</HolographicButton>
```

---

## 📊 Component Comparison

| Component | Best For | Performance | Complexity |
|-----------|----------|-------------|------------|
| HolographicButton | CTAs, actions | ⚡⚡⚡ Excellent | Simple |
| HolographicCard | Features, services | ⚡⚡⚡ Excellent | Simple |
| HolographicBorder | Images, highlights | ⚡⚡⚡ Excellent | Simple |
| HolographicText | Headings, emphasis | ⚡⚡⚡ Excellent | Simple |
| HolographicDivider | Section breaks | ⚡⚡⚡ Excellent | Simple |
| CompactHolographic | Custom backgrounds | ⚡⚡⚡ Excellent | Moderate |

vs.

| Component | Best For | Performance | Complexity |
|-----------|----------|-------------|------------|
| AdvancedHolographic | Full sections, hero | ⚡⚡ Good | Advanced |
| HolographicShader | Large backgrounds | ⚡⚡ Good | Advanced |

---

## 🚀 Migration Guide

### From AdvancedHolographicGradient to Compact

**Before (Heavy):**
```jsx
<div className="absolute inset-0">
  <AdvancedHolographicGradient
    mode="cyberpunk"
    intensity={1.2}
    speed={0.3}
  />
</div>
```

**After (Lightweight):**
```jsx
<CompactHolographicGradient
  mode="cyberpunk"
  intensity={1.2}
  speed="normal"
/>
```

**Benefits:**
- 🚀 50-70% smaller bundle size
- ⚡ No Three.js dependencies
- 📱 Better mobile performance
- 🎯 Simpler API

---

## 💡 When to Use Each

### Use Compact Components When:
- Building buttons, cards, small UI elements
- Performance is critical
- Mobile optimization needed
- Simple animations sufficient
- No Three.js in project

### Use Advanced Components When:
- Large hero sections
- Full-screen backgrounds
- Need 3D distortion effects
- Want maximum visual impact
- Three.js already in bundle

---

## ✅ Complete Example

```jsx
import {
  HolographicButton,
  HolographicCard,
  HolographicBorder,
  HolographicText,
  HolographicDivider
} from './components/CompactHolographicGradient'

function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      {/* Hero */}
      <section className="text-center py-20">
        <HolographicText as="h1" className="text-6xl font-bold mb-6">
          John Doe
        </HolographicText>
        <p className="text-gray-400 text-xl mb-8">
          Full-Stack Developer
        </p>
        <HolographicButton mode="cyberpunk">
          View My Work
        </HolographicButton>
      </section>

      <HolographicDivider mode="plasma" height={3} className="my-16" />

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {['Web Dev', 'Design', 'Cloud'].map((skill, i) => (
          <HolographicCard key={i} mode="aurora">
            <h3 className="text-2xl font-bold text-white mb-4">{skill}</h3>
            <p className="text-gray-300">Expert level proficiency</p>
          </HolographicCard>
        ))}
      </section>

      <HolographicDivider mode="neon" height={3} className="my-16" />

      {/* Profile */}
      <section className="max-w-md mx-auto">
        <HolographicBorder mode="crystal" borderWidth={3}>
          <div className="bg-gray-900 p-8 text-center">
            <img 
              src="/avatar.jpg" 
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-white text-2xl font-bold">Get in Touch</h2>
            <HolographicButton mode="plasma" className="mt-4">
              Contact Me
            </HolographicButton>
          </div>
        </HolographicBorder>
      </section>
    </div>
  )
}

export default Portfolio
```

---

**Built for performance and visual impact! 🚀✨**
