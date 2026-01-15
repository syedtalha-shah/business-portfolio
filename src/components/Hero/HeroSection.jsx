import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import ParticleBackground from './ParticleBackground'
import TypewriterEffect from './TypewriterEffect'
import InteractiveCursor from './InteractiveCursor'
import Button from '../common/Button'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import { companyInfo } from '../../data/companyInfo'

const HeroSection = () => {
  const { scrollTo } = useSmoothScroll()

  const typewriterTexts = [
    companyInfo.tagline,
    'Innovative Solutions',
    'Creative Excellence',
    'Digital Transformation'
  ]

  const handleCTAClick = (target) => {
    scrollTo(target, 80) // 80px offset for navbar
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      <InteractiveCursor />
      <ParticleBackground particleCount={200} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 sm:py-0">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="text-primary-600 dark:text-primary-400 block sm:inline">
              {companyInfo.name}
            </span>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-gray-700 dark:text-gray-300 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypewriterEffect
              texts={typewriterTexts}
              speed={100}
              deleteSpeed={50}
              pauseTime={2000}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {companyInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCTAClick('#projects')}
              className="group w-full sm:w-auto"
            >
              View Our Work
              <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleCTAClick('#contact')}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.button
              onClick={() => handleCTAClick('#projects')}
              className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Scroll down"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll</span>
              <ChevronDown size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

