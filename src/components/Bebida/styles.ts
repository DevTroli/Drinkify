import styled from 'styled-components'
import { Colors } from '../../style'

export const Card = styled.div`
  max-width: 320px;
  max-height: 340px;
  height: 100%;
  padding: 0.5rem;
  background-color: ${Colors.darkGreen};
  color: ${Colors.whiteSecondary};
  border-radius: 0.35rem;

  &:hover {
    box-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.5);
    transition: 0.2s ease-in-out;
    cursor: pointer;
    scale: 1.05;
    brightness: 1.5;
  }
`

export const Imagem = styled.img`
  height: 160px;
  width: 304px;
  border-radius: 0.25rem;
`

export const Nome = styled.h3`
  margin: 8px 0;
  font-size: 1rem;
  color: ${Colors.white};
  font-weight: bold;
`

export const Desricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${Colors.white};
`

export const Botao = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  border-radius: 0.25rem;
  background-color: ${Colors.whiteSecondary};
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  padding: 1.5rem;
  background-color: ${Colors.darkGreen};
  justify-content: center;
  align-items: center;

  max-width: 1024px;
  display: flex;

  h4 {
    font-size: 1.5rem;
    color: ${Colors.white};
  }

  p {
    color: ${Colors.whiteSecondary};
    font-size: 1rem;
    line-height: 1.5rem;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }

  img {
    margin-right: 24px;
    object-fit: cover;
    width: 360px;
    height: 360px;
    border-radius: 0.5rem;
  }

  ${Botao} {
    width: max-content;
    padding: 0.5rem;
  }

  .close-icon {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: 16px;
    right: 16px;
    margin: 0;
    cursor: pointer;
  }
`
