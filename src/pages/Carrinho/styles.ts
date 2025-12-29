import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    `

export const Sidebar = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 360px;
    max-width: 90vw;
    background: #e66767;
    z-index: 1000;
    padding: 24px 16px;
    overflow-y: auto;
    `

export const Item = styled.div`
    background: #ffebd9;
    border: 2px solid #e66767;
    padding: 8px;
    display: grid;
    grid-template-columns: 80px 1fr 24px;
    gap: 8px;
    align-items: center;
    margin-bottom: 16px;
    `

export const ItemImg = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    `

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    `

export const ItemTitle = styled.h3`
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    color: #e66767;
    `

export const ItemPrice = styled.span`
    font-size: 14px;
    margin: 0;
    color: #e66767;
    `

export const RemoveButton = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    color: #ffebd9;
    font-size: 18px;
    `

export const Footer = styled.div`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    `

export const TotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    color: #ffebd9;
    `

export const CheckoutButton = styled.button`
    width: 100%;
    border: 0;
    padding: 10px 12px;
    font-weight: 700;
    cursor: pointer;
    background: #ffebd9;
    color: #e66767;
    `
