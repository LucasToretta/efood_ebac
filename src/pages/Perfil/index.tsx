// src/pages/Perfil/index.tsx
import { useState } from 'react'
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

import { useGetRestaurantePorIdQuery } from '../../services/api'
import type { Produto } from '../../Types/efood'

export default function Perfil() {
    const { id } = useParams()
    const idNum = Number(id)

    const { data: restaurante, isLoading, isError } = useGetRestaurantePorIdQuery(
        idNum,
        { skip: !id || Number.isNaN(idNum) }
    )

    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null)

    if (!id || Number.isNaN(idNum)) {
        return (
            <>
                <HeaderPerfil />
                <Container>Restaurante inválido.</Container>
                <Footer />
            </>
        )
    }

    if (isLoading) {
        return (
            <>
                <HeaderPerfil />
                <Container>Carregando...</Container>
                <Footer />
            </>
        )
    }

    if (isError || !restaurante) {
        return (
            <>
                <HeaderPerfil />
                <Container>Não foi possível carregar o restaurante.</Container>
                <Footer />
            </>
        )
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
                            <CardButton type="button" onClick={() => setProdutoSelecionado(item)}>
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
