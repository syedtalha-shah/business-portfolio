import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout/Layout'
import Loading from './components/common/Loading'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <Loading size="lg" fullScreen />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/cookies" element={<CookiePolicy />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App

