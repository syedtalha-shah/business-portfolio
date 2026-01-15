import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GripVertical } from 'lucide-react'
import OptimizedImage from '../common/OptimizedImage'

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  orientation = 'horizontal',
  className = ''
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    let position

    if (orientation === 'horizontal') {
      position = ((e.clientX - rect.left) / rect.width) * 100
    } else {
      position = ((e.clientY - rect.top) / rect.height) * 100
    }

    position = Math.max(0, Math.min(100, position))
    setSliderPosition(position)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  const handleTouchMove = (e) => {
    if (!containerRef.current) return

    const touch = e.touches[0]
    const rect = containerRef.current.getBoundingClientRect()
    let position

    if (orientation === 'horizontal') {
      position = ((touch.clientX - rect.left) / rect.width) * 100
    } else {
      position = ((touch.clientY - rect.top) / rect.height) * 100
    }

    position = Math.max(0, Math.min(100, position))
    setSliderPosition(position)
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{ touchAction: 'none' }}
    >
      {/* After Image */}
      <div className="relative w-full h-full">
        <OptimizedImage
          src={afterImage}
          alt="After"
          className="w-full h-full"
          objectFit="cover"
        />
      </div>

      {/* Before Image with Clip */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath:
            orientation === 'horizontal'
              ? `inset(0 ${100 - sliderPosition}% 0 0)`
              : `inset(${100 - sliderPosition}% 0 0 0)`
        }}
      >
        <OptimizedImage
          src={beforeImage}
          alt="Before"
          className="w-full h-full"
          objectFit="cover"
        />
      </div>

      {/* Slider Handle */}
      <div
        className={`absolute bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing ${
          orientation === 'horizontal'
            ? 'top-0 bottom-0 w-1 translate-x-[-50%]'
            : 'left-0 right-0 h-1 translate-y-[-50%]'
        }`}
        style={{
          [orientation === 'horizontal' ? 'left' : 'top']: `${sliderPosition}%`
        }}
        onMouseDown={handleMouseDown}
      >
        <div
          className={`bg-white dark:bg-gray-800 rounded-full shadow-lg ${
            orientation === 'horizontal'
              ? 'w-8 h-8 flex items-center justify-center'
              : 'h-8 w-8 flex items-center justify-center'
          }`}
        >
          <GripVertical
            className={`text-gray-600 dark:text-gray-300 ${
              orientation === 'horizontal' ? 'rotate-90' : ''
            }`}
            size={20}
          />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
        After
      </div>
    </div>
  )
}

export default BeforeAfterSlider

