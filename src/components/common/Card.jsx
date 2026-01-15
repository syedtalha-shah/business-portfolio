import { motion } from 'framer-motion'

const Card = ({
  children,
  hover = false,
  elevated = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg transition-all duration-300'
  
  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : ''
  
  const elevationStyles = elevated
    ? 'shadow-lg'
    : 'shadow-md'
  
  const Component = onClick ? motion.div : motion.div
  
  return (
    <Component
      className={`${baseStyles} ${hoverStyles} ${elevationStyles} ${className}`}
      onClick={onClick}
      whileHover={hover && onClick ? { scale: 1.02 } : {}}
      whileTap={hover && onClick ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Card

