import { useEffect, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'

const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const { width } = useWindowSize()
  const isMobile = width < 768

  useEffect(() => {
    // Disable on mobile/touch devices
    if (isMobile) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e) => {
      if (e.target && typeof e.target.closest === 'function' && e.target.closest('a, button, [role="button"]')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleMouseDown = () => {
      setIsClicking(true)
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    // Throttle mouse move for performance
    let ticking = false
    const throttledMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleMouseMove(e)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', throttledMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isMobile])

  // Don't render on mobile
  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.15s ease-out'
        }}
      >
        <div
          className={`rounded-full bg-white dark:bg-gray-200 transition-all duration-200 ${
            isHovering
              ? 'w-8 h-8 scale-150'
              : isClicking
              ? 'w-3 h-3 scale-75'
              : 'w-3 h-3'
          }`}
        />
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out'
        }}
      >
        <div
          className={`rounded-full border-2 border-white dark:border-gray-200 transition-all duration-200 ${
            isHovering
              ? 'w-12 h-12'
              : isClicking
              ? 'w-6 h-6'
              : 'w-8 h-8'
          }`}
        />
      </div>
    </>
  )
}

export default InteractiveCursor

