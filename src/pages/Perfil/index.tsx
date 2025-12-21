import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import HeaderPerfil from '../../components/HeaderPerfil'
import Footer from '../../components/Footer'
import ProductModal from '../../components/ProductModals'

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

import { getRestaurantePorId } from '../../services/api'
import type { Restaurante, Produto } from '../../Types/efood'

type Params = {
    id: string
}

export default function Perfil() {
    const { id } = useParams<Params>()

    const [restaurante, setRestaurante] = useState<Restaurante | null>(null)
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

    useEffect(() => {
        if (!id) return
        getRestaurantePorId(Number(id)).then(setRestaurante)
    }, [id])

    if (!restaurante) {
        return null
    }

    return (
        <>
            <HeaderPerfil />

            <Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
                <BannerContent>
                    <Categoria>{restaurante.tipo}</Categoria>
                    <Titulo>{restaurante.titulo}</Titulo>
                </BannerContent>
            </Banner>

            <Container>
                <Grid>
                    {restaurante.cardapio.map((item) => (
                        <Card key={item.id}>
                            <CardImage src={item.foto} alt={item.nome} />
                            <CardTitle>{item.nome}</CardTitle>
                            <CardDesc>{item.descricao}</CardDesc>
                            <CardButton onClick={() => setProdutoSelecionado(item)}>
                                Comprar
                            </CardButton>
                        </Card>
                    ))}
                </Grid>
            </Container>

            {produtoSelecionado && (
                <ProductModal
                    produto={produtoSelecionado}
                    onClose={() => setProdutoSelecionado(null)}
                />
            )}

            <Footer />
        </>
    )
}
