const Skeleton = ({ 
  width = 'w-full', 
  height = 'h-4', 
  className = '',
  rounded = true 
}) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${width} ${height} ${
        rounded ? 'rounded' : ''
      } ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

// Pre-built skeleton components
export const SkeletonText = ({ lines = 3, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 ? 'w-3/4' : 'w-full'}
          height="h-4"
        />
      ))}
    </div>
  )
}

export const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`p-6 space-y-4 ${className}`}>
      <Skeleton width="w-1/2" height="h-6" />
      <SkeletonText lines={3} />
      <Skeleton width="w-1/4" height="h-4" />
    </div>
  )
}

export default Skeleton

