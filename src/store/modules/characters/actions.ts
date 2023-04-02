import { IFavoriteCharacterState } from './type'

export const loadFavoriteList = (favoriteList: IFavoriteCharacterState[]) => {
  return {
    type: 'LOAD_FAVORITE_LIST',
    payload: {
      favoriteList,
    },
  }
}

export const addCharacterToFavorite = (
  favoriteItem: IFavoriteCharacterState,
) => {
  return {
    type: 'ADD_CHARACTER_TO_FAVORITE_LIST',
    payload: {
      favoriteItem,
    },
  }
}

export function deleteCaracterFromList(character: IFavoriteCharacterState) {
  return {
    type: 'DELETE_CHARACTER_FROM_FAVORITE_LIST',
    payload: {
      character,
    },
  }
}
