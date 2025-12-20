import styled from 'styled-components'
import pattern from '../../assets/logo.svg'

export const HeaderBar = styled.header`
    width: 100%;
    height: 384px;
    background-color: #ffe9d9;
    background-image: url(${pattern});
    background-repeat: repeat;
    `

export const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    height: 384px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 58px;
    gap: 120px;
    `

export const LogoWrapper = styled.div`
    img {
        width: 125px;
        height: auto;
        display: block;
    }
    `

export const HeroTitle = styled.h2`
    width: 539px;
    max-width: 539px;
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    line-height: 1;
    color: #e66767;
    margin: 40px;

    span {
        white-space: nowrap;
        display: inline-block;
    }
    `


