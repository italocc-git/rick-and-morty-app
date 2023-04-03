import { IFavoriteCharacterState } from '@/types'
import { saveState } from '@/utils/localStorage'
import { Reducer } from 'redux'

const INITIAL_STATE: IFavoriteCharacterState = {
  charactersItems: [],
}

const characters: Reducer<IFavoriteCharacterState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'LOAD_FAVORITE_LIST': {
      const { favoriteList } = action.payload

      return { ...state, ...favoriteList }
    }

    case 'ADD_CHARACTER_TO_FAVORITE_LIST': {
      const { favoriteItem } = action.payload

      let newStateList: IFavoriteCharacterState

      if (state.charactersItems.length === 0) {
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
        console.log(newStateList)
      }
      saveState(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY ?? '', newStateList)

      return newStateList
    }
    case 'DELETE_CHARACTER_FROM_FAVORITE_LIST': {
      const { character } = action.payload

      const newCharacterFavoriteList = {
        charactersItems: state.charactersItems.filter(
          (item) => item.id !== character.id,
        ),
      }

      saveState(
        process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY ?? '',
        newCharacterFavoriteList,
      )

      return newCharacterFavoriteList
    }

    default: {
      return state
    }
  }
}

export { characters }
