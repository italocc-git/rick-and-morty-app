import { ICharacterStateItem } from '@/types'

export const loadFavoriteList = (favoriteList: ICharacterStateItem[]) => {
  return {
    type: 'LOAD_FAVORITE_LIST',
    payload: {
      favoriteList,
    },
  }
}

export const addCharacterToFavorite = (favoriteItem: ICharacterStateItem) => {
  return {
    type: 'ADD_CHARACTER_TO_FAVORITE_LIST',
    payload: {
      favoriteItem,
    },
  }
}

export function deleteCaracterFromList(character: ICharacterStateItem) {
  return {
    type: 'DELETE_CHARACTER_FROM_FAVORITE_LIST',
    payload: {
      character,
    },
  }
}
