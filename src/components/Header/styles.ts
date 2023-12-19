import styled from 'styled-components'
import { Colors } from '../../style'

export const Cabecalho = styled.header`
  background-color: ${Colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

export const ResCabecalho = styled.header`
  background-color: ${Colors.gray};
  margin-top: -2.25rem;
  padding: 0.5rem 0;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  p {
    cursor: pointer;
  }
`

export const Slogan = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  font-weigth: bold;
  margin: 0.5rem;
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
  padding-top: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${Colors.white};

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
