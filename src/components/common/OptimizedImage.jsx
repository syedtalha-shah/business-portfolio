import { useState, useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Skeleton from './Skeleton'

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - WebP support with fallback
 * - Responsive srcset for different screen sizes
 * - Blur placeholder effect
 * - Skeleton loading state
 * - Error handling
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false, // If true, loads immediately
  objectFit = 'cover',
  ...props
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [srcSet, setSrcSet] = useState('')

  // Generate srcset for responsive images
  useEffect(() => {
    if (!src) return

    // If src is a data URL or external URL, use as-is
    if (src.startsWith('data:') || src.startsWith('http')) {
      setSrcSet('')
      return
    }

    // Generate multiple sizes for srcset
    const sizes = [400, 800, 1200, 1600]
    const srcset = sizes
      .map((size) => {
        // Try WebP first, fallback to original
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, `.webp`)
        return `${webpSrc}?w=${size} ${size}w`
      })
      .join(', ')

    setSrcSet(srcset)
  }, [src])

  // Handle image load
  const handleLoad = () => {
    setImageLoaded(true)
  }

  // Handle image error
  const handleError = () => {
    setImageError(true)
    setImageLoaded(true) // Stop showing skeleton
  }

  if (imageError) {
    // Fallback placeholder
    return (
      <div
        className={`bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Image not available</span>
      </div>
    )
  }

  // If priority, load immediately without lazy loading
  if (priority) {
    return (
      <div className={`relative ${className}`} style={{ width, height }}>
        {!imageLoaded && (
          <Skeleton
            width={width || '100%'}
            height={height || '100%'}
            className="absolute inset-0"
          />
        )}
        <img
          src={src}
          alt={alt}
          srcSet={srcSet || undefined}
          sizes={sizes}
          className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={{ objectFit, width, height }}
          onLoad={handleLoad}
          onError={handleError}
          loading="eager"
          {...props}
        />
      </div>
    )
  }

  // Lazy loaded image
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!imageLoaded && (
        <Skeleton
          width={width || '100%'}
          height={height || '100%'}
          className="absolute inset-0"
        />
      )}
      <LazyLoadImage
        src={src}
        alt={alt}
        srcSet={srcSet || undefined}
        sizes={sizes}
        effect="blur"
        threshold={200}
        className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={{ objectFit, width, height }}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}

export default OptimizedImage

