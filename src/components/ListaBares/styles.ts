import styled from 'styled-components'

export const Container = styled.section`
  padding: 2rem;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 1rem;
  }
`

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  justify-items: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 1020px) {
    gap: 24px;
    grid-template-columns: 1fr 1fr;
  }
`
