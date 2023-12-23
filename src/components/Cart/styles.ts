import { styled } from 'styled-components'
import { Colors } from '../../style'

type Props = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  width: 100%;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  color: ${Colors.whiteSecondary};
  background-color: ${Colors.gray};
  z-index: 1;
  width: 360px;
  padding: 32px 16px 0 16px;

  .margin-top {
    margin-top: 24px;
  }

  h3 {
    color: ${Colors.white};
    margin-bottom: 16px;
  }

  > p {
    color: ${Colors.whiteSecondary};
  }

  .center {
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 260px;
    width: 100%;
  }

  @media (min-width: 769px) {
    max-width: 364px;
    width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${Colors.GrayBackground};
  color: ${Colors.white};
  margin-bottom: 16px;
  padding: 8px;

  & > img {
    margin-right: 8px;
    margin-bottom: 4px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  p {
    margin: 16px 0 8px 0;
  }

  div {
    img {
      cursor: pointer;
      position: absolute;
      bottom: 12px;
      right: 8px;
    }
  }
`

export const Qtty = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;

  span {
    font-weight: bold;
    color: ${Colors.darkGreen};
  }
`

export const Botao = styled.button`
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 0.5rem;
  background-color: ${Colors.green};
  cursor: pointer;
  margin-bottom: 8px;
  height: 24px;
  color: ${Colors.whiteSecondary};
  text-align: center;
`

export const Conteudo = styled.form`
  display: block;
  margin-bottom: 24px;

  label,
  input {
    color: ${Colors.white};
    display: block;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex: auto;
  column-gap: 34px;
  margin-top: 8px;
`

export const InputGroup = styled.div<Props>`
  width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};

  label {
    margin-bottom: 8px;
  }

  input {
    background-color: ${Colors.whiteSecondary};
    border: 2px solid transparent;
    width: 100%;
    padding: 8px;
    color: #4b4b4b;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;

    &.error {
      color: red;
      border: 2px solid red;
    }
  }
`
