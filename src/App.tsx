import { useEffect, useState } from 'react'
import { LocationDisplay } from './LocationDisplay'
import { GeoLocation } from './geo'

const canGetLocation = "geolocation" in navigator

function App() {
  const [yourLocation, setYourLocation] = useState<GeoLocation|undefined>()

  const handleLocationUpdate = (pos: GeolocationPosition) => {
    setYourLocation(pos)
  }

  const handleLocationError = (err: GeolocationPositionError) => {
    console.error(`Error ${err.code} while getting location: ${err.message}`)
  }

  useEffect(() => {
    // Check if we are running on a device that has location capability
    if(canGetLocation){
      // subscribe to location updates
      const watchId = navigator.geolocation.watchPosition(handleLocationUpdate, handleLocationError, {enableHighAccuracy: true})

      // clean up subscription when the component unmounts
      return () => navigator.geolocation.clearWatch(watchId)
    }
  }, [])
  
  return (
    <>
      <h1>Your Location</h1>
      {canGetLocation ? 
        <LocationDisplay location={yourLocation} />
        :
        <p>Your device does not support geo locating, sorry :(</p>
      }
    </>
  )
}

export default App
