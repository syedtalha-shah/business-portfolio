import { motion } from 'framer-motion'
import { companyInfo } from '../data/companyInfo'

const TermsAndConditions = () => {
  const lastUpdated = new Date('2024-01-15').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {lastUpdated}
          </p>

          {/* Table of Contents */}
          <nav className="mb-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Table of Contents
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><a href="#introduction" className="hover:text-primary-600 dark:hover:text-primary-400">1. Introduction</a></li>
              <li><a href="#use-license" className="hover:text-primary-600 dark:hover:text-primary-400">2. Use License</a></li>
              <li><a href="#disclaimer" className="hover:text-primary-600 dark:hover:text-primary-400">3. Disclaimer</a></li>
              <li><a href="#limitations" className="hover:text-primary-600 dark:hover:text-primary-400">4. Limitations</a></li>
              <li><a href="#intellectual-property" className="hover:text-primary-600 dark:hover:text-primary-400">5. Intellectual Property</a></li>
              <li><a href="#user-content" className="hover:text-primary-600 dark:hover:text-primary-400">6. User Content</a></li>
              <li><a href="#privacy" className="hover:text-primary-600 dark:hover:text-primary-400">7. Privacy</a></li>
              <li><a href="#revisions" className="hover:text-primary-600 dark:hover:text-primary-400">8. Revisions</a></li>
              <li><a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400">9. Contact Information</a></li>
            </ul>
          </nav>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section id="introduction" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Welcome to {companyInfo.name} ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your access to and use of our website located at [website URL] (the "Service"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access the Service.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service. Please read these Terms carefully before using our Service.
              </p>
            </section>

            <section id="use-license" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">2. Use License</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Permission is granted to temporarily view the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            <section id="disclaimer" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">3. Disclaimer</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section id="limitations" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">4. Limitations</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section id="intellectual-property" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">5. Intellectual Property</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                The Service and its original content, features, and functionality are and will remain the exclusive property of {companyInfo.name} and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>
            </section>

            <section id="user-content" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">6. User Content</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("User Content"). You are responsible for User Content that you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                By posting User Content on or through the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such User Content on and through the Service.
              </p>
            </section>

            <section id="privacy" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">7. Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices. By using the Service, you consent to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section id="revisions" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">8. Revisions</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We may revise these Terms of Service at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service. We encourage you to review these Terms periodically for any changes.
              </p>
            </section>

            <section id="contact" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">9. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${companyInfo.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {companyInfo.email}
                  </a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${companyInfo.phone}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {companyInfo.phone}
                  </a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Address:</strong> {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsAndConditions

