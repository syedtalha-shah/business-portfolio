import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px'
  } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return {
    ref,
    inView: inView || hasAnimated,
    hasAnimated
  }
}

export default useScrollAnimation
