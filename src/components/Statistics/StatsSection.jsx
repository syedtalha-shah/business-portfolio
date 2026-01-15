import { statistics, skillStats, chartData } from '../../data/statistics'
import AnimatedCounter from './AnimatedCounter'
import ProgressBar from './ProgressBar'
import InteractiveCharts from './InteractiveCharts'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import * as Icons from 'lucide-react'

const StatsSection = () => {
  const { ref, inView } = useScrollAnimation({ triggerOnce: true })

  return (
    <section id="statistics" className="section bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Statistics
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Numbers that speak for themselves
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {statistics.map((stat) => {
            const IconComponent = Icons[stat.icon] || Icons.Briefcase
            return (
              <div
                key={stat.id}
                className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <IconComponent className="text-primary-600 dark:text-primary-400" size={24} />
                  </div>
                </div>
                <AnimatedCounter
                  endValue={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                />
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Skill Stats */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Our Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillStats.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h4>
                  <span className="text-primary-600 dark:text-primary-400 font-bold">
                    {skill.percentage}%
                  </span>
                </div>
                <ProgressBar
                  percentage={skill.percentage}
                  className="mb-3"
                />
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Growth & Performance
          </h3>
          <InteractiveCharts chartData={chartData} />
        </div>
      </div>
    </section>
  )
}

export default StatsSection

