export interface LocationCoords {
  latitude: number | null
  longitude: number | null
}

export interface LocationDetails {
  coords: { latitude: number | null; longitude: number | null }
  address: {
    addressLine: string
    country: string
    country_code: string
    city: string
    postcode: string
    state: string
    state_district: string
    village: string
  }
}

export interface GeolocationHook {
  location?: LocationCoords
  error: string | null
  askForLocationPermission: () => void
}
