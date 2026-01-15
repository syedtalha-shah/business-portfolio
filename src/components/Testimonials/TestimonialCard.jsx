import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Card from '../common/Card'

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={
          index < rating
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }
      />
    ))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card hover elevated className="h-full flex flex-col p-6">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="text-primary-600 dark:text-primary-400" size={32} />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {renderStars(testimonial.rating)}
        </div>

        {/* Quote Text */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex-shrink-0">
            <LazyLoadImage
              src={testimonial.author.image || '/images/testimonials/placeholder.jpg'}
              alt={testimonial.author.name}
              effect="blur"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {testimonial.author.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.author.role}
            </p>
            <p className="text-sm text-primary-600 dark:text-primary-400">
              {testimonial.author.company}
            </p>
          </div>
        </div>

        {/* Project */}
        {testimonial.project && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Project: <span className="font-medium">{testimonial.project}</span>
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  )
}

export default TestimonialCard

