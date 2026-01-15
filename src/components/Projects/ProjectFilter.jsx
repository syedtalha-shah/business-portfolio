import { motion } from 'framer-motion'

const ProjectFilter = ({ categories = [], activeFilter, onFilterChange, className = '' }) => {
  const allCategories = ['All', ...categories]

  return (
    <div className={`flex flex-wrap gap-3 justify-center ${className}`}>
      {allCategories.map((category, index) => {
        const isActive = activeFilter === category || (category === 'All' && activeFilter === 'all')
        
        return (
          <motion.button
            key={category}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(category === 'All' ? 'all' : category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              isActive
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </motion.button>
        )
      })}
    </div>
  )
}

export default ProjectFilter

