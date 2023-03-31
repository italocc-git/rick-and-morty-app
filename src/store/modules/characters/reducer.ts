import {Reducer} from 'redux'
import {  ICharacterState } from './type'
import {produce} from 'immer'
const INITIAL_STATE : ICharacterState = {
    charactersItems: []
}

const characters : Reducer<ICharacterState> = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case 'ADD_CHARACTER_TO_FAVORITE_LIST' : {
            const {favoriteItem} = action.payload

            return produce(state, draft => {
                draft.charactersItems.push({
                    ...favoriteItem,
                    isFavorite: true
                })
            })

        }
        case 'DELETE_CHARACTER_FROM_FAVORITE_LIST' : {
            
            const {character} = action.payload
            
            return produce(state, draft => {
                draft.charactersItems.splice(character, 1);
                
            })
        }

        default: {
            return state
        }
    }
}

export { characters }