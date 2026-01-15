import { useState } from 'react'
import { services } from '../../data/services'
import ServiceCard from './ServiceCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ServicesSection = () => {
  const [expandedServices, setExpandedServices] = useState([])
  const { ref, inView } = useScrollAnimation()

  const handleToggleExpand = (serviceId) => {
    setExpandedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  return (
    <section id="services" className="section bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to help your business grow and succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedServices.includes(service.id)}
              onExpand={() => handleToggleExpand(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

