import { Award, GraduationCap, Briefcase, MapPin } from 'lucide-react'
import Modal from '../common/Modal'

const FounderModal = ({ founder, isOpen, onClose }) => {
  if (!founder) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" className="max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {founder.name}
          </h2>
          <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
            {founder.role}
          </p>
          {founder.location && (
            <div className="flex items-center justify-center gap-2 mt-2 text-gray-600 dark:text-gray-400">
              <MapPin size={16} />
              <span>{founder.location}</span>
            </div>
          )}
        </div>

        {/* Bio */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Biography</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{founder.bio}</p>
        </div>

        {/* Quote */}
        {founder.quote && (
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border-l-4 border-primary-600">
            <p className="text-gray-700 dark:text-gray-300 italic text-lg">
              "{founder.quote}"
            </p>
          </div>
        )}

        {/* Achievements */}
        {founder.achievements && founder.achievements.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Award className="text-primary-600" size={24} />
              Achievements
            </h3>
            <div className="space-y-4">
              {founder.achievements.map((achievement, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {founder.education && founder.education.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <GraduationCap className="text-primary-600" size={24} />
              Education
            </h3>
            <div className="space-y-3">
              {founder.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.institution} • {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Career */}
        {founder.career && founder.career.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <Briefcase className="text-primary-600" size={24} />
              Career History
            </h3>
            <div className="space-y-4">
              {founder.career.map((job, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {job.position}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expertise */}
        {founder.expertise && founder.expertise.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {founder.expertise.map((exp, index) => (
                <span
                  key={index}
                  className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Fun Facts */}
        {founder.funFacts && founder.funFacts.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Fun Facts
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              {founder.funFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default FounderModal

