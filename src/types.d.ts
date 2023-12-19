declare type DrinkClass = {
  id: number
  preco: number
  nome: string
  descricao: string
  foto: string
}

declare type BarClass = {
  id: number
  slug?: string
  titulo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  tipo: string
  menu: DrinkClass[]
}
