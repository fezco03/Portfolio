import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

/**
 * Advanced GLSL Holographic Material
 * Pure Three.js implementation with custom vertex and fragment shaders
 * 
 * Features:
 * - 5-color gradient interpolation
 * - Simplex noise for organic distortion
 * - Fresnel-based iridescence
 * - Time-animated chromatic shifting
 * - Additive rim lighting
 * - Holographic scan lines
 */

const HologramMaterial = ({ colors, speed, intensity, distortion }) => {
  const materialRef = useRef()

  // Custom Vertex Shader
  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    uniform float uTime;
    uniform float uDistortion;
    
    // 3D Simplex Noise
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) { 
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      
      // Apply noise distortion
      vec3 pos = position;
      float noise = snoise(pos * 2.0 + uTime * 0.5) * uDistortion;
      pos += normal * noise;
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      vViewPosition = -mvPosition.xyz;
      vPosition = pos;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `

  // Custom Fragment Shader
  const fragmentShader = `
    uniform float uTime;
    uniform float uIntensity;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    uniform vec3 uColor5;
    uniform float uFresnelPower;
    uniform float uGlowIntensity;
    
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vViewPosition;
    
    // Simplex noise (2D version for fragment shader)
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
        + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m;
      m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    // Smooth 5-color gradient interpolation
    vec3 multiColorGradient(float t) {
      // Normalize t to 0-1 range
      t = fract(t);
      
      // Create smooth transitions between 5 colors
      vec3 color;
      if (t < 0.2) {
        color = mix(uColor1, uColor2, t * 5.0);
      } else if (t < 0.4) {
        color = mix(uColor2, uColor3, (t - 0.2) * 5.0);
      } else if (t < 0.6) {
        color = mix(uColor3, uColor4, (t - 0.4) * 5.0);
      } else if (t < 0.8) {
        color = mix(uColor4, uColor5, (t - 0.6) * 5.0);
      } else {
        color = mix(uColor5, uColor1, (t - 0.8) * 5.0);
      }
      
      return color;
    }
    
    void main() {
      // Fresnel effect for view-dependent iridescence
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), uFresnelPower);
      
      // Time-based gradient animation with noise modulation
      float noise1 = snoise(vUv * 3.0 + uTime * 0.2);
      float noise2 = snoise(vUv * 5.0 - uTime * 0.15);
      float gradientTime = vUv.y + uTime * 0.1 + noise1 * 0.3;
      
      // Multi-color gradient
      vec3 baseColor = multiColorGradient(gradientTime);
      
      // Chromatic shifting based on position and time
      float chromaticShift = sin(vPosition.x * 2.0 + uTime) * 0.1;
      vec3 shiftedColor1 = multiColorGradient(gradientTime + chromaticShift);
      vec3 shiftedColor2 = multiColorGradient(gradientTime - chromaticShift);
      vec3 chromaticColor = vec3(shiftedColor1.r, baseColor.g, shiftedColor2.b);
      
      // Blend chromatic aberration
      baseColor = mix(baseColor, chromaticColor, 0.3);
      
      // Add Fresnel-based rim lighting
      vec3 fresnelColor = multiColorGradient(fresnel + uTime * 0.05);
      baseColor = mix(baseColor, fresnelColor, fresnel * 0.6);
      
      // Holographic scan lines
      float scanLine = sin(vUv.y * 100.0 + uTime * 2.0) * 0.5 + 0.5;
      scanLine = smoothstep(0.3, 0.7, scanLine);
      baseColor += fresnelColor * scanLine * 0.1;
      
      // Energy field pulses
      float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
      baseColor += fresnelColor * pulse * noise2 * 0.2;
      
      // Apply intensity
      baseColor *= uIntensity;
      
      // Additive glow on edges
      float edgeGlow = pow(fresnel, 2.0) * uGlowIntensity;
      baseColor += fresnelColor * edgeGlow;
      
      // Output with additive blending suggestion
      gl_FragColor = vec4(baseColor, 0.9 + fresnel * 0.1);
    }
  `

  // Shader uniforms
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uIntensity: { value: intensity },
      uDistortion: { value: distortion },
      uColor1: { value: new THREE.Color(colors[0]) },
      uColor2: { value: new THREE.Color(colors[1]) },
      uColor3: { value: new THREE.Color(colors[2]) },
      uColor4: { value: new THREE.Color(colors[3]) },
      uColor5: { value: new THREE.Color(colors[4]) },
      uFresnelPower: { value: 2.5 },
      uGlowIntensity: { value: 1.2 },
    }),
    [colors, intensity, distortion]
  )

  // Animate shader
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed
    }
  })

  return (
    <shaderMaterial
      ref={materialRef}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      transparent
      side={THREE.DoubleSide}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  )
}

// Main Holographic Sphere Component
const HolographicSphere = ({ 
  colors, 
  speed = 0.3, 
  intensity = 1.2, 
  distortion = 0.3,
  scale = 1 
}) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <sphereGeometry args={[1, 128, 128]} />
      <HologramMaterial 
        colors={colors} 
        speed={speed} 
        intensity={intensity}
        distortion={distortion}
      />
    </mesh>
  )
}

// Main Export Component
const AdvancedHolographicGradient = ({
  mode = 'cyberpunk',
  intensity = 1.2,
  speed = 0.3,
  distortion = 0.3,
  scale = 2.5,
  containerClassName = '',
  cameraPosition = [0, 0, 5]
}) => {
  // Holographic color presets
  const colorPresets = {
    cyberpunk: ['#00ffff', '#ff00ff', '#8b5cf6', '#00d4ff', '#ff006e'],
    plasma: ['#4f46e5', '#7c3aed', '#ec4899', '#06b6d4', '#8b5cf6'],
    aurora: ['#10b981', '#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899'],
    neon: ['#39ff14', '#ff10f0', '#00f0ff', '#ffff00', '#ff6600'],
    crystal: ['#60a5fa', '#a78bfa', '#f472b6', '#34d399', '#fbbf24'],
  }

  const colors = colorPresets[mode] || colorPresets.cyberpunk

  return (
    <div className={`relative w-full h-full ${containerClassName}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
      >
        {/* Ambient lighting for base illumination */}
        <ambientLight intensity={0.3} />
        
        {/* Point lights for holographic highlights */}
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        
        {/* Main holographic sphere */}
        <HolographicSphere
          colors={colors}
          speed={speed}
          intensity={intensity}
          distortion={distortion}
          scale={scale}
        />
      </Canvas>

      {/* Additional glow overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            ${colors[0]}15, 
            ${colors[1]}10, 
            transparent 70%)`,
          mixBlendMode: 'screen',
          animation: 'hologram-pulse 3s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes hologram-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}

export default AdvancedHolographicGradient
