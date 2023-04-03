import { IFavoriteCharacterState } from '@/types'

export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key)

    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.error(err)
  }
}

export const saveState = (key: string, state: IFavoriteCharacterState) => {
  console.log(state)
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem(key, serializedState)
  } catch (err) {
    console.error(err)
  }
}
