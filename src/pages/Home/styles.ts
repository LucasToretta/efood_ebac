import styled from 'styled-components'

export const Container = styled.main`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 56px 16px;
    `

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 472px);
    justify-content: space-between;
    row-gap: 48px;
    `
