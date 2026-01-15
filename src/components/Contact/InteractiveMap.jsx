import { useEffect, useRef, useState } from 'react'
import { MapPin, ExternalLink, AlertCircle } from 'lucide-react'

const InteractiveMap = ({ location, marker }) => {
  const mapRef = useRef(null)
  const [mapError, setMapError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

    if (!apiKey) {
      setMapError(true)
      setErrorMessage('API key not configured. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.')
      return
    }

    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      
      script.onload = () => {
        // Small delay to ensure Google Maps is fully loaded
        setTimeout(() => {
          try {
            if (window.google && window.google.maps) {
              initMap()
              setIsLoaded(true)
            } else {
              throw new Error('Google Maps API not available')
            }
          } catch (error) {
            console.error('Google Maps initialization error:', error)
            setMapError(true)
            setErrorMessage('Failed to initialize map. Please check your API key configuration and ensure Maps JavaScript API is enabled.')
          }
        }, 100)
      }
      
      script.onerror = () => {
        setMapError(true)
        setErrorMessage('Failed to load Google Maps script. Please check your API key and ensure Maps JavaScript API is enabled in Google Cloud Console.')
      }
      
      document.head.appendChild(script)
    } else {
      try {
        initMap()
        setIsLoaded(true)
      } catch (error) {
        console.error('Google Maps initialization error:', error)
        setMapError(true)
        setErrorMessage('Failed to initialize map. Please check your API key configuration.')
      }
    }

    function initMap() {
      if (!mapRef.current || !window.google) {
        throw new Error('Map container or Google Maps not available')
      }

      try {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: location.lat, lng: location.lng },
          zoom: 15,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#c9c9c9' }]
            }
          ]
        })

        // Add marker
        if (marker) {
          const mapMarker = new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: marker.title
          })

          // Info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; max-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${marker.title}</h3>
                <p style="margin: 0; font-size: 14px; color: #666;">${marker.description}</p>
              </div>
            `
          })

          mapMarker.addListener('click', () => {
            infoWindow.open(map, mapMarker)
          })

          // Open info window by default
          infoWindow.open(map, mapMarker)
        }
      } catch (error) {
        console.error('Error creating map:', error)
        throw error
      }
    }

    return () => {
      // Cleanup if needed
    }
  }, [location, marker])

  if (mapError || !import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
    return (
      <div className="w-full h-64 md:h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
        <div className="text-center p-6 max-w-md">
          <AlertCircle className="mx-auto text-yellow-500 dark:text-yellow-400 mb-3" size={40} />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Map Unavailable
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {errorMessage || 'Google Maps API key is not configured.'}
          </p>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-left text-xs text-gray-600 dark:text-gray-400">
            <p className="font-semibold mb-2">To fix this:</p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Get API key from <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Google Cloud Console</a></li>
              <li>Enable "Maps JavaScript API"</li>
              <li>Add key to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.env</code> file:</li>
            </ol>
            <code className="block mt-2 p-2 bg-gray-200 dark:bg-gray-700 rounded text-xs">
              VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
            </code>
            <p className="mt-3 text-xs">
              <strong>Note:</strong> For development, allow <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">localhost:3000/*</code> in API key restrictions.
            </p>
          </div>
          {marker && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
            >
              <ExternalLink size={16} />
              Open in Google Maps
            </a>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div ref={mapRef} className="w-full h-full" />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2" />
            <p className="text-gray-600 dark:text-gray-400 text-sm">Loading map...</p>
          </div>
        </div>
      )}
      {marker && (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <ExternalLink size={16} />
          Open in Google Maps
        </a>
      )}
    </div>
  )
}

export default InteractiveMap

