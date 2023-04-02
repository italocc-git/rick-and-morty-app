import { Reducer } from 'redux'
import { ICharacterState } from './type'

/* import { produce } from 'immer' */

const INITIAL_STATE: ICharacterState = {
  charactersItems: [],
}

/* const INITIAL_STATE_COOKIE = parseCookies()?.CHARACTERS_FAVORITE
  ? JSON.parse(parseCookies().CHARACTERS_FAVORITE)
  : {}
INITIAL_STATE = INITIAL_STATE_COOKIE
  ? JSON.parse(INITIAL_STATE_COOKIE)
  : INITIAL_STATE */

/* const cookies = parseCookies()
INITIAL_STATE = cookies.CHARACTERS_FAVORITE
  ? JSON.parse(cookies.CHARACTERS_FAVORITE)
  : INITIAL_STATE */

const characters: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_FAVORITE_LIST': {
      const { favoriteList } = action.payload

      return { ...state, ...favoriteList }
    }

    case 'ADD_CHARACTER_TO_FAVORITE_LIST': {
      const { favoriteItem } = action.payload
      /* return produce(state, (draft) => {
        draft.charactersItems.push({
          ...favoriteItem,
          isFavorite: true,
        })
      }) */
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
      console.log(newStateList)
      /* setCookie(null, 'CHARACTERS_FAVORITE', JSON.stringify(newStateList), {
        maxAge: 86400 * 7,
        path: '/',
      }) */
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

      /*  setCookie(
        null,
        'CHARACTERS_FAVORITE',
        JSON.stringify(newCharacterFavoriteList),
        {
          maxAge: 86400 * 7,
          path: '/',
        },
      ) */

      localStorage.setItem(
        '@user-dev/favorite-list',
        JSON.stringify(newCharacterFavoriteList),
      )

      return newCharacterFavoriteList

      /* console.log(character)
      return produce(state, (draft) => {
        const characterArrayIndex = state.charactersItems.indexOf(character)
        console.log(characterArrayIndex)
        console.log(state.charactersItems)
        state.charactersItems.splice(characterArrayIndex, 1)
      }) */
    }

    default: {
      return state
    }
  }
}

export { characters }
