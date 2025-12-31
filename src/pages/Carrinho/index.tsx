import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store'
import { fechar, remover } from './carrinhoSlice'

import Checkout from '../checkout'

import {
    Overlay,
    Sidebar,
    Item,
    ItemImg,
    ItemInfo,
    ItemTitle,
    ItemPrice,
    RemoveButton,
    Footer,
    TotalRow,
    CheckoutButton
} from './styles'

const formataPreco = (valor: number) =>
    valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

type Etapa = 'carrinho' | 'checkout'

export default function Carrinho() {
    const dispatch = useDispatch<AppDispatch>()
    const { itens, isOpen } = useSelector((state: RootState) => state.carrinho)
    const [etapa, setEtapa] = useState<Etapa>('carrinho')

    if (!isOpen) return null

    const total = itens.reduce(
        (acc, item) => acc + item.preco * item.quantidade,
        0
    )

    return (
        <>
            <Overlay onClick={() => dispatch(fechar())} />

            <Sidebar>
                {etapa === 'carrinho' && (
                    <>
                        {itens.map((item) => (
                            <Item key={item.id}>
                                <ItemImg src={item.foto} alt={item.nome} />
                                <ItemInfo>
                                    <ItemTitle>{item.nome}</ItemTitle>
                                    <ItemPrice>{formataPreco(item.preco)}</ItemPrice>
                                </ItemInfo>
                                <RemoveButton
                                    type="button"
                                    onClick={() => dispatch(remover(item.id))}
                                >
                                    🗑️
                                </RemoveButton>
                            </Item>
                        ))}

                        <Footer>
                            <TotalRow>
                                <span>Valor total</span>
                                <span>{formataPreco(total)}</span>
                            </TotalRow>

                            <CheckoutButton type="button" onClick={() => setEtapa('checkout')}>
                                Continuar com a entrega
                            </CheckoutButton>
                        </Footer>
                    </>
                )}

                {etapa === 'checkout' && (
                    <Checkout onBackToCart={() => setEtapa('carrinho')} />
                )}
            </Sidebar>
        </>
    )
}
