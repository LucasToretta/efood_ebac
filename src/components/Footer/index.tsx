import { FooterBar, Container, LogoWrapper, SocialList, SocialItem, FooterText } from './styles'

import logo from '../../assets/efood.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'

export default function Footer() {
    return (
        <FooterBar>
            <Container>
                <LogoWrapper>
                    <img src={logo} alt="efood" />
                </LogoWrapper>

                <SocialList>
                    <SocialItem href="#">
                        <img src={instagram} alt="Instagram" />
                    </SocialItem>
                    <SocialItem href="#">
                        <img src={facebook} alt="Facebook" />
                    </SocialItem>
                    <SocialItem href="#">
                        <img src={twitter} alt="Twitter" />
                    </SocialItem>
                </SocialList>

                <FooterText>
                    A efood é uma plataforma para divulgação de estabelecimentos, a
                    responsabilidade pela entrega, qualidade dos produtos é toda do
                    estabelecimento contratado.
                </FooterText>
            </Container>
        </FooterBar>
    )
}
