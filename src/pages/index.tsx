import { useEffect, ReactNode } from 'react'

import { useDispatch } from 'react-redux'
import { loadFavoriteList } from '@/store/modules/characters/actions'
import { useRouter } from 'next/router'
import { loadState } from '@/utils/localStorage'

interface MainProps {
  children: ReactNode
}

export default function Main({ children }: MainProps) {
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const charactersFavorites = loadState(
      process.env.NEXT_PUBLIC_LOCAL_STORAGE_KEY ?? '',
    )

    const favoriteListData = charactersFavorites
    dispatch(loadFavoriteList(favoriteListData))
    router.push('/character-list')
  }, [])

  return <>{children}</>
}
