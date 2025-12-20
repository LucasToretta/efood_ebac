import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import { restaurants } from '../../data/restaurants'

import {
    Banner,
    BannerContent,
    Categoria,
    Titulo,
    Container,
    Grid,
    Card,
    CardImage,
    CardTitle,
    CardDesc,
    CardButton
} from './styles'

type RouteParams = {
    id: string
}

export default function Perfil() {
    const { id } = useParams<RouteParams>()
    const restaurante = restaurants.find(
        (r) => r.id === Number(id)
    )

    if (!restaurante) {
        return null
    }

    return (
        <>
            {/* Header específico da segunda página */}
            <HeaderPerfil cartCount={0} />

            {/* Banner do restaurante */}
            <Banner
                style={{ backgroundImage: `url(${restaurante.imagem})` }}
            >
                <BannerContent>
                    <Categoria>{restaurante.categoria}</Categoria>
                    <Titulo>{restaurante.nome}</Titulo>
                </BannerContent>
            </Banner>

            {/* Listagem de pratos (6 cards) */}
            <Container>
                <Grid>
                    {restaurante.cardapio.map((item) => (
                        <Card key={item.id}>
                            <CardImage src={item.foto} alt={item.nome} />
                            <CardTitle>{item.nome}</CardTitle>
                            <CardDesc>{item.descricao}</CardDesc>
                            <CardButton>Adicionar ao carrinho</CardButton>
                        </Card>
                    ))}
                </Grid>
            </Container>

            <Footer />
        </>
    )
}
