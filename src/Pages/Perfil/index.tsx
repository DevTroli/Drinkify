import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ListaBebidas from '../../components/ListaBebidas'

import { useGetBarsQuery } from '../../services/api'

type PerfilParams = {
  id: string
}

function Perfil() {
  const { id } = useParams() as PerfilParams
  const { data: bares } = useGetBarsQuery(id)

  if (!bares)
    return (
      <h1 style={{ textAlign: 'center', marginTop: '10%' }}>Carregando...</h1>
    )

  return (
    <>
      <Header Bars={bares} home="perfil" />
      <ListaBebidas menu={bares.menu} />
    </>
  )
}

export default Perfil
