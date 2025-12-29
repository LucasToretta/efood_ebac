import styled from 'styled-components'
import { Link } from 'react-router-dom'
import pattern from '../../assets/logo.svg'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  background-color: #ffe9d9;
  background-image: url(${pattern});
  background-repeat: repeat;
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoWrapper = styled.div`
  img {
    width: 125px;
    height: auto;
    display: block;
  }
`

export const NavLink = styled(Link)`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`

export const CartButton = styled.button`
  color: #e66767;
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: none;
  }
`
