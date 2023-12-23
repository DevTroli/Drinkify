import styled from 'styled-components'
import { Colors } from '../../style'

export const Card = styled.div`
  display: grid
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 320px;
  max-height: 340px;
  height: 100%;
  padding: 0.5rem;
  background-color: ${Colors.darkGreen};
  color: ${Colors.whiteSecondary};
  border-radius: 0.35rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

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

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
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
  border-radius: 0.75rem;

  max-width: 1024px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 320px;
  }

  @media (min-width: 769px) {
    flex-direction: column;
    max-width: 640px;
  }

  h4 {
    font-size: 1.5rem;
    color: ${Colors.white};

    @media (max-width: 768px) {
      font-size: 1.25rem;
      margin-top: 8px;
    }

    @media (min-width: 769px) {
      text-align: center;
      margin-top: 8px;
    }
  }

  p {
    color: ${Colors.whiteSecondary};
    font-size: 1rem;
    line-height: 1.5rem;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;

    @media (min-width: 769px) {
      text-align: center;
    }
  }

  img {
    margin-right: 24px;
    object-fit: cover;
    width: 360px;
    height: 360px;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
      margin: 8px;
      max-height: 248px;
      max-width: 248px;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      object-fit: cover;
    }

    @media (min-width: 769px) {
      margin: 8px;
      max-height: 360px;
      max-width: 360px;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }

  ${Botao} {
    width: max-content;
    padding: 0.5rem;

    @media (max-width: 768px) {
      width: 100%;
    }

    @media (min-width: 769px) {
      width: 100%;
    }
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
