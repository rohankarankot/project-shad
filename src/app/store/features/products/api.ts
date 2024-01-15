import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ProductsAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: (productId:string) => ({
        url: `/post/${productId}`,
        
      }),
    }),
  }),
})

export const { useLazyGetProductDetailsQuery} = ProductsAPI
