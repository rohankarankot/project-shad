import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import {  LocationDetails } from "~/types/common.types"

const initialState: LocationDetails = {
  coords: { latitude: null, longitude: null },
  address: {
    country: "",
    country_code: "",
    county: "",
    postcode: "",
    state: "",
    state_district: "",
    village: "",
  },
}

export const geoLocation = createSlice({
  name: "geoLocation",
  initialState,
  reducers: {
    storeLocation: (state, action: PayloadAction<LocationDetails>) => {
      state.coords.latitude = action.payload.coords.latitude
      state.coords.longitude = action.payload.coords.longitude
      state.address = action.payload.address
    },
    getLocationDetails: (state: LocationDetails) => state,
  },
})

export const { storeLocation, getLocationDetails } = geoLocation.actions

export default geoLocation.reducer
