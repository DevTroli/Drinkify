import BarsList from '../../components/ListaBares'
import Header from '../../components/Header'

import { useGetBarsListQuery } from '../../services/api'
import React from 'react'

function Home() {
  const { data: bares } = useGetBarsListQuery()

  if (!bares) {
    return <h1 style={{ textAlign: 'center', margin: '10%' }}>Carregando...</h1>
  }

  return (
    <>
      <Header home="home" />
      <BarsList Bares={bares} />
    </>
  )
}

export default Home
