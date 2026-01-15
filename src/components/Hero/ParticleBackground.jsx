import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { useTheme } from '../../context/ThemeContext'

const Particles = ({ count = 200, isDarkMode }) => {
  const mesh = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.05
      mesh.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  const color = isDarkMode ? '#60a5fa' : '#0ea5e9'

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

const ParticleBackground = ({ particleCount = 200, className = '' }) => {
  const { isDarkMode } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleReducedMotion = (e) => {
      setReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleReducedMotion)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', handleReducedMotion)
    }
  }, [])

  // Disable on mobile or if reduced motion is preferred
  if (isMobile || reducedMotion) {
    return (
      <div
        className={`absolute inset-0 ${className}`}
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle at 20% 50%, rgba(30, 58, 138, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)'
        }}
      />
    )
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: false }}
        dpr={[1, 2]}
      >
        <Particles count={particleCount} isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  )
}

export default ParticleBackground

