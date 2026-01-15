import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, ExternalLink, Award } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Card from '../common/Card'
import FounderModal from './FounderModal'
import Button from '../common/Button'

const FounderCard = ({ founder, isFounder }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const socialIcons = {
    linkedin: Linkedin,
    email: Mail,
    website: ExternalLink
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card hover elevated className="h-full">
          <div className="p-6">
            {/* Image */}
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <LazyLoadImage
                src={founder.image || '/images/founders/placeholder.jpg'}
                alt={founder.name}
                effect="blur"
                className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 animate-pulse" />
              )}
            </div>

            {/* Info */}
            <div className="text-center">
              <div className="inline-block bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                {isFounder ? 'Founder' : 'Co-Founder'}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {founder.name}
              </h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                {founder.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {founder.bio}
              </p>

              {/* Quote */}
              {founder.quote && (
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-6 border-l-4 border-primary-600 pl-4">
                  "{founder.quote}"
                </blockquote>
              )}

              {/* Achievements Preview */}
              {founder.achievements && founder.achievements.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="text-primary-600" size={18} />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Key Achievement
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {founder.achievements[0].title} ({founder.achievements[0].year})
                  </p>
                </div>
              )}

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-6">
                {Object.entries(founder.socialLinks || {}).map(([platform, url]) => {
                  if (!url || url === '#') return null
                  const Icon = socialIcons[platform]
                  if (!Icon) return null
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label={platform}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>

              {/* View More Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="w-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <FounderModal
        founder={founder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default FounderCard

