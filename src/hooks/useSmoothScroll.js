import { useCallback } from 'react'

export const useSmoothScroll = () => {
  const scrollTo = useCallback((target, offset = 0) => {
    const element = typeof target === 'string' 
      ? document.querySelector(target)
      : target

    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }, [])

  return {
    scrollTo,
    scrollToTop,
    scrollToBottom
  }
}

export default useSmoothScroll
