import { HeaderComponent } from './styles'
import logoImg from '@/assets/logo-black-1.svg'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Tooltip } from 'antd'
import { Star } from 'phosphor-react'
import { FormEvent } from 'react'
import { ICharacterState } from '@/types'
type HeaderProps = {
  title?: string
}

export const Header = ({ title }: HeaderProps) => {
  const { characters } = useSelector((state) => state) as ICharacterState
  const router = useRouter()

  const handleRedirectToFavorites = (e: FormEvent) => {
    e.preventDefault()
    router.push('/favorites-list')
  }

  return (
    <HeaderComponent>
      <Tooltip title="Home Page">
        <Link href="/character-list">
          <Image
            className="test-style"
            src={logoImg.src}
            alt="logo-img"
            width={48}
            height={48}
          />
        </Link>
      </Tooltip>

      <Tooltip title="My Favorite Characters">
        <button
          onClick={handleRedirectToFavorites}
          className="item-add-to-favorite"
        >
          <Star size={32} weight="regular" />
          <span>{characters.charactersItems?.length ?? 0}</span>
        </button>
      </Tooltip>
    </HeaderComponent>
  )
}
