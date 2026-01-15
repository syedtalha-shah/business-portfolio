/**
 * Performance Utilities
 * 
 * Functions for performance optimization:
 * - Throttle/debounce scroll events
 * - Request animation frame utilities
 * - Performance monitoring
 */

/**
 * Throttle function - limits function execution frequency
 */
export const throttle = (func, limit) => {
  let inThrottle
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Debounce function - delays function execution until after wait time
 */
export const debounce = (func, wait) => {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), wait)
  }
}

/**
 * Request animation frame throttle
 */
export const rafThrottle = (func) => {
  let rafId = null
  return function (...args) {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func.apply(this, args)
        rafId = null
      })
    }
  }
}

/**
 * Check if element is in viewport
 */
export const isInViewport = (element, threshold = 0) => {
  if (!element) return false

  const rect = element.getBoundingClientRect()
  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= window.innerHeight + threshold &&
    rect.right <= window.innerWidth + threshold
  )
}

/**
 * Get performance metrics
 */
export const getPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !window.performance) {
    return null
  }

  const navigation = performance.getEntriesByType('navigation')[0]
  const paint = performance.getEntriesByType('paint')

  return {
    // Navigation timing
    dns: navigation?.domainLookupEnd - navigation?.domainLookupStart,
    tcp: navigation?.connectEnd - navigation?.connectStart,
    request: navigation?.responseStart - navigation?.requestStart,
    response: navigation?.responseEnd - navigation?.responseStart,
    dom: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
    load: navigation?.loadEventEnd - navigation?.loadEventStart,
    total: navigation?.loadEventEnd - navigation?.fetchStart,

    // Paint timing
    fcp: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime,
    lcp: null // Would need to measure separately
  }
}

/**
 * Log performance metrics (development only)
 */
export const logPerformanceMetrics = () => {
  if (import.meta.env.DEV) {
    const metrics = getPerformanceMetrics()
    if (metrics) {
      console.group('🚀 Performance Metrics')
      console.log('DNS Lookup:', `${metrics.dns?.toFixed(2)}ms`)
      console.log('TCP Connection:', `${metrics.tcp?.toFixed(2)}ms`)
      console.log('Request:', `${metrics.request?.toFixed(2)}ms`)
      console.log('Response:', `${metrics.response?.toFixed(2)}ms`)
      console.log('DOM Processing:', `${metrics.dom?.toFixed(2)}ms`)
      console.log('Page Load:', `${metrics.load?.toFixed(2)}ms`)
      console.log('Total Load Time:', `${metrics.total?.toFixed(2)}ms`)
      console.log('First Contentful Paint:', `${metrics.fcp?.toFixed(2)}ms`)
      console.groupEnd()
    }
  }
}

/**
 * Preload critical resources
 */
export const preloadResource = (href, as = 'image') => {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = href
  link.as = as
  document.head.appendChild(link)
}

/**
 * Prefetch resource for future navigation
 */
export const prefetchResource = (href) => {
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = href
  document.head.appendChild(link)
}

