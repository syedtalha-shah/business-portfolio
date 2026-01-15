import { founders } from '../../data/founders'
import FounderCard from './FounderCard'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const FoundersSection = () => {
  const { ref, inView } = useScrollAnimation()

  const founder = founders.find((f) => f.isFounder)
  const coFounder = founders.find((f) => !f.isFounder)

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Founders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The visionaries behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founder && <FounderCard founder={founder} isFounder={true} />}
          {coFounder && <FounderCard founder={coFounder} isFounder={false} />}
        </div>
      </div>
    </section>
  )
}

export default FoundersSection

