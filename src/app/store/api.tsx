import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const loginRegisterAPI = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    authAPI: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const { useAuthAPIMutation } = loginRegisterAPI
