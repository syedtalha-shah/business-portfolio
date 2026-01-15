import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Rocket, Trophy, Users, Award, Target, Globe, Handshake, Star, Brain, Leaf } from 'lucide-react'
import { timeline } from '../../data/timeline'
import * as Icons from 'lucide-react'

const CompanyTimeline = () => {
  const [expandedItems, setExpandedItems] = useState([])

  const toggleExpand = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const getIcon = (iconName) => {
    const iconMap = {
      rocket: Rocket,
      trophy: Trophy,
      users: Users,
      award: Award,
      target: Target,
      globe: Globe,
      handshake: Handshake,
      star: Star,
      brain: Brain,
      leaf: Leaf
    }
    return iconMap[iconName] || Icons.Circle
  }

  // Group timeline by year
  const timelineByYear = timeline.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = []
    }
    acc[item.year].push(item)
    return acc
  }, {})

  const years = Object.keys(timelineByYear).sort()

  return (
    <section id="timeline" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of our milestones, achievements, and growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {years.map((year, yearIndex) => (
            <div key={year} className="mb-12">
              {/* Year Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: yearIndex * 0.1 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="flex-1 h-0.5 bg-primary-600 dark:bg-primary-400" />
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {year}
                </h3>
                <div className="flex-1 h-0.5 bg-primary-600 dark:bg-primary-400" />
              </motion.div>

              {/* Timeline Items */}
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />

                {/* Items */}
                <div className="space-y-8">
                  {timelineByYear[year].map((item, index) => {
                    const IconComponent = getIcon(item.icon)
                    const isExpanded = expandedItems.includes(item.id)
                    const isEven = index % 2 === 0

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative flex items-start gap-6 ${
                          isEven ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        {/* Content Card */}
                        <div
                          className={`flex-1 ${
                            isEven ? 'text-right' : 'text-left'
                          }`}
                        >
                          <motion.div
                            className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow ${
                              item.featured ? 'border-2 border-primary-600 dark:border-primary-400' : ''
                            }`}
                            onClick={() => toggleExpand(item.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {/* Header */}
                            <div className={`flex items-center gap-3 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                              {!isEven && (
                                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                                  <IconComponent className="text-primary-600 dark:text-primary-400" size={20} />
                                </div>
                              )}
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs text-primary-600 dark:text-primary-400 font-semibold uppercase">
                                    {item.type}
                                  </span>
                                  {item.featured && (
                                    <span className="text-xs bg-primary-600 text-white px-2 py-0.5 rounded">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                  {item.title}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {item.month} {item.year}
                                </p>
                              </div>
                              {isEven && (
                                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                                  <IconComponent className="text-primary-600 dark:text-primary-400" size={20} />
                                </div>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                              {item.description}
                            </p>

                            {/* Expandable Details */}
                            <AnimatePresence>
                              {isExpanded && item.details && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                                >
                                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    {item.details.location && (
                                      <p>
                                        <strong>Location:</strong> {item.details.location}
                                      </p>
                                    )}
                                    {item.details.attendees && (
                                      <p>
                                        <strong>Attendees:</strong> {item.details.attendees}
                                      </p>
                                    )}
                                    {item.details.impact && (
                                      <p>
                                        <strong>Impact:</strong> {item.details.impact}
                                      </p>
                                    )}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Expand Button */}
                            <button
                              className={`mt-4 flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors ${
                                isEven ? 'ml-auto' : 'mr-auto'
                              }`}
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleExpand(item.id)
                              }}
                            >
                              <span className="text-sm font-medium">
                                {isExpanded ? 'Show Less' : 'Learn More'}
                              </span>
                              <ChevronDown
                                className={`transition-transform ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                size={16}
                              />
                            </button>
                          </motion.div>
                        </div>

                        {/* Timeline Marker */}
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-16 h-16 bg-primary-600 dark:bg-primary-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800">
                            <IconComponent className="text-white" size={24} />
                          </div>
                        </div>

                        {/* Spacer for alternating layout */}
                        <div className="flex-1" />
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyTimeline

