import type { Restaurante } from '../Types/efood'

const BASE_URL = 'https://api-ebac.vercel.app/api/efood'

export async function getRestaurantes(): Promise<Restaurante[]> {
    const res = await fetch(`${BASE_URL}/restaurantes`)
    return res.json()
}

export async function getRestaurantePorId(id: number): Promise<Restaurante> {
    const res = await fetch(`${BASE_URL}/restaurantes/${id}`)
    return res.json()
}
