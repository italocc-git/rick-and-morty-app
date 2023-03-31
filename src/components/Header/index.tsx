import {HeaderComponent} from './styles'
import logoImg from '@/assets/rick-and-morty-logo.png'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image'
import {useRouter} from 'next/router'
import { Star } from 'phosphor-react';
import { FormEvent } from 'react';
type HeaderProps = {
    title?: string;
}

export const Header = ({title} : HeaderProps) => {
    const {characters} = useSelector(state => state) as any

    const router = useRouter()

    const handleRedirectToFavorites = (e : FormEvent) => {
        e.preventDefault()
        router.push('/favorites-list')
    }

    return(
        <HeaderComponent>
            <Link href='/'>
                <Image src={logoImg.src} alt="logo-img" width={128} height={128}  />
            </Link>
            <h1>{title}</h1>
            <button onClick={handleRedirectToFavorites} className='item-add-to-favorite' >
                <Star size={40} weight="bold" />
                <span>{characters.charactersItems.length}</span>
              
            </button>
           
        </HeaderComponent>
    )
}