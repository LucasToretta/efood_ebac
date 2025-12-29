import logo from '../../assets/efood.svg'
import { HeaderBar, Container, NavLink, CartButton, LogoWrapper } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { abrir } from '../../pages/Carrinho/carrinhoSlice'
import type { RootState } from '../../store'

export default function HeaderPerfil() {
    const dispatch = useDispatch()
    const { itens } = useSelector((state: RootState) => state.carrinho)

    return (
        <HeaderBar>
            <Container>
                <NavLink to="/">Restaurantes</NavLink>

                <LogoWrapper>
                    <img src={logo} alt="efood" />
                </LogoWrapper>

                <CartButton type="button" onClick={() => dispatch(abrir())}>
                    {itens.length} produto(s) no carrinho
                </CartButton>
            </Container>
        </HeaderBar>
    )
}

