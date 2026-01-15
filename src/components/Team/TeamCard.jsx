import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Card from '../common/Card'
import SkillsVisualization from './SkillsVisualization'

const TeamCard = ({ member }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  if (!member) {
    return null
  }

  const socialIcons = {
    linkedin: Linkedin,
    github: Github,
    email: Mail,
    portfolio: ExternalLink
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card hover elevated className="h-full overflow-hidden">
        <div
          className="relative h-full perspective-1000"
          style={{ minHeight: '500px' }}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Front Side */}
          <motion.div
            className="absolute inset-0 backface-hidden"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              transformStyle: 'preserve-3d',
              zIndex: isFlipped ? 1 : 2
            }}
          >
            <div className="p-6 h-full flex flex-col justify-center">
              {/* Image */}
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <LazyLoadImage
                  src={member.image || '/images/team/placeholder.jpg'}
                  alt={member.name}
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
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {member.department}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {Object.entries(member.socialLinks || {}).map(([platform, url]) => {
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
                        <Icon size={18} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back Side */}
          <motion.div
            className="absolute inset-0 backface-hidden rotate-y-180"
            animate={{ rotateY: isFlipped ? 0 : 180 }}
            transition={{ duration: 0.6 }}
            style={{ 
              transformStyle: 'preserve-3d',
              zIndex: isFlipped ? 2 : 1
            }}
          >
            <div className="p-6 h-full overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {member.bio}
              </p>

              {/* Skills */}
              {member.skills && member.skills.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                    Skills
                  </h4>
                  <SkillsVisualization skills={member.skills} type="progress" isVisible={isFlipped} />
                </div>
              )}

              {/* Expertise */}
              {member.expertise && member.expertise.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 3).map((exp, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

export default TeamCard

