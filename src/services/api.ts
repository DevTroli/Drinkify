import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchaseResponse = {
  orderId: string
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://drinkify-api.vercel.app/'
  }),
  endpoints: (builder) => ({
    getBarsList: builder.query<BarClass[], void>({
      query: () => 'bares'
    }),
    getBars: builder.query<BarClass, string>({
      query: (id) => `bares/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetBarsListQuery, useGetBarsQuery, usePurchaseMutation } = api
export default api
