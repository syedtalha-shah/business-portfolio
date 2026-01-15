import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

const Loading = ({ size = 'md', fullScreen = false, className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }
  
  const spinner = (
    <motion.div
      className={`flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Loader2 className={`${sizes[size]} text-primary-600 animate-spin`} />
    </motion.div>
  )
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {spinner}
      </div>
    )
  }
  
  return spinner
}

export default Loading

