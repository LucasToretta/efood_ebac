import styled from 'styled-components'

export const Card = styled.div`
    background-color: #ffffff;
    border: 1px solid #e66767;
    width: 472px;
    display: flex;
    flex-direction: column;
    position: relative;
    `

export const Image = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
    `

export const Tags = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    `

export const Tag = styled.span`
    background-color: #e66767;
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 8px;
    display: inline-flex;
    align-items: center;
    `

export const TagDestaque = styled(Tag)`
    position: absolute;
    left: 70%;
    transform: translateX(-50%);
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
    display: inline-flex;
    align-items: center;
    gap: 6px;
    `

export const Star = styled.span`
    color: #ffb930;
    font-size: 18px;
    line-height: 1;
    `

export const Description = styled.p`
    font-size: 14px;
    line-height: 1.4;
    color: #e66767;
    margin: 8px 0;
    `

export const ButtonLink = styled.a`
    width: fit-content;
    background-color: #e66767;
    color: #ffffff;
    border: none;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    `
