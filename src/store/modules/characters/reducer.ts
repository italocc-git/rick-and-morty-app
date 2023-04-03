import { Reducer } from 'redux'
import { ICharacterState } from './type'

const INITIAL_STATE: ICharacterState = {
  charactersItems: [],
}

const characters: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_FAVORITE_LIST': {
      const { favoriteList } = action.payload

      return { ...state, ...favoriteList }
    }

    case 'ADD_CHARACTER_TO_FAVORITE_LIST': {
      const { favoriteItem } = action.payload

      let newStateList: any

      if (state.length === 0) {
        newStateList = {
          charactersItems: [
            {
              ...favoriteItem,
              isFavorite: true,
            },
          ],
        }

        return newStateList
      } else {
        newStateList = {
          ...state,
          charactersItems: [
            ...state.charactersItems,
            {
              ...favoriteItem,
              isFavorite: true,
            },
          ],
        }
      }

      localStorage.setItem(
        '@user-dev/favorite-list',
        JSON.stringify(newStateList),
      )
      return newStateList
    }
    case 'DELETE_CHARACTER_FROM_FAVORITE_LIST': {
      const { character } = action.payload

      const newCharacterFavoriteList = {
        charactersItems: state.charactersItems.filter(
          (item: any) => item.id !== character.id,
        ),
      }

      localStorage.setItem(
        '@user-dev/favorite-list',
        JSON.stringify(newCharacterFavoriteList),
      )

      return newCharacterFavoriteList
    }

    default: {
      return state
    }
  }
}

export { characters }
