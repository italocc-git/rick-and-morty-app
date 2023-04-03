import { createStore } from 'redux'
import { ICharacterState } from './modules/characters/type'
import rootReducer from './modules/rootReducer'

export interface IState {
  character: {
    charactersItems: ICharacterState[]
  }
}

const store = createStore(rootReducer)

export { store }
