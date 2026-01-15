import { motion } from 'framer-motion'

const TechStackBadges = ({ technologies = [], className = '' }) => {
  const techColors = {
    'React': 'bg-blue-500',
    'Node.js': 'bg-green-500',
    'MongoDB': 'bg-green-600',
    'Express': 'bg-gray-500',
    'Tailwind CSS': 'bg-cyan-500',
    'TypeScript': 'bg-blue-600',
    'Next.js': 'bg-black',
    'Python': 'bg-yellow-500',
    'PostgreSQL': 'bg-blue-700',
    'Firebase': 'bg-orange-500',
    'Redux': 'bg-purple-500',
    'Expo': 'bg-gray-800',
    'React Native': 'bg-blue-400',
    'Flutter': 'bg-blue-300',
    'Swift': 'bg-orange-400',
    'Kotlin': 'bg-purple-600',
    'D3.js': 'bg-orange-600',
    'Chart.js': 'bg-red-500',
    'GSAP': 'bg-green-400',
    'Framer Motion': 'bg-pink-500',
    'Stripe API': 'bg-indigo-500'
  }

  const getTechColor = (tech) => {
    return techColors[tech] || 'bg-gray-500'
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech, index) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.1 }}
          className={`${getTechColor(tech)} text-white text-xs px-2 py-1 rounded-full font-medium`}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  )
}

export default TechStackBadges

