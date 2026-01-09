import { useState } from 'react'
import { motion } from 'framer-motion'
import HolographicShader from './HolographicShader'
import AdvancedHolographicGradient from './AdvancedHolographicGradient'

/**
 * Holographic Gradient Showcase Component
 * 
 * This component demonstrates both implementations:
 * 1. ShaderGradient-based (uses @shadergradient/react library)
 * 2. Custom GLSL shader (pure Three.js implementation)
 * 
 * Usage Examples Included Below
 */

const HolographicShowcase = () => {
  const [activeMode, setActiveMode] = useState('cyberpunk')
  const [activeImplementation, setActiveImplementation] = useState('custom') // 'library' or 'custom'

  const modes = [
    { id: 'cyberpunk', label: 'Cyberpunk', description: 'Cyan/Magenta neon vibes' },
    { id: 'plasma', label: 'Plasma', description: 'Purple/Pink energy field' },
    { id: 'aurora', label: 'Aurora', description: 'Northern lights inspired' },
    { id: 'neon', label: 'Neon', description: 'High-energy retro colors' },
    { id: 'crystal', label: 'Crystal', description: 'Prismatic gem-like tones' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
          🌈 Holographic Shader Gradient Showcase
        </h1>
        <p className="text-gray-400 text-lg">
          Advanced WebGL shader implementation with iridescent, chromatic, and holographic effects
        </p>
      </div>

      {/* Implementation Selector */}
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setActiveImplementation('library')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeImplementation === 'library'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            📦 ShaderGradient Library
          </button>
          <button
            onClick={() => setActiveImplementation('custom')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeImplementation === 'custom'
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            ✨ Custom GLSL Shaders
          </button>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {modes.map((mode) => (
            <motion.button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-4 rounded-xl transition-all ${
                activeMode === mode.id
                  ? 'bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border-2 border-cyan-400'
                  : 'bg-gray-800 border-2 border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className="text-lg font-bold mb-1">{mode.label}</div>
              <div className="text-xs text-gray-400">{mode.description}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Display Area */}
      <div className="max-w-6xl mx-auto">
        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-black/50 backdrop-blur-sm border border-gray-800">
          {activeImplementation === 'library' ? (
            <HolographicShader
              containerClassName="w-full h-full"
              hologramMode={activeMode}
              intensity={1.2}
              animationSpeed={0.3}
            />
          ) : (
            <AdvancedHolographicGradient
              mode={activeMode}
              intensity={1.2}
              speed={0.3}
              distortion={0.3}
              scale={2.5}
              containerClassName="w-full h-full"
            />
          )}

          {/* Info Overlay */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md p-4 rounded-lg border border-gray-700">
            <div className="text-sm text-cyan-400 font-mono">
              Implementation: {activeImplementation === 'library' ? '@shadergradient/react' : 'Custom GLSL'}
            </div>
            <div className="text-sm text-purple-400 font-mono">
              Mode: {modes.find(m => m.id === activeMode)?.label}
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6">📝 Usage Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1: Library Implementation */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">1. ShaderGradient Library (Quick Setup)</h3>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">{`import HolographicShader from './components/HolographicShader'

function Hero() {
  return (
    <div className="relative h-screen">
      <HolographicShader
        containerClassName="w-full h-full"
        hologramMode="cyberpunk" // cyberpunk, plasma, aurora
        intensity={1.2}
        animationSpeed={0.3}
      />
      <div className="relative z-10">
        {/* Your content here */}
      </div>
    </div>
  )
}`}</code>
            </pre>
          </div>

          {/* Example 2: Custom GLSL */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-3 text-purple-400">2. Custom GLSL Shaders (Advanced)</h3>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">{`import AdvancedHolographicGradient from './components/AdvancedHolographicGradient'

function About() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 opacity-30">
        <AdvancedHolographicGradient
          mode="plasma" // cyberpunk, plasma, aurora, neon, crystal
          intensity={1.2}
          speed={0.3}
          distortion={0.3}
          scale={2.5}
          cameraPosition={[0, 0, 5]}
        />
      </div>
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </section>
  )
}`}</code>
            </pre>
          </div>

          {/* Example 3: Background Effect */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-3 text-pink-400">3. Background Effect with Content</h3>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">{`function FeatureCard() {
  return (
    <div className="relative p-8 rounded-2xl overflow-hidden">
      {/* Holographic background */}
      <div className="absolute inset-0 opacity-20">
        <HolographicShader
          hologramMode="aurora"
          intensity={1.5}
          animationSpeed={0.2}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold">Amazing Feature</h3>
        <p>With holographic flair!</p>
      </div>
    </div>
  )
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Props Documentation */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6">⚙️ Props & Customization</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* HolographicShader Props */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">HolographicShader Props</h3>
            <div className="space-y-3 text-sm">
              <div><code className="text-purple-400">containerClassName</code> - CSS classes for wrapper</div>
              <div><code className="text-purple-400">hologramMode</code> - 'cyberpunk' | 'plasma' | 'aurora'</div>
              <div><code className="text-purple-400">intensity</code> - Brightness (0.5 - 2.0)</div>
              <div><code className="text-purple-400">animationSpeed</code> - Animation speed (0.1 - 1.0)</div>
            </div>
          </div>

          {/* AdvancedHolographicGradient Props */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-purple-400">AdvancedHolographicGradient Props</h3>
            <div className="space-y-3 text-sm">
              <div><code className="text-cyan-400">mode</code> - 'cyberpunk' | 'plasma' | 'aurora' | 'neon' | 'crystal'</div>
              <div><code className="text-cyan-400">intensity</code> - Color intensity (0.5 - 2.0)</div>
              <div><code className="text-cyan-400">speed</code> - Animation speed (0.1 - 1.0)</div>
              <div><code className="text-cyan-400">distortion</code> - Noise distortion (0.0 - 1.0)</div>
              <div><code className="text-cyan-400">scale</code> - Sphere size (1.0 - 5.0)</div>
              <div><code className="text-cyan-400">cameraPosition</code> - [x, y, z] array</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features List */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold mb-6">✨ Features Implemented</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            '🎨 Multi-stop gradient blending (5 colors)',
            '🌈 Iridescent chromatic shifting',
            '👁️ Fresnel-based view-dependent effects',
            '⚡ Time-based fluid animations',
            '🔊 Simplex noise modulation',
            '💎 Holographic scan lines',
            '✨ Additive rim lighting/glow',
            '🎯 Performance-optimized shaders',
            '🎮 Interactive mode switching',
            '🔧 Fully customizable parameters',
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HolographicShowcase
