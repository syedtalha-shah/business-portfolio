import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, User } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import TechStackBadges from './TechStackBadges'
import Card from '../common/Card'

const ProjectCard = ({ project, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card
        hover
        elevated
        onClick={() => onClick(project)}
        className="h-full flex flex-col cursor-pointer overflow-hidden group"
      >
        {/* Image */}
        <div className="relative h-48 md:h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
          <LazyLoadImage
            src={project.images[0] || '/images/projects/placeholder.jpg'}
            alt={project.title}
            effect="blur"
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse" />
          )}
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3"
            >
              <ExternalLink className="text-white" size={24} />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Category */}
          <div className="flex items-center gap-2 mb-2">
            {project.category.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-4">
            <TechStackBadges technologies={project.technologies.slice(0, 4)} />
          </div>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{project.year}</span>
            </div>
            {project.client && (
              <div className="flex items-center gap-1">
                <User size={14} />
                <span className="truncate max-w-[100px]">{project.client.name}</span>
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

export default ProjectCard

