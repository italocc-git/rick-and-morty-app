export interface ICharacterStateItem {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
  isFavorite: boolean
  type: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  episode: string[]
}

export interface IFavoriteCharacterState {
  charactersItems: ICharacterStateItem[]
}

export interface ICharacterState {
  characters: IFavoriteCharacterState
}

export interface IFilterTypes {
  name: string
  species: string
  status: string
  gender: string
}

export interface TablePagination {
  current: number
  pageSize: number
  total: number
}

export interface PaginationInfoProps {
  count?: number
  pages: number
}
