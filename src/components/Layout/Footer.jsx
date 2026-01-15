import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'
import { companyInfo } from '../../data/companyInfo'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()
  const { scrollTo } = useSmoothScroll()

  const quickLinks = [
    { path: '/', label: 'Home', hash: null },
    { path: '/#projects', label: 'Projects', hash: '#projects' },
    { path: '/#services', label: 'Services', hash: '#services' },
    { path: '/#team', label: 'Team', hash: '#team' },
    { path: '/#contact', label: 'Contact', hash: '#contact' },
  ]

  const handleLinkClick = (e, path, hash) => {
    // If it's a hash link (section on home page)
    if (hash) {
      e.preventDefault()
      
      // If we're already on the home page, just scroll
      if (location.pathname === '/') {
        scrollTo(hash, 80) // 80px offset for navbar
      } else {
        // Navigate to home first, then scroll after navigation completes
        navigate('/')
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          setTimeout(() => {
            const element = document.querySelector(hash)
            if (element) {
              const elementPosition = element.getBoundingClientRect().top
              const offsetPosition = elementPosition + window.pageYOffset - 80
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              })
            }
          }, 150)
        })
      }
    } else if (path === '/') {
      // If clicking Home, scroll to top if already on home page
      e.preventDefault()
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        navigate('/')
      }
    }
    // For other regular links (like legal pages), let Link handle it normally
  }

  const legalLinks = [
    { path: '/terms', label: 'Terms & Conditions' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/cookies', label: 'Cookie Policy' },
  ]

  const socialLinks = [
    { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: companyInfo.social.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: companyInfo.social.github, label: 'GitHub', color: 'hover:text-gray-300' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-950 dark:to-black text-gray-300 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div
            className="col-span-1 lg:col-span-2"
            variants={itemVariants}
          >
            <div className="bg-gray-800/30 dark:bg-gray-900/30 rounded-lg p-6 lg:p-8 backdrop-blur-sm border border-gray-700/30 dark:border-gray-800/30">
              <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {companyInfo.name}
              </h3>
              <p className="mb-6 text-gray-400 leading-relaxed">
                {companyInfo.description}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-all duration-300 group"
                >
                  <div className="mr-3 p-2 bg-gray-800/50 dark:bg-gray-900/50 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Mail size={16} className="text-primary-400" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{companyInfo.email}</span>
                </a>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center text-gray-400 hover:text-primary-400 transition-all duration-300 group"
                >
                  <div className="mr-3 p-2 bg-gray-800/50 dark:bg-gray-900/50 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Phone size={16} className="text-primary-400" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform">{companyInfo.phone}</span>
                </a>
                <div className="flex items-start text-gray-400 group">
                  <div className="mr-3 p-2 bg-gray-800/50 dark:bg-gray-900/50 rounded-lg mt-0.5">
                    <MapPin size={16} className="text-primary-400" />
                  </div>
                  <span className="leading-relaxed">
                    {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                  </span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className={`relative bg-gray-800 dark:bg-gray-900 rounded-full p-3 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/20`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="px-2">
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleLinkClick(e, link.path, link.hash)}
                    className="group relative inline-block text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants} className="px-2">
            <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
              Legal
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group relative inline-block text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="mt-16 lg:mt-20 pt-8 lg:pt-10 border-t border-gray-800/50 dark:border-gray-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm lg:text-base">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
