import React from 'react'
import { Container, Disclaimer, RedesSociais } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Container>
    <Link to={'/'}>
      <img src="/LogoMain.svg" alt="Logo" />
    </Link>
    <RedesSociais>
      <li>
        <a href="https://www.instagram.com">
          <img src="/instagram.svg" alt="Instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
      </li>
    </RedesSociais>
    <Disclaimer>
      A Drinkify é uma plataforma para vendas de bebidas diversas baseado em
      franquias, a responsabilidade pela entrega, qualidade dos produtos é toda
      dafranquia contratado © 2023
    </Disclaimer>
  </Container>
)

export default Footer
