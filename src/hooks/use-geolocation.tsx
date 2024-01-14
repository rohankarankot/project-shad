import { GeolocationHook, LocationCoords } from "~/types/common.types"
import { useEffect, useState } from "react"
import { useAppDispatch } from "~/app/hooks"
import { storeLocation } from "~/app/store/features/geo-location/location.slice"
import { useLazyGetDetailsFromLocationQuery } from "~/app/store/features/geo-location/api"

const useGeolocation = (): GeolocationHook => {
  const [location, setLocation] = useState<LocationCoords>({ latitude: null, longitude: null })
  const dispatch = useAppDispatch()

  const [error, setError] = useState<string | null>(null)

  const [getDetailsFromLocation, results] = useLazyGetDetailsFromLocationQuery()

  const successCallback = (position: GeolocationPosition) => {
    const location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }
    setLocation(location)

    if (location) {
      getDetailsFromLocation(location)
    }
  }

  const errorCallback = (err: GeolocationPositionError) => {
    setError(err.message)
  }

  const askForLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  useEffect(() => {
    askForLocationPermission()
  }, [])
  useEffect(() => {
    if (results?.data) {
      const { country, country_code, county, postcode, state, state_district, village } = results?.data?.address || {}
      dispatch(
        storeLocation({
          coords: location,
          address: {
            addressLine:"",
            country,
            country_code,
            county,
            postcode,
            state,
            state_district,
            village,
          },
        }),
      )
    }
  }, [results?.data])

  return { location, error, askForLocationPermission }
}

export default useGeolocation
