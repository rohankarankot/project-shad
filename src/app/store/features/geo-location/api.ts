import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Location } from "~/types/common.types"

export const GeoLocationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_GEO_CODE_MAPS_URL }),
  endpoints: (builder) => ({
    getDetailsFromLocation: builder.query({
      query: (data: Location) => ({
        url: `/reverse`,
        params: {
          lat: data.latitude,
          lon: data.longitude,
          api_key: process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY,
        },
      }),
    }),
  }),
})

export const { useLazyGetDetailsFromLocationQuery } = GeoLocationApi
