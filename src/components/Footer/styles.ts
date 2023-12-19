import styled from 'styled-components'
import { Colors } from '../../style'

export const Container = styled.footer`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.gray};

  img {
    width: 124px;
    margin: 0 auto;
  }
`

export const RedesSociais = styled.ul`
  display: flex;
  margin: 0.5rem;

  img {
    width: 24px;
  }

  li {
    margin-left: 4px;
  }
`

export const Disclaimer = styled.p`
  text-align: center;
  font-size: 1rem;
`
