import { motion } from 'framer-motion'
import { companyInfo } from '../data/companyInfo'

const PrivacyPolicy = () => {
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
            Privacy Policy
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
              <li><a href="#information-we-collect" className="hover:text-primary-600 dark:hover:text-primary-400">2. Information We Collect</a></li>
              <li><a href="#how-we-use" className="hover:text-primary-600 dark:hover:text-primary-400">3. How We Use Your Information</a></li>
              <li><a href="#data-sharing" className="hover:text-primary-600 dark:hover:text-primary-400">4. Data Sharing and Disclosure</a></li>
              <li><a href="#data-protection" className="hover:text-primary-600 dark:hover:text-primary-400">5. Data Protection</a></li>
              <li><a href="#cookies" className="hover:text-primary-600 dark:hover:text-primary-400">6. Cookies and Tracking</a></li>
              <li><a href="#your-rights" className="hover:text-primary-600 dark:hover:text-primary-400">7. Your Rights (GDPR)</a></li>
              <li><a href="#children" className="hover:text-primary-600 dark:hover:text-primary-400">8. Children's Privacy</a></li>
              <li><a href="#changes" className="hover:text-primary-600 dark:hover:text-primary-400">9. Changes to This Policy</a></li>
              <li><a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400">10. Contact Us</a></li>
            </ul>
          </nav>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section id="introduction" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {companyInfo.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section id="information-we-collect" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">2. Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We may collect and process the following types of personal information:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence you send to us</li>
                <li><strong>Account Information:</strong> Username, password, and other account details (if applicable)</li>
                <li><strong>Newsletter Subscriptions:</strong> Email address and subscription preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Usage Data:</strong> Information about how you access and use our website</li>
                <li><strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
                <li><strong>Cookies and Tracking:</strong> Data collected through cookies and similar tracking technologies</li>
                <li><strong>Analytics Data:</strong> Page views, time spent on pages, click patterns, and navigation paths</li>
              </ul>
            </section>

            <section id="how-we-use" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>To Provide and Maintain Our Service:</strong> Operate, maintain, and improve our website</li>
                <li><strong>To Respond to Your Inquiries:</strong> Answer questions, provide customer support, and handle requests</li>
                <li><strong>To Send Communications:</strong> Send newsletters, updates, and marketing materials (with your consent)</li>
                <li><strong>To Improve User Experience:</strong> Analyze usage patterns and optimize website performance</li>
                <li><strong>To Ensure Security:</strong> Detect, prevent, and address technical issues and security threats</li>
                <li><strong>To Comply with Legal Obligations:</strong> Meet legal requirements and respond to legal processes</li>
              </ul>
            </section>

            <section id="data-sharing" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> When you have given explicit consent for specific sharing</li>
              </ul>
            </section>

            <section id="data-protection" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">5. Data Protection</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security. You are responsible for maintaining the confidentiality of any account credentials you may have.
              </p>
            </section>

            <section id="cookies" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website. For more detailed information, please see our <a href="/cookies" className="text-primary-600 dark:text-primary-400 hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section id="your-rights" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">7. Your Rights (GDPR & CCPA)</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data under certain circumstances</li>
                <li><strong>Right to Restrict Processing:</strong> Request restriction of processing your personal data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                To exercise any of these rights, please contact us using the information provided in the Contact section.
              </p>
            </section>

            <section id="children" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">8. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section id="changes" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section id="contact" className="mb-12 scroll-mt-20">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">10. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

export default PrivacyPolicy
