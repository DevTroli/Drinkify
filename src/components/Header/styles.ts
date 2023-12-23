import styled from 'styled-components'
import { Colors } from '../../style'

export const Cabecalho = styled.header`
  background-color: ${Colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
`

export const ResCabecalho = styled.header`
  background-color: ${Colors.gray};
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;
  width: 100%;

  p {
    cursor: pointer;
  }
`

export const Slogan = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  font-weigth: bold;
  margin: 0.5rem;

  @media (min-width: 320px) {
    font-size: 1rem;
    font-weight: bold;
    width: 100%;
  }
`

export const Banner = styled.div`
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const Blur = styled.div`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Idem = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${Colors.white};
  padding: 1.5rem;

  h1 {
    color: ${Colors.white};
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    cursor: pointer;
    color: ${Colors.white};
    font-size: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
`
