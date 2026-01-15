import { lazy, Suspense } from 'react'
import Loading from '../components/common/Loading'

// Lazy load heavy components for code splitting
const HeroSection = lazy(() => import('../components/Hero/HeroSection'))
const ProjectShowcase = lazy(() => import('../components/Projects/ProjectShowcase'))
const ServicesSection = lazy(() => import('../components/Services/ServicesSection'))
const StatsSection = lazy(() => import('../components/Statistics/StatsSection'))
const TestimonialCarousel = lazy(() => import('../components/Testimonials/TestimonialCarousel'))
const CompanyTimeline = lazy(() => import('../components/Timeline/CompanyTimeline'))
const TeamSection = lazy(() => import('../components/Team/TeamSection'))
const FoundersSection = lazy(() => import('../components/Founders/FoundersSection'))
const ContactSection = lazy(() => import('../components/Contact/ContactSection'))

const Home = () => {
  return (
    <>
      <Suspense fallback={<Loading size="lg" fullScreen />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <ProjectShowcase />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <TestimonialCarousel />
      </Suspense>
      {/* <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <CompanyTimeline />
      </Suspense> */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <FoundersSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loading /></div>}>
        <ContactSection />
      </Suspense>
    </>
  )
}

export default Home

