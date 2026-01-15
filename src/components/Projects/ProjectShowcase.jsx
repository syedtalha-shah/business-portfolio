import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'
import ProjectModal from './ProjectModal'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { ref, inView } = useScrollAnimation()

  // Get all unique categories
  const allCategories = useMemo(() => {
    const categories = new Set()
    projects.forEach((project) => {
      project.category.forEach((cat) => categories.add(cat))
    })
    return Array.from(categories)
  }, [])

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      const matchesFilter =
        activeFilter === 'all' ||
        project.category.some((cat) => cat === activeFilter)

      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )

      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white px-2">
            Our Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-6 sm:mb-8 px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Filter */}
        <ProjectFilter
          categories={allCategories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          className="mb-8 sm:mb-12 px-2"
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8 text-gray-600 dark:text-gray-400">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default ProjectShowcase

