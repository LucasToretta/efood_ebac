import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    z-index: 9999;
`

export const ModalBox = styled.div`
    position: relative;
    width: 1024px;
    max-width: 100%;
    min-height: 344px;
    background: #e66767;
    padding: 32px;
`

export const CloseBtn = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 32px;
    height: 32px;
    border: 0;
    cursor: pointer;
    background: transparent;
    color: #fff;
    font-size: 26px;
    line-height: 1;
`

export const ModalBody = styled.div`
    display: flex;
    gap: 24px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImageWrapper = styled.div`
    flex: 0 0 280px;

    img {
        width: 100%;
        height: 280px;
        object-fit: cover;
        display: block;
    }

    @media (max-width: 768px) {
        flex: 1;
        img {
            height: 220px;
        }
    }
`

export const Info = styled.div`
    flex: 1;
    color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 280px;

    @media (max-width: 768px) {
        min-height: auto;
    }
`

export const Title = styled.h2`
    margin: 0;
    font-size: 18px;
    font-weight: 900;
`

export const Desc = styled.p`
    margin: 16px 0;
    font-size: 14px;
    line-height: 1.6;
`

export const Portion = styled.p`
    margin: 0 0 24px;
    font-size: 14px;
    font-weight: 700;
`

export const ActionBtn = styled.button`
    margin-top: auto;
    width: fit-content;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    padding: 8px 12px;
    background: #fff;
    color: #e66767;
    `