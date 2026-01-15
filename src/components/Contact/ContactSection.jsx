import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { companyInfo } from '../../data/companyInfo'
import ContactForm from './ContactForm'
import InteractiveMap from './InteractiveMap'
import NewsletterForm from './NewsletterForm'
import Card from '../common/Card'

const ContactSection = () => {
  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data)
  }

  const handleNewsletterSubscribe = (email) => {
    console.log('Newsletter subscription:', email)
  }

  const mapLocation = {
    lat: 40.7128,
    lng: -74.0060
  }

  const mapMarker = {
    title: companyInfo.name,
    description: `${companyInfo.address.street}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.zip}`
  }

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      content: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: companyInfo.phone,
      link: `tel:${companyInfo.phone}`,
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: `${companyInfo.address.street}`,
      link: `https://www.google.com/maps/search/?api=1&query=${mapLocation.lat},${mapLocation.lng}`,
      description: `${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.zip}`
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM',
      link: null,
      description: 'Saturday: 10AM-4PM, Sunday: Closed'
    }
  ]

  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card elevated className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Send className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send us a Message
                </h3>
              </div>
              <ContactForm onSubmit={handleFormSubmit} />
            </Card>
          </motion.div>

          {/* Contact Information - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {contactItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card hover elevated className="p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex-shrink-0">
                          <IconComponent className="text-primary-600 dark:text-primary-400" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">
                            {item.title}
                          </h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium block truncate"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {item.content}
                            </p>
                          )}
                          {item.description && (
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <NewsletterForm onSubscribe={handleNewsletterSubscribe} />
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card elevated className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <MapPin className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Find Us
              </h3>
            </div>
            <InteractiveMap location={mapLocation} marker={mapMarker} />
          </Card>
        </motion.div> */}
      </div>
    </section>
  )
}

export default ContactSection

