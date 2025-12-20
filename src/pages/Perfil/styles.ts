import styled from 'styled-components'

export const Banner = styled.div`
    height: 280px;
    background-size: cover;
    background-position: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    `

export const BannerContent = styled.div`
    position: relative;
    z-index: 1;
    max-width: 1024px;
    margin: 0 auto;
    height: 100%;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `

export const Categoria = styled.span`
    color: #fff;
    font-size: 32px;
    font-weight: 100;
    `

export const Titulo = styled.h2`
    color: #fff;
    font-size: 32px;
    font-weight: 900;
    margin: 8px 0 0;
    `

export const Container = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 56px 16px;
    `

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    `

export const Card = styled.div`
    background: #e66767;
    padding: 8px;
    display: flex;
    flex-direction: column;
    `

export const CardImage = styled.img`
    width: 100%;
    height: 167px;
    object-fit: cover;
    `

export const CardTitle = styled.h3`
    color: #fff;
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0 0;
    `

export const CardDesc = styled.p`
    color: #fff;
    font-size: 14px;
    line-height: 1.4;
    margin: 8px 0;
    `

export const CardButton = styled.button`
    margin-top: auto;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    padding: 8px;
    background: #fff;
    color: #e66767;
    `
