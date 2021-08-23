import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.monobank.ua/bank/' }),
  endpoints: (builder) => ({
    getCurrency: builder.query({
      query: () => 'currency'
    })
  })
})

export const { useGetCurrencyQuery } = Api
