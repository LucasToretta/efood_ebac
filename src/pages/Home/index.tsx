import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import Footer from '../../components/Footer'
import { restaurants } from '../../data/restaurants'
import { Container, Grid } from './styles'

export default function Home() {
    return (
        <>
            <Header />
            <Container>
                <Grid>
                    {restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    )
}
