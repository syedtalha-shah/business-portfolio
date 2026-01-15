import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useIntersectionObserver = (options = {}) => {
  const {
    threshold = 0,
    rootMargin = '0px',
    triggerOnce = false
  } = options

  const { ref, inView, entry } = useInView({
    threshold,
    rootMargin,
    triggerOnce
  })

  return {
    ref,
    inView,
    entry,
    isIntersecting: inView
  }
}

export default useIntersectionObserver
