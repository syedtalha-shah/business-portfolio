import { teamMembers } from '../../data/team'
import TeamCard from './TeamCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const TeamSection = () => {
  const { ref, inView } = useScrollAnimation()

  if (!teamMembers || teamMembers.length === 0) {
    return (
      <section id="team" className="section bg-white dark:bg-gray-900" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet the talented professionals who make it all happen
            </p>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No team members to display.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="team" className="section bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the talented professionals who make it all happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

