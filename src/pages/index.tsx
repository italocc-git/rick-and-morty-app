import { useEffect, ReactNode } from 'react'

import { useDispatch } from 'react-redux'
import { loadFavoriteList } from '@/store/modules/characters/actions'
import { useRouter } from 'next/router'

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    /* const charactersFavorites = parseCookies()?.CHARACTERS_FAVORITE
      ? JSON.parse(parseCookies().CHARACTERS_FAVORITE)
      : null */
    const charactersFavorites = localStorage.getItem('@user-dev/favorite-list')
    const favoriteListData = charactersFavorites
      ? JSON.parse(charactersFavorites)
      : {}
    dispatch(loadFavoriteList(favoriteListData))
    router.push('/character-list')
  }, [])

  return <>{children}</>
}
