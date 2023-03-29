import {Reducer} from 'redux'
import {  ICharacterState } from './type'
import {produce} from 'immer'
const INITIAL_STATE : ICharacterState = {
    charactersItems: []
}

const character : Reducer<ICharacterState> = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case 'ADD_CHARACTER_TO_FAVORITE_LIST' : {
            const {favoriteItem} = action.payload

            /* return {
                ...state,
                charactersItems: [
                    ...state.charactersItems,
                    {
                        ...newFavoriteItem,
                        isFavorite: true
                    }
                ]
            }  */
            return produce(state, draft => {
                draft.charactersItems.push({
                    ...favoriteItem,
                    isFavorite: true
                })
            })

          
        }
        case 'DELETE_CHARACTER_FROM_FAVORITE_LIST' : {
            
            const {idCaracter} = action.payload
            
            return produce(state, draft => {
                draft.charactersItems.filter(character => character.id !== idCaracter)
            })
        }

        default: {
            return state
        }
    }
}

export { character }