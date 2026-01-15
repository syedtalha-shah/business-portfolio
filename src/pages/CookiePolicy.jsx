import { motion } from 'framer-motion'
import { companyInfo } from '../data/companyInfo'

const CookiePolicy = () => {
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
            Cookie Policy
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
              <li><a href="#what-are-cookies" className="hover:text-primary-600 dark:hover:text-primary-400">1. What Are Cookies</a></li>
              <li><a href="#how-we-use" className="hover:text-primary-600 dark:hover:text-primary-400">2. How We Use Cookies</a></li>
              <li><a href="#types-of-cookies" className="hover:text-primary-600 dark:hover:text-primary-400">3. Types of Cookies We Use</a></li>
              <li><a href="#third-party" className="hover:text-primary-600 dark:hover:text-primary-400">4. Third-Party Cookies</a></li>
              <li><a href="#managing-cookies" className="hover:text-primary-600 dark:hover:text-primary-400">5. Managing Cookies</a></li>
              <li><a href="#cookie-consent" className="hover:text-primary-600 dark:hover:text-primary-400">6. Cookie Consent</a></li>
              <li><a href="#updates" className="hover:text-primary-600 dark:hover:text-primary-400">7. Updates to This Policy</a></li>
              <li><a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400">8. Contact Us</a></li>
            </ul>
          </nav>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section id="what-are-cookies" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">1. What Are Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Cookies allow a website to recognize your device and store some information about your preferences or past actions. This helps improve your browsing experience by remembering your settings and preferences.
              </p>
            </section>

            <section id="how-we-use" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">2. How We Use Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cookies enable core functionality such as security, network management, and accessibility.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.</li>
                <li><strong>Preference Cookies:</strong> Remember your preferences and settings (e.g., theme selection, language preferences) to provide a more personalized experience.</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. These cookies may be set by our advertising partners.</li>
              </ul>
            </section>

            <section id="types-of-cookies" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.1 Session Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Session cookies are temporary cookies that are deleted when you close your browser. They are used to maintain your session while you navigate through our website and are essential for the website to function properly.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.2 Persistent Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Persistent cookies remain on your device for a set period or until you delete them. These cookies remember your preferences and settings, making your next visit more convenient.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.3 First-Party Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                First-party cookies are set directly by our website. These cookies are used to provide core functionality and remember your preferences.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">3.4 Third-Party Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Third-party cookies are set by domains other than our website. These are typically used for analytics, advertising, and social media integration.
              </p>
            </section>

            <section id="third-party" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">4. Third-Party Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies and you should check the third-party websites for more information about their cookies.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Third-party services we may use include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Google Maps:</strong> To display interactive maps on our contact page</li>
                <li><strong>Social Media Platforms:</strong> For social media integration and sharing features</li>
              </ul>
            </section>

            <section id="managing-cookies" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">5. Managing Cookies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                You can control and manage cookies in various ways:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5.1 Browser Settings</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Most browsers allow you to refuse or accept cookies. You can also delete cookies that have already been set. Here's how to manage cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5.2 Impact of Disabling Cookies</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Please note that disabling cookies may affect the functionality of our website. Some features may not work properly if cookies are disabled, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>Theme preferences (dark/light mode)</li>
                <li>Form submissions and validation</li>
                <li>Personalized content and recommendations</li>
                <li>Analytics and performance tracking</li>
              </ul>
            </section>

            <section id="cookie-consent" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">6. Cookie Consent</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                When you first visit our website, you may be presented with a cookie consent banner. By clicking "Accept" or continuing to use our website, you consent to our use of cookies as described in this policy.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                You can withdraw your consent at any time by adjusting your browser settings or contacting us. However, this may impact your ability to use certain features of our website.
              </p>
            </section>

            <section id="updates" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">7. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
              </p>
            </section>

            <section id="contact" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">8. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

export default CookiePolicy
