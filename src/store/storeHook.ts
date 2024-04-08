import { SERVER_BASE_URL } from "@configs/index"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getToken } from "@utils/getToken"
import { GetResponseInterface, PostResponseInterface } from "interfaces"

export const fetchAllQuery = createApi({
  reducerPath: "fetchAllQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getToken()
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    get: builder.query({
      query: (url) => url,
      transformResponse: (res: GetResponseInterface) => res.data
    }),
    post: builder.mutation({
      query: ({ url, body }) => ({
        url,
        method: "POST",
        body
      }),
      transformResponse: (res: PostResponseInterface) => res.data
    })
  })
})

export const { useGetQuery, usePostMutation } = fetchAllQuery
