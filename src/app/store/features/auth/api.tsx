import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const loginRegisterAPI = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    authAPI: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
    getProfileDetails: builder.query({
      query: () => ({
        url: `/users/profile`,
        headers: {
          Authorization: `Bearer ${global?.window?.sessionStorage.getItem("token")}`,
        },
      }),
    }),
  }),
})

export const { useAuthAPIMutation, useGetProfileDetailsQuery } = loginRegisterAPI
