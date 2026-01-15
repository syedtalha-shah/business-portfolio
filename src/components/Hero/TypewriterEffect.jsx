import { useState, useEffect } from 'react'

const TypewriterEffect = ({
  texts = [],
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = ''
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (texts.length === 0) return

    const currentFullText = texts[currentTextIndex]
    let timeout

    if (!isDeleting && currentText === currentFullText) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && currentText === '') {
      // Move to next text
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    } else {
      // Type or delete
      timeout = setTimeout(() => {
        setCurrentText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          } else {
            return currentFullText.slice(0, prev.length + 1)
          }
        })
      }, isDeleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, speed, deleteSpeed, pauseTime])

  // Cursor blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className}>
      {currentText}
      <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
    </span>
  )
}

export default TypewriterEffect

