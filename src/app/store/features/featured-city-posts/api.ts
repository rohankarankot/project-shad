import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const GetPostsFromCity = createApi({
  reducerPath: "postsFromCity",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getAllPostFromCity: builder.query({
      query: (data: { city: string; page: number; limit: number }) => ({
        url: `/post/city/all`,
        params: {
          city: data.city,
          page:data.page,
          limit:data.limit,
        },
      }),
    }),
  }),
})

export const { useLazyGetAllPostFromCityQuery } = GetPostsFromCity
