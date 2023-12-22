import Bars from '../Local'
import { Container, Listagem } from './styles'

type Props = {
  Bares: BarClass[]
}

const BarsList = ({ Bares }: Props) => {
  return (
    <Container>
      <div className="container">
        <Listagem>
          {Bares.map((b) => (
            <li key={b.id}>
              <Bars
                titulo={b.titulo}
                id={b.id}
                capa={b.capa}
                avaliacao={b.avaliacao}
                tipo={b.tipo}
                destacado={b.destacado}
                descricao={b.descricao}
              />
            </li>
          ))}
        </Listagem>
      </div>
    </Container>
  )
}

export default BarsList
