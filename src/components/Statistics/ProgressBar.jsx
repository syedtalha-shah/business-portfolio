import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ProgressBar = ({ percentage, className = '', showLabel = true }) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-primary-600 dark:bg-primary-500 h-full rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-gray-500 dark:text-gray-400">0%</span>
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            {percentage}%
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">100%</span>
        </div>
      )}
    </div>
  )
}

export default ProgressBar

