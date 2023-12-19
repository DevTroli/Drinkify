import { Link } from 'react-router-dom'

import * as S from './styles'

type Props = {
  slug?: string
  titulo: string
  avaliacao: number
  destacado: boolean
  tipo: string
  descricao: string
  id: number
  capa: string
}

const Bares = ({
  titulo,
  id,
  capa,
  avaliacao,
  tipo,
  destacado,
  descricao
}: Props) => (
  <S.Card>
    <img src={capa} alt="" />
    <S.Tags>
      {destacado && <S.Tag>Recomendados</S.Tag>}
      <S.Tag>{tipo}</S.Tag>
    </S.Tags>
    <S.Content>
      <S.Infos className="sobre">
        <h3>{titulo}</h3>
        <div className="center">
          <h3>{avaliacao}</h3>
          <img src="/nota.svg" alt="notas" />
        </div>
      </S.Infos>

      <p>{descricao}</p>

      <Link to={`Bares/${id}`}>
        <S.CTA as="a" href="">
          Saiba mais
        </S.CTA>
      </Link>
    </S.Content>
  </S.Card>
)

export default Bares
