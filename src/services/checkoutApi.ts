import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = '/api/efood'

export type CheckoutItem = {
    id: number
    price: number
}

export type CheckoutPayload = {
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement?: string
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
    products: CheckoutItem[]
}

export type CheckoutResponse = {
    orderId: string
}

export const checkoutApi = createApi({
    reducerPath: 'checkoutApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        checkout: builder.mutation<CheckoutResponse, CheckoutPayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'POST',
                body
            })
        })
    })
})

export const { useCheckoutMutation } = checkoutApi
