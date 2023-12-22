import { useState } from 'react'
import { add, open } from '../../store/reducers/Cart'
import * as S from './styles'

import { useDispatch } from 'react-redux'

type Props = {
  bebida: DrinkClass
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Bebida = ({ bebida }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(bebida))
    dispatch(open())
  }

  return (
    <>
      <S.Card onClick={() => setModalAberta(true)}>
        <S.Imagem src={bebida.foto} alt="" />
        <S.Nome>{bebida.nome}</S.Nome>
        <S.Desricao>{bebida.descricao}</S.Desricao>
        <S.Botao onClick={() => setModalAberta(true)}>COMPRE JÁ</S.Botao>
      </S.Card>

      <S.Modal className={modalAberta ? 'visivel' : ''}>
        <S.ModalContent>
          <img src={bebida.foto} alt={bebida.nome} />
          <div>
            <h4>{bebida.nome}</h4>
            <p>{bebida.descricao}</p>
            <S.Botao onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(bebida.preco)}
            </S.Botao>
          </div>
          <img
            className="close-icon"
            src="/close.png"
            onClick={() => {
              setModalAberta(false)
            }}
            alt={bebida.nome}
          />
        </S.ModalContent>
        <div
          onClick={() => {
            setModalAberta(false)
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Bebida
