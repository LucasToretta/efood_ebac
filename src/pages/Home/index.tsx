import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import { useGetRestaurantesQuery } from '../../services/api'
import { Container, Grid } from './styles'

export default function Home() {
    const { data: restaurantes = [], isLoading } = useGetRestaurantesQuery()

    if (isLoading) {
        return (
            <>
                <Header />
                <Container>Carregando...</Container>
                <Footer />
            </>
        )
    }

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
