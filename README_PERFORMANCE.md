# Performance Optimization Guide

This document outlines the performance optimizations implemented in the Business Portfolio application.

## Image Optimization

### OptimizedImage Component
- **Location:** `src/components/common/OptimizedImage.jsx`
- **Features:**
  - Lazy loading with Intersection Observer (200px threshold)
  - WebP support with fallback
  - Responsive srcset for different screen sizes
  - Blur placeholder effect
  - Skeleton loading state
  - Error handling

### Usage
```jsx
import OptimizedImage from '../components/common/OptimizedImage'

<OptimizedImage
  src="/images/project.jpg"
  alt="Project image"
  width="100%"
  height="400px"
  priority={false} // Set to true for above-the-fold images
/>
```

## Code Splitting

### Route-Based Splitting
- All pages are lazy-loaded using `React.lazy()`
- Suspense boundaries with loading states
- Reduces initial bundle size

### Component-Based Splitting
- Heavy components (Hero, Projects, Charts, etc.) are lazy-loaded
- Components only load when needed
- Improves initial page load time

### Library-Based Splitting
- Vendor chunks separated:
  - `react-vendor`: React core libraries
  - `animation-vendor`: Framer Motion, GSAP, AOS
  - `three-vendor`: Three.js and related
  - `chart-vendor`: Chart libraries
  - `form-vendor`: Form handling libraries
  - `ui-vendor`: UI component libraries

## Performance Utilities

### Location: `src/utils/performance.js`

**Functions:**
- `throttle()`: Limits function execution frequency
- `debounce()`: Delays function execution
- `rafThrottle()`: Throttles using requestAnimationFrame
- `getPerformanceMetrics()`: Gets performance timing data
- `logPerformanceMetrics()`: Logs metrics in development

### Usage
```javascript
import { rafThrottle } from '../utils/performance'

const handleScroll = rafThrottle(() => {
  // Scroll handling code
})
```

## Animation Optimizations

### GPU Acceleration
- CSS classes for GPU-accelerated animations
- `will-change` property for animated elements
- `transform` and `opacity` for smooth animations

### Reduced Motion Support
- Respects `prefers-reduced-motion` media query
- Disables animations for users who prefer reduced motion
- Particle background disabled on mobile and reduced motion

### Scroll Event Optimization
- All scroll handlers use `rafThrottle()` for 60fps performance
- Passive event listeners for better scroll performance
- RequestAnimationFrame for smooth updates

## Bundle Optimization

### Build Configuration
- **Minification:** Terser with console.log removal
- **Sourcemaps:** Disabled in production
- **Chunk Size Warning:** 1MB limit
- **Tree Shaking:** Automatic via Vite

### Bundle Analysis
- Run `npm run build` to generate bundle stats
- View `dist/stats.html` for visual bundle analysis
- Identify large dependencies and optimize

## Loading States

### Skeleton Screens
- Used for images during loading
- Smooth transitions when content loads
- Better perceived performance

### Loading Spinners
- Full-screen loader for route changes
- Section-level loaders for lazy components
- Non-blocking user experience

## Performance Targets

### Lighthouse Scores
- **Performance:** > 90
- **Accessibility:** > 95
- **Best Practices:** > 90
- **SEO:** > 90

### Core Web Vitals
- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms
- **Time to Interactive (TTI):** < 3.8s

## Monitoring

### Development Mode
- Performance metrics logged to console
- Bundle size warnings
- Component load times

### Production
- Use browser DevTools Performance tab
- Lighthouse audits
- Real User Monitoring (RUM) tools

## Best Practices

1. **Images:**
   - Use WebP format with fallbacks
   - Provide multiple sizes (srcset)
   - Lazy load below-the-fold images
   - Use `priority` prop for critical images

2. **Components:**
   - Lazy load heavy components
   - Use Suspense boundaries
   - Minimize re-renders with React.memo

3. **Animations:**
   - Use GPU-accelerated properties
   - Throttle scroll events
   - Respect reduced motion preferences
   - Optimize particle counts

4. **Code:**
   - Split large bundles
   - Remove unused dependencies
   - Minify and compress
   - Use code splitting

## Testing Performance

### Development
```bash
npm run dev
# Open DevTools → Performance tab
# Record and analyze
```

### Production Build
```bash
npm run build
npm run preview
# Run Lighthouse audit
```

### Bundle Analysis
```bash
npm run build
# Open dist/stats.html in browser
```

## Troubleshooting

### Slow Initial Load
- Check bundle size in `dist/stats.html`
- Verify code splitting is working
- Optimize large dependencies

### Slow Animations
- Check for layout thrashing
- Verify GPU acceleration
- Reduce animation complexity

### High Memory Usage
- Check for memory leaks
- Optimize particle counts
- Reduce Three.js complexity on mobile

