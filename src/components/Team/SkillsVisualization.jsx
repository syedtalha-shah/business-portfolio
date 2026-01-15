import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const SkillsVisualization = ({ skills = [], type = 'progress', isVisible: externalVisible = null }) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // If external visibility is provided (from parent), use it
    if (externalVisible !== null) {
      setIsVisible(externalVisible)
      return
    }

    // Otherwise, use IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
  }, [externalVisible])

  if (type === 'progress') {
    return (
      <div ref={containerRef} className="space-y-3">
        {skills.map((skill, index) => (
          <div key={skill.name || index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <motion.div
                className="bg-primary-600 dark:bg-primary-500 h-full rounded-full"
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Radar chart would go here if needed
  return null
}

export default SkillsVisualization

