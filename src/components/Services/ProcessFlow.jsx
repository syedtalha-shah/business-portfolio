import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

const ProcessFlow = ({ steps = [] }) => {
  if (!steps || steps.length === 0) return null

  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Our Process
      </h3>
      <div className="relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = Icons[step.icon] || Icons.Circle
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <IconComponent className="text-white" size={32} />
                </div>
                
                {/* Step Content */}
                <div className="text-center">
                  <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    Step {step.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProcessFlow

