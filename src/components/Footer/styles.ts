import styled from 'styled-components'

export const FooterBar = styled.footer`
    width: 100%;
    height: 298px;
    background-color: #ffe9d9;
    display: flex;
    justify-content: center;
    `

export const Container = styled.div`
    width: 100%;
    max-width: 1366px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    `

export const LogoWrapper = styled.div`
    margin-bottom: 32px;

    img {
        width: 125px;
        height: 57.5px;
        display: block;
    }
    `

export const SocialList = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
    `

export const SocialItem = styled.a`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 24px;
        height: 24px;
        display: block;
    }
    `

export const FooterText = styled.p`
    width: 480px;
    margin-top: 24px;
    text-align: center;
    font-size: 10px;
    font-weight: 400;
    line-height: 1;
    color: #e66767;
    `

