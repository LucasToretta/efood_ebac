import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'

import { Container, Grid } from './styles'

import { getRestaurantes } from '../../services/api'
import type { Restaurante } from '../../Types/efood'

export default function Home() {
    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

    useEffect(() => {
        getRestaurantes().then(setRestaurantes)
    }, [])

    return (
        <>
            <Header />
            <Container>
                <Grid>
                    {restaurantes.map((restaurante) => (
                        <RestaurantCard
                            key={restaurante.id}
                            restaurant={restaurante}
                        />
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
