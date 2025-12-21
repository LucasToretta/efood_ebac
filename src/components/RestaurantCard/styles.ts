import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    background-color: #ffffff;
    border: 1px solid #e66767;
    width: 472px;
    display: flex;
    flex-direction: column;
`

export const CardImage = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
`

export const Tag = styled.span`
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: #e66767;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 8px;
`

export const CardContent = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
`

export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 700;
    color: #e66767;
    margin: 0;
`

export const CardDesc = styled.p`
    font-size: 14px;
    line-height: 1.4;
    color: #e66767;
    margin: 8px 0 16px;
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
