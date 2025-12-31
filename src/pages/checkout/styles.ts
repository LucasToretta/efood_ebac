import styled from 'styled-components'

export const Container = styled.div`
    padding: 0;
`

export const Title = styled.h3`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const FieldGroup = styled.div`
    margin-bottom: 12px;
`

export const Label = styled.label`
    display: block;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 6px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 12px;
`

export const Field = styled.input`
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 2px solid #ffebd9;
    background: #ffebd9;
    color: #4b4b4b;
    font-size: 14px;

    &:focus {
        outline: none;
    }
`

export const FieldSmall = styled(Field)`
    width: 100%;
`

export const ButtonRow = styled.div`
    margin-top: 16px;
    display: grid;
    gap: 8px;
`

export const Button = styled.button`
    width: 100%;
    height: 32px;
    border: 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    background: #ffebd9;
    color: #e66767;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

export const ErrorText = styled.small`
    display: block;
    margin-top: 6px;
    color: #fff;
    font-size: 12px;
`

export const ApiError = styled.div`
    margin-top: 12px;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
`

export const ConfirmBox = styled.div`
    color: #fff;
    font-size: 14px;
    line-height: 22px;
`

export const ConfirmTitle = styled.h3`
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
`

export const ConfirmText = styled.p`
    margin-bottom: 16px;
`
