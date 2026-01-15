import { createContext, useContext } from 'react'

const AnimationContext = createContext()

export const useAnimation = () => {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider')
  }
  return context
}

// AnimationProvider will be implemented in Phase 2
export const AnimationProvider = ({ children }) => {
  const value = {
    // Animation settings will be added in Phase 2
  }

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  )
}

