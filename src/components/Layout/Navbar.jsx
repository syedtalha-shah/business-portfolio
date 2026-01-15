import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import DarkModeToggle from '../common/DarkModeToggle'
import { rafThrottle } from '../../utils/performance'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const handleScroll = rafThrottle(() => {
      setIsScrolled(window.scrollY > 50)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const [activeSection, setActiveSection] = useState('')

  const navLinks = [
    { path: '/', label: 'Home', hash: '' },
    { path: '/', label: 'Projects', hash: '#projects' },
    { path: '/', label: 'Services', hash: '#services' },
    { path: '/', label: 'Team', hash: '#team' },
    { path: '/', label: 'About', hash: '#about' },
    { path: '/', label: 'Contact', hash: '#contact' },
  ]

  // Update active section on scroll
  useEffect(() => {
    if (location.pathname !== '/') return

    const handleScroll = rafThrottle(() => {
      const sections = ['hero', 'projects', 'services', 'team', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    })

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleLinkClick = (e, hash) => {
    if (hash && location.pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const isActive = (hash) => {
    if (!hash) return location.pathname === '/' && activeSection === 'hero'
    const section = hash.replace('#', '')
    return location.pathname === '/' && activeSection === section
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path + link.hash}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className={`transition-colors font-medium ${
                  isActive(link.hash)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path + link.hash}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className={`block py-2 transition-colors ${
                  isActive(link.hash)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

