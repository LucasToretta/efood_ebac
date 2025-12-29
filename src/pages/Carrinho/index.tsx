import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import type { RootState, AppDispatch } from '../../store'
import { fechar, remover } from './carrinhoSlice'
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

export default function Carrinho() {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const { itens, isOpen } = useSelector((state: RootState) => state.carrinho)

    if (!isOpen) return null

    const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0)

    const irParaEntrega = () => {
        dispatch(fechar())
        navigate('/entrega')
    }

    return (
        <>
            <Overlay onClick={() => dispatch(fechar())} />
            <Sidebar>
                {itens.map((item) => (
                    <Item key={item.id}>
                        <ItemImg src={item.foto} alt={item.nome} />
                        <ItemInfo>
                            <ItemTitle>{item.nome}</ItemTitle>
                            <ItemPrice>{formataPreco(item.preco)}</ItemPrice>
                        </ItemInfo>
                        <RemoveButton type="button" onClick={() => dispatch(remover(item.id))}>
                            🗑️
                        </RemoveButton>
                    </Item>
                ))}

                <Footer>
                    <TotalRow>
                        <span>Valor total</span>
                        <span>{formataPreco(total)}</span>
                    </TotalRow>

                    <CheckoutButton type="button" onClick={irParaEntrega}>
                        Continuar com a entrega
                    </CheckoutButton>
                </Footer>
            </Sidebar>
        </>
    )
}
