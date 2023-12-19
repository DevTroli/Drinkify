import { open } from '../../store/reducers/Cart'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { ClockIcon, ShoppingCart } from 'lucide-react'
import { Colors } from '../../style'
import { Link } from 'react-router-dom'

type Props = {
  home: 'home' | 'perfil'
  Bars?: BarClass
}

const Header = ({ home, Bars }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  if (home === 'home') {
    return (
      <S.Cabecalho>
        <Link to={'/'}>
          <img src="/LogoMain.svg" alt="Drinkify" />
        </Link>
        <S.Slogan>
          A vida é melhor com uma bebida. Encontre a sua bebida ideal com a
          Drinkify, o seu parceiro de bebidas!
        </S.Slogan>
      </S.Cabecalho>
    )
  } else {
    if (!Bars)
      return (
        <h1 style={{ textAlign: 'center', marginTop: '10%' }}>Carregando...</h1>
      )

    return (
      <S.ResCabecalho>
        <S.Container className="container">
          <Link to={'/'}>
            <h2>Bares</h2>
          </Link>
          <Link to={'/'}>
            <img src="/LogoMain.svg" alt="Drinkify" />
          </Link>
          <div
            onClick={() => dispatch(open())}
            style={{
              cursor: 'pointer',
              gap: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ShoppingCart size={36} />
            <p style={{ fontSize: '1.5rem', fontWeight: 'bolder' }}>
              {itens.length}
            </p>
          </div>
        </S.Container>
        <S.Banner style={{ backgroundImage: `url(${Bars.capa})` }}>
          <S.Blur className="blur">
            <S.Idem className="container">
              <p>{Bars.tipo}</p>
              <div>
                <h1>{Bars.titulo}</h1>
                <div>
                  <ClockIcon size={24} style={{}} />
                  <span style={{ color: Colors.GrayBackground }}>
                    Aberto de Segunda à Sabado{' '}
                  </span>
                </div>
              </div>
            </S.Idem>
          </S.Blur>
        </S.Banner>
      </S.ResCabecalho>
    )
  }
}

export default Header
