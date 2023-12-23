import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 1rem;
  }

  @media (min-width: 1020px) {
    margin: 0 auto;
    padding: 2rem;
  }
`

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 1020px) {
    gap: 24px;
    grid-template-columns: 1fr 1fr;
  }
`
