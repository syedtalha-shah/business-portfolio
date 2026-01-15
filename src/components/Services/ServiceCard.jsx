import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import * as Icons from 'lucide-react'
import Card from '../common/Card'

const ServiceCard = ({ service, isExpanded, onExpand }) => {
  const IconComponent = Icons[service.icon] || Icons.Code

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card hover elevated className="h-full flex flex-col">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <IconComponent className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                {service.category && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {service.category}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onExpand}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              <ChevronDown
                className={`text-gray-600 dark:text-gray-400 transition-transform ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                size={20}
              />
            </button>
          </div>

          {/* Short Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {service.shortDescription}
          </p>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {/* Full Description */}
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.fullDescription}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <Check size={18} className="text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Pricing */}
                  {service.pricing && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {service.pricing.startingFrom}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {service.pricing.model}
                      </p>
                    </div>
                  )}

                  {/* Timeline */}
                  {service.timeline && (
                    <div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Timeline: <strong>{service.timeline}</strong>
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}

export default ServiceCard

