import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, Mail, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import Card from '../common/Card'

const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
})

const NewsletterForm = ({ onSubscribe }) => {
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(newsletterSchema),
    mode: 'onBlur'
  })

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      if (onSubscribe) {
        onSubscribe(data.email)
      }
      
      setSubmitStatus('success')
      reset()
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card elevated className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-primary-600 dark:bg-primary-500 rounded-lg">
          <Mail className="text-white" size={20} />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Subscribe to Newsletter
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
        Stay updated with our latest news, projects, and insights.
      </p>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <div className="flex gap-2">
            <input
              type="email"
              {...register('email')}
              className={`flex-1 px-4 py-3 border rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
              }`}
              placeholder="Enter your email"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </div>
          <AnimatePresence>
            {errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-1 text-sm text-red-500 flex items-center gap-1"
              >
                <XCircle size={14} />
                {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          By subscribing, you agree to our{' '}
          <Link
            to="/privacy"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Privacy Policy
          </Link>
          . We respect your privacy and will never spam you.
        </p>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 flex items-center gap-2"
            >
              <CheckCircle className="text-green-600 dark:text-green-400" size={18} />
              <p className="text-sm text-green-800 dark:text-green-300">
                Successfully subscribed! Check your email for confirmation.
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 flex items-center gap-2"
            >
              <XCircle className="text-red-600 dark:text-red-400" size={18} />
              <p className="text-sm text-red-800 dark:text-red-300">
                Subscription failed. Please try again.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </Card>
  )
}

export default NewsletterForm

