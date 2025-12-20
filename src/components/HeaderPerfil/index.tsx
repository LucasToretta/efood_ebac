import logo from '../../assets/efood.svg'
import { HeaderBar, Container, NavLink, CartLink, LogoWrapper } from './styles'

export default function HeaderPerfil({ cartCount = 0 }) {
    return (
        <HeaderBar>
            <Container>
                <NavLink to="/">Restaurantes</NavLink>

                <LogoWrapper>
                    <img src={logo} alt="efood" />
                </LogoWrapper>

                <CartLink to="/carrinho">
                    {cartCount} produto(s) no carrinho
                </CartLink>
            </Container>
        </HeaderBar>
    )
}
