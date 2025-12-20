import styled from 'styled-components'

export const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e66767;
    width: 472px;
    display: flex;
    flex-direction: column;
    `

export const Image = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    `

export const Tags = styled.div`
    position: absolute;
    margin: 16px;
    display: flex;
    gap: 8px;
    `

export const Tag = styled.span`
    background-color: #e66767;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 8px;
    `

export const Content = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    `

export const TitleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

export const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
    margin: 0;
    `

export const Rating = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #e66767;
    `

export const Description = styled.p`
    font-size: 14px;
    line-height: 1.4;
    color: #e66767;
    margin: 8px 0;
    `

export const Button = styled.button`
    width: fit-content;
    background-color: #e66767;
    color: #ffffff;
    border: none;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    `
