import Bebida from '../Bebida'
import { Container, Listagem } from './styles'

type Props = {
  menu: DrinkClass[]
}

const ListaBebidas = ({ menu }: Props) => {
  return (
    <Container>
      <div className="container">
        <Listagem>
          {menu.map((b) => (
            <li key={b.id}>
              <Bebida bebida={b} />
            </li>
          ))}
        </Listagem>
      </div>
    </Container>
  )
}
export default ListaBebidas
