import { loadFavoriteList } from '@/store/modules/characters/actions'
import { IFavoriteCharacterState } from '@/types'
import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

interface StorageContextProps {
  loadState: (key: string) => void
  clearState: (key: string) => void
  /* saveState: (key: string, state: IFavoriteCharacterState) => void */
}
interface StorageProviderProps {
  children: ReactNode
}

const StorageContext = createContext<StorageContextProps>(
  {} as StorageContextProps,
)

export const saveState = (key: string, state: IFavoriteCharacterState) => {
  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem(key, serializedState)
  } catch (err) {
    console.error(err)
  }
}

export const StorageProvider = ({ children }: StorageProviderProps) => {
  const dispatch = useDispatch()

  const loadState = async (key: string) => {
    try {
      const serializedState = await localStorage.getItem(key)

      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState)
    } catch (err) {
      console.error(err)
    }
  }

  const clearState = (key: string) => {
    localStorage.removeItem(key)

    dispatch(loadFavoriteList([]))
  }

  useEffect(() => {
    loadState(process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY ?? '').then(
      (favoriteListData) => {
        dispatch(loadFavoriteList(favoriteListData))
      },
    )

    /* const favoriteListData = charactersFavorites
    dispatch(loadFavoriteList(favoriteListData)) */
  }, [dispatch])

  return (
    <StorageContext.Provider value={{ loadState, clearState }}>
      {children}
    </StorageContext.Provider>
  )
}

export const useStorage = (): StorageContextProps => {
  const context = useContext(StorageContext)

  return context
}
