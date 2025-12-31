import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Restaurante } from '../Types/efood'

const BASE_URL = 'https://fake-api-havokk.vercel.app/api/efood'
const CHECKOUT_URL = 'https://api-ebac.vercel.app/api/efood'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getRestaurantes: builder.query<Restaurante[], void>({
            query: () => 'restaurantes'
        }),
        getRestaurantePorId: builder.query<Restaurante, number>({
            query: (id) => `restaurantes/${id}`
        }),
        finalizarPedido: builder.mutation<unknown, unknown>({
            query: (body) => ({
                url: `${CHECKOUT_URL}/checkout`,
                method: 'POST',
                body
            })
        })
    })
})

export const {
    useGetRestaurantesQuery,
    useGetRestaurantePorIdQuery,
    useFinalizarPedidoMutation
} = api
