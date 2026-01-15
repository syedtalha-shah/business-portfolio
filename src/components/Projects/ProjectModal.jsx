import { useState } from 'react'
import { X, ExternalLink, Github, Calendar, User, TrendingUp, Target, Star } from 'lucide-react'
import Modal from '../common/Modal'
import LightboxGallery from './LightboxGallery'
import BeforeAfterSlider from './BeforeAfterSlider'
import TechStackBadges from './TechStackBadges'
import Button from '../common/Button'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  if (!project) return null

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" className="max-w-6xl">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{project.fullDescription}</p>
          </div>

          {/* Main Image */}
          {project.images && project.images.length > 0 && (
            <div
              className="relative h-64 md:h-96 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <OptimizedImage
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to view gallery
                </span>
              </div>
            </div>
          )}

          {/* Before/After Slider */}
          {project.beforeAfter?.enabled && (
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Before & After
              </h3>
              <BeforeAfterSlider
                beforeImage={project.beforeAfter.before}
                afterImage={project.beforeAfter.after}
                className="h-64 md:h-96"
              />
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Technologies Used
                </h3>
                <TechStackBadges technologies={project.technologies} />
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={18} />
                  <span>Year: {project.year}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <User size={18} />
                  <span>Duration: {project.duration}</span>
                </div>
                {project.client && (
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <User size={18} />
                    <span>Client: {project.client.name}</span>
                  </div>
                )}
              </div>

              {/* Links */}
              {project.links && (
                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.open(project.links.live, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Site
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* Right Column - Results */}
            {project.results && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Results & Achievements
                </h3>
                <div className="space-y-4">
                  {project.results.metrics?.map((metric, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {metric.icon === 'trending-up' && <TrendingUp size={18} className="text-primary-600" />}
                        {metric.icon === 'target' && <Target size={18} className="text-primary-600" />}
                        {metric.icon === 'star' && <Star size={18} className="text-primary-600" />}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {metric.label}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
                {project.results.achievements && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {project.results.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Case Study */}
          {project.caseStudy && (
            <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Case Study</h3>
              
              {project.caseStudy.challenge && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.caseStudy.challenge}</p>
                </div>
              )}

              {project.caseStudy.solution && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.caseStudy.solution}</p>
                </div>
              )}

              {project.caseStudy.process && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {project.caseStudy.process.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {project.caseStudy.impact && (
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Impact</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.caseStudy.impact}</p>
                </div>
              )}
            </div>
          )}

          {/* Image Gallery Thumbnails */}
          {project.images && project.images.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-32 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                      objectFit="cover"
                      height="100%"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>

      <LightboxGallery
        images={project.images || []}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}

export default ProjectModal

