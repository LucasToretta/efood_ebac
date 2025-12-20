import { HeaderBar, Container, LogoWrapper, HeroTitle } from './styles'
import logo from '../../assets/efood.svg'

export default function Header() {
    return (
        <HeaderBar>
            <Container>
                <LogoWrapper>
                    <img src={logo} alt="efood" />
                </LogoWrapper>

                <HeroTitle>
                    <span>Viva experiências gastronômicas</span>
                    no conforto da sua casa
                </HeroTitle>
            </Container>
        </HeaderBar>
    )
}
